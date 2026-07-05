"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const accessKey = "7cbd8207-d731-4c10-bd1a-2513b27d5fc3";

export function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!form.checkValidity()) {
      setResult("Please complete the required fields before sending.");
      setLoading(false);
      return;
    }

    const honeypot = formData.get("website")?.toString() || formData.get("botcheck")?.toString();
    if (honeypot) {
      setResult("Your message could not be submitted right now.");
      setLoading(false);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New HackShastra Studio Inquiry");
    formData.append("from_name", "HackShastra Studio Website");
    formData.append("message", formData.get("projectDetails")?.toString() || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { success?: boolean };

      if (data.success) {
        setResult("Thanks! Your inquiry has been sent. I'll get back to you within 24-48 hours.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again or email directly at pandayakansh09@gmail.com");
      }
    } catch {
      setResult("Something went wrong. Please try again or email directly at pandayakansh09@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-2xl border border-white/15 bg-[#0f0f0f] px-4 py-3 text-sm text-[#f7efe4] outline-none transition placeholder:text-[#7e7568] focus:border-[#c98367] focus:ring-2 focus:ring-[#3f231e]";
  const labelClass = "block text-sm font-semibold text-[#f7efe4]";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[24px] border border-white/10 bg-[#111111] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-7">
      <div className="space-y-5">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" required className={inputClass} />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </div>

        <div>
          <label className={labelClass} htmlFor="projectDetails">
            Project Details
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={6}
            required
            className={`${inputClass} resize-y`}
            placeholder="What do you need the site to do, and what should it help your business achieve?"
          />
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="botcheck">Bot check</label>
        <input id="botcheck" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8d4a3d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#aa5e49] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send aria-hidden="true" size={17} />
        <span>{loading ? "Sending..." : "Discuss Your Project"}</span>
      </button>

      <div aria-live="polite" className="mt-4 min-h-6">
        {result ? (
          <p className={`text-sm leading-6 ${result.includes("Thanks") ? "text-[#b8e6b8]" : "text-[#ffb39d]"}`}>{result}</p>
        ) : (
          <p className="text-sm leading-6 text-[#8e877b]">We use your details only to respond to your inquiry.</p>
        )}
      </div>
    </form>
  );
}
