"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const trustPoints = [
  "Verification before launch",
  "Security-aware build decisions",
  "Clear scope and honest delivery",
  "Support that does not vanish after handoff",
];

const problems = [
  {
    title: "They do not convert.",
    text:
      "A beautiful site that does not guide a visitor toward action is still a missed opportunity. We design around clarity, trust, and momentum.",
    icon: Compass,
  },
  {
    title: "They are not secure.",
    text:
      "Outdated dependencies, weak form handling, and silent assumptions create risk. We build and test for the realities that matter most.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    eyebrow: "01",
    title: "Website Development",
    description:
      "Premium websites for founders, local teams, and small businesses that need depth, speed, and substance without guesswork.",
    benefits: ["Conversion-focused structure", "Fast responsive experience", "Thoughtful content hierarchy"],
    cta: "Discuss Your Project",
  },
  {
    eyebrow: "02",
    title: "Security Testing",
    description:
      "Focused review of the parts that usually fall through the cracks: forms, headers, exposed data, and deployment assumptions.",
    benefits: ["Practical risk review", "Evidence-based findings", "A clear remediation path"],
    cta: "Get a Security Review",
  },
  {
    eyebrow: "03",
    title: "Secure Website Package",
    description:
      "A complete launch-ready package that combines design, engineering, validation, and verification in one disciplined workflow.",
    benefits: ["Launch without ambiguity", "Built-in security defaults", "Post-launch support"],
    cta: "Book a Consultation",
  },
];

const trustPillars = [
  {
    title: "Security-Minded Development",
    description: "Built by someone actively working with web application security and validation.",
    icon: ShieldCheck,
  },
  {
    title: "Verification First",
    description: "Every project is tested before delivery so the launch is calm and reliable.",
    icon: Check,
  },
  {
    title: "Modern Engineering",
    description: "Fast, maintainable, responsive websites that feel premium and perform well.",
    icon: Sparkles,
  },
  {
    title: "Clear Communication",
    description: "No agency jargon. No disappearing after launch. Just straightforward updates.",
    icon: Compass,
  },
];

const featuredProjects = [
  {
    name: "Northstar Wellness",
    industry: "Wellness",
    challenge: "The site needed to feel calm, credible, and conversion-ready while staying simple for a lean team.",
    solution: "We rebuilt the positioning, tightened the messaging, and shipped a polished experience with a verification-focused launch checklist.",
    result: "Inquiry volume increased and the site now feels like a trusted practice, not a placeholder.",
  },
  {
    name: "Lumen Ledger",
    industry: "Finance",
    challenge: "The product site needed stronger trust signals and a more professional technical narrative.",
    solution: "We refined the narrative, improved the conversion flow, and validated the site across devices and interaction points before launch.",
    result: "The launch felt more credible and the team had a clearer path for future growth.",
  },
  {
    name: "Atlas Studio",
    industry: "Creative Services",
    challenge: "The company wanted a site that felt premium, direct, and capable of holding a serious client conversation.",
    solution: "We shaped a spatial, high-trust interface with careful UX decisions and a refined contact experience.",
    result: "The site now communicates confidence immediately and turns interest into real conversations.",
  },
];

const process = [
  {
    title: "Discover",
    description: "We define the audience, offer, risks, and success signals before the first page is drafted.",
  },
  {
    title: "Build",
    description: "We shape the interface and architecture around clarity, security, and business outcomes.",
  },
  {
    title: "Test",
    description: "We challenge the experience across devices, content flow, and interaction points.",
  },
  {
    title: "Verify",
    description: "We confirm the launch state, from forms to performance to content readiness.",
  },
  {
    title: "Launch",
    description: "We go live with a calm handoff and the confidence that the site is ready to be trusted.",
  },
];

const verificationSteps = [
  { label: "DISCOVERY", complete: true },
  { label: "BUILD", complete: true },
  { label: "TEST", complete: true },
  { label: "VERIFY", complete: true },
  { label: "LAUNCH PENDING", complete: false },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "HackShastra Studio",
      url: "https://hackshastra.in",
      description:
        "HackShastra Studio builds modern websites, validates digital products, and performs security reviews with a verification-first mindset.",
      sameAs: ["https://www.linkedin.com/"],
    },
    {
      "@type": "WebSite",
      name: "HackShastra Studio",
      url: "https://hackshastra.in",
      description:
        "Modern websites, security testing, and secure digital solutions built with a verification-first approach.",
    },
  ],
};

function VerificationDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
      className="relative z-10"
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
        <div className="rounded-[22px] border border-white/10 bg-[#0a0a0a] p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f8b73]">CASE FILE</p>
              <p className="mt-2 text-lg font-semibold text-white">WEBSITE PROJECT</p>
            </div>
            <div className="rounded-full border border-[#8d4a3d]/50 bg-[#14110f] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f0c9b5]">
              Launch pending
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.28, delay: 0.1 + index * 0.05 }}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`grid h-7 w-7 place-items-center rounded-full ${step.complete ? "bg-[#8d4a3d] text-white" : "bg-[#1c1714] text-[#9f8b73]"}`}>
                    {step.complete ? <Check aria-hidden="true" size={14} /> : <span className="text-[10px]">•</span>}
                  </div>
                  <span className="text-sm font-medium text-[#f2e8da]">{step.label}</span>
                </div>
                <span className={`text-[11px] uppercase tracking-[0.24em] ${step.complete ? "text-[#f0c9b5]" : "text-[#8e877b]"}`}>
                  {step.complete ? "Complete" : "Pending"}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between text-sm text-[#d3c1a7]">
              <span>Verification-first delivery</span>
              <span className="text-[#f0c9b5]">No assumptions</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f7efe4]">
      <Script id="hackshastra-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-7 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="HackShastra Studio home">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#8d4a3d] bg-[#111111] text-sm font-semibold text-[#f7efe4]">
              HS
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7efe4]">
              HackShastra Studio
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm text-[#cbbca8] md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#trust" className="transition hover:text-white">
              Why Us
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#8d4a3d]/70 bg-[#111111] px-4 py-2 text-sm font-semibold text-[#f7efe4] transition hover:border-[#b56654] hover:bg-[#1a1512]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(141,74,61,0.24),_transparent_45%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-7 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative z-10 flex flex-col justify-center"
          >
            <span className="w-fit rounded-full border border-[#8d4a3d]/50 bg-[#121212] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4b391]">
              Verification over assumptions
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Build Better.
              <br />
              Verify Everything.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9bbab]">
              A boutique cybersecurity and web engineering studio building modern websites with a verification-first mindset.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8d4a3d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#aa5e49]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#f7efe4] transition hover:border-[#8d4a3d] hover:bg-white/10"
              >
                Get a Security Review
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-[#c6b7a0] sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                  <Check aria-hidden="true" size={18} className="shrink-0 text-[#c98367]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <VerificationDashboard />
        </div>
      </section>

      <section id="problem" className="border-b border-white/10 bg-[#0b0b0b] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b67a61]">The problem</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Most websites are launched before they are truly ready.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {problems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-[24px] border border-white/10 bg-[#121212] p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8d4a3d]/40 bg-[#1a1512] text-[#f0c9b5]">
                    <Icon aria-hidden="true" size={20} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-8 text-[#c8b9a6]">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-[#080808] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Services</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              We design, build, test, and verify the experience from first click to final handoff.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#111111] p-7"
              >
                <div className="flex items-center justify-between text-sm text-[#9f8b73]">
                  <span>{service.eyebrow}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.24em]">
                    Studio
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-8 text-[#c8b9a6]">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-[#e9ddca]">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <BadgeCheck aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-[#c98367]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f0c9b5] transition hover:text-white">
                  <span>{service.cta}</span>
                  <ArrowRight aria-hidden="true" size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="border-b border-white/10 bg-[#0d0d0d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Why HackShastra Studio</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Built for founders and teams who want proof before launch.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[24px] border border-white/10 bg-[#111111] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#8d4a3d]/30 bg-[#1b1713] text-[#f0c9b5]">
                    <Icon aria-hidden="true" size={18} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c8b9a6]">{pillar.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-white/10 bg-[#090909] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Selected Work</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A small portfolio of work shaped for trust, clarity, and conversion.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#111111] p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.24em] text-[#9f8b73]">
                    {project.industry}
                  </span>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[#c8b9a6]">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Challenge</p>
                    <p className="mt-2">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Solution</p>
                    <p className="mt-2">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Result</p>
                    <p className="mt-2">{project.result}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/10 bg-[#080808] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Process</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A disciplined path from discovery to launch.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {process.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-[#111111] p-6 md:flex-row md:items-start md:gap-8">
                <div className="flex items-center gap-4 md:min-w-[180px]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#8d4a3d]/40 bg-[#1b1713] text-sm font-semibold text-[#f0c9b5]">
                    {index + 1}
                  </div>
                  <div className="text-lg font-semibold text-white">{step.title}</div>
                </div>
                <p className="max-w-2xl text-sm leading-8 text-[#c8b9a6]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-[#0b0b0b] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b67a61]">About</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Built by Akansh Pandey.
            </h2>
            <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#d3c1a7]">
              From the creator of HackShastra
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-[#111111] p-7 text-[#c8b9a6]">
            <p className="text-lg leading-8">
              Cybersecurity student. Web application security intern. Creator of HackShastra.
            </p>
            <p className="mt-4 text-lg leading-8">
              HackShastra Studio exists because too many websites are launched before they are verified.
            </p>
            <p className="mt-4 text-lg leading-8">
              We believe trust is earned through testing, validation, and attention to detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#f7efe4]">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Boutique Studio</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Security-minded Build</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Verification-first Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#060606] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-7 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Start a project that is built to be seen, tested, and trusted.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#c8b9a6]">
              Share what needs to work and I will respond with a practical next step, the right scope, and the questions that matter.
            </p>
            <div className="mt-8 space-y-4 text-sm text-[#d9c7a5]">
              <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Typical response time</p>
                <p className="mt-2 text-base font-semibold text-[#f7efe4]">24-48 hours</p>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Communication</p>
                <p className="mt-2 text-base leading-7 text-[#c8b9a6]">
                  No spam. No automated sales calls. Only project-related communication.
                </p>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b67a61]">Availability</p>
                <p className="mt-2 text-base font-semibold text-[#f7efe4]">Currently accepting a limited number of projects.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#030303] px-5 py-8 text-sm text-[#8e877b] sm:px-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HackShastra Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
