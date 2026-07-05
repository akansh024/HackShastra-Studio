import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

export type ContactSubmissionInput = {
  name: string;
  email: string;
  projectDetails: string;
};

export type ContactSubmission = ContactSubmissionInput & {
  id: string;
  createdAt: string;
  source: "website";
};

const dataDirectory = path.join(process.cwd(), "data");
const dataFile = path.join(dataDirectory, "contact-submissions.json");

async function readSubmissions(): Promise<ContactSubmission[]> {
  try {
    const content = await readFile(dataFile, "utf8");
    const parsed = JSON.parse(content) as unknown;
    return Array.isArray(parsed) ? (parsed as ContactSubmission[]) : [];
  } catch (error) {
    const fileError = error as NodeJS.ErrnoException;
    if (fileError.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function saveContactSubmission(input: ContactSubmissionInput) {
  await mkdir(dataDirectory, { recursive: true });

  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: "website",
    ...input,
  };

  const submissions = await readSubmissions();
  submissions.unshift(submission);

  await writeFile(dataFile, `${JSON.stringify(submissions, null, 2)}\n`, "utf8");
  return submission;
}
