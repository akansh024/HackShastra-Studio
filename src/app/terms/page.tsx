import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Service terms for HackShastra Studio website projects and support work.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-5 py-12 text-stone-950 sm:px-7 lg:px-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#4f7668] transition hover:text-stone-950">
          Back to home
        </Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-[#6f5b35]">
          Terms
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Clear terms keep website projects calm and predictable.
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-stone-700">
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Scope and pricing</h2>
            <p className="mt-3">
              Prices shown on the website are starting prices. Final scope, deliverables, timeline, revision rounds, payment milestones, and third-party costs are confirmed before work begins.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Client responsibilities</h2>
            <p className="mt-3">
              Clients are responsible for providing accurate business information, approvals, brand assets, content, legal text, hosting access, and third-party account access when required for the project.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Delivery and revisions</h2>
            <p className="mt-3">
              Timelines depend on content readiness, feedback speed, integrations, and scope changes. Revisions are handled according to the confirmed proposal. New features or major direction changes may require a revised estimate.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Maintenance and security</h2>
            <p className="mt-3">
              Maintenance and security reviews reduce risk but do not guarantee uninterrupted service or permanent protection from third-party threats. Ongoing updates, backups, hosting practices, and account security remain important after launch.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Ownership</h2>
            <p className="mt-3">
              After agreed payments are complete, clients receive the agreed website deliverables. Licenses for fonts, images, plugins, hosting, domains, and other third-party tools remain subject to their provider terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-stone-950">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to hello@hackshastra.studio.
            </p>
          </section>
          <p className="text-sm text-stone-500">Last updated: June 28, 2026</p>
        </div>
      </article>
    </main>
  );
}
