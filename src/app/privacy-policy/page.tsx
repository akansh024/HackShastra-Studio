import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How HackShastra Studio collects, uses, stores, and protects inquiry information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-5 py-12 text-stone-950 sm:px-7 lg:px-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#4f7668] transition hover:text-stone-950">
          Back to home
        </Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-[#6f5b35]">
          Privacy Policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          We collect only what we need to respond properly.
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-stone-700">
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Information we collect</h2>
            <p className="mt-3">
              When you submit the contact form, HackShastra Studio collects your name, email, phone number, project type, budget range, and project message. We also use basic technical information such as request timing and IP-derived rate limiting to reduce spam and abuse.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">How we use it</h2>
            <p className="mt-3">
              We use inquiry details to respond, understand scope, prepare estimates, discuss services, and provide project support when you choose to work with us. We do not sell personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Storage and retention</h2>
            <p className="mt-3">
              Local development submissions are stored in a server-side JSON file. Production deployments should use a protected database or CRM with access limited to people responsible for responding to inquiries and delivering services. Inquiry records are retained only as long as needed for business, legal, support, or security purposes.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Your choices</h2>
            <p className="mt-3">
              You can ask us to update or delete inquiry information that is no longer needed. Email hello@hackshastra.studio with the details of your request.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Security</h2>
            <p className="mt-3">
              The website uses server-side validation, sanitization, rate limiting, and same-origin request checks for the contact form. No website or storage system can be guaranteed risk-free, but we design the inquiry flow to avoid exposing secrets client-side and to reduce common abuse patterns.
            </p>
          </section>
          <p className="text-sm text-stone-500">Last updated: June 28, 2026</p>
        </div>
      </article>
    </main>
  );
}
