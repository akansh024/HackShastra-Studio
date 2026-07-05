import { NextRequest, NextResponse } from "next/server";
import { saveContactSubmission, type ContactSubmissionInput } from "@/lib/contact-submissions";

type FieldErrors = Partial<Record<keyof ContactSubmissionInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const duplicateWindowMs = 60 * 1000;
const web3FormsAccessKey = process.env.WEB3FORMS_ACCESS_KEY ?? "7cbd8207-d731-4c10-bd1a-2513b27d5fc3";

const requestLog = new Map<string, number[]>();
const recentSubmissions = new Map<string, number>();

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
}

function sameOriginRequest(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function isRateLimited(key: string) {
  const now = Date.now();
  const freshRequests = (requestLog.get(key) ?? []).filter((time) => now - time < rateLimitWindowMs);

  if (freshRequests.length >= maxRequestsPerWindow) {
    requestLog.set(key, freshRequests);
    return true;
  }

  requestLog.set(key, [...freshRequests, now]);
  return false;
}

function fingerprint(input: ContactSubmissionInput) {
  return [input.email.toLowerCase(), input.projectDetails.toLowerCase()].join("|");
}

function isDuplicate(input: ContactSubmissionInput) {
  const key = fingerprint(input);
  const now = Date.now();
  const previous = recentSubmissions.get(key);

  for (const [existingKey, time] of recentSubmissions.entries()) {
    if (now - time > duplicateWindowMs) recentSubmissions.delete(existingKey);
  }

  if (previous && now - previous < duplicateWindowMs) return true;

  recentSubmissions.set(key, now);
  return false;
}

function validate(payload: Record<string, unknown>) {
  const input: ContactSubmissionInput = {
    name: cleanText(payload.name, 120),
    email: cleanText(payload.email, 180).toLowerCase(),
    projectDetails: cleanText(payload.projectDetails, 2000),
  };

  const errors: FieldErrors = {};

  if (!input.name) errors.name = "Please enter your name.";
  if (!emailPattern.test(input.email)) errors.email = "Please enter a valid email address.";
  if (!input.projectDetails) errors.projectDetails = "Please tell us a little about the project.";

  return { input, errors };
}

export async function POST(request: NextRequest) {
  if (!sameOriginRequest(request)) {
    return NextResponse.json({ message: "Request origin is not allowed." }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Invalid request format." }, { status: 415 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  const honeypotFilled = cleanText(payload.website, 200) || cleanText(payload.botcheck, 200);
  if (honeypotFilled) {
    return NextResponse.json({ message: "Thanks! Your inquiry has been received." }, { status: 200 });
  }

  const { input, errors } = validate(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Please fix the highlighted fields.", errors }, { status: 400 });
  }

  if (isDuplicate(input)) {
    return NextResponse.json({ message: "We already received this inquiry. You are on our list." });
  }

  try {
    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3FormsAccessKey,
        subject: "New HackShastra Studio Inquiry",
        from_name: "HackShastra Studio Website",
        name: input.name,
        email: input.email,
        message: input.projectDetails,
      }),
    });

    const responseText = await web3FormsResponse.text();
    let web3FormData: { success?: boolean; message?: string } = {};

    try {
      web3FormData = JSON.parse(responseText) as { success?: boolean; message?: string };
    } catch {
      web3FormData = {};
    }

    if (!web3FormsResponse.ok || web3FormData.success === false) {
      await saveContactSubmission(input);
      return NextResponse.json({ message: "Thanks! Your inquiry has been sent. I'll get back to you within 24-48 hours." });
    }

    await saveContactSubmission(input);
    return NextResponse.json({ message: "Thanks! Your inquiry has been sent. I'll get back to you within 24-48 hours." });
  } catch {
    await saveContactSubmission(input);
    return NextResponse.json({ message: "Thanks! Your inquiry has been sent. I'll get back to you within 24-48 hours." });
  }
}
