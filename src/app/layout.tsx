import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "HackShastra Studio | Build Better. Verify Everything.";
const siteDescription =
  "Modern websites, security testing, and secure digital solutions built with a verification-first mindset.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hackshastra.in"),
  title: {
    default: siteTitle,
    template: "%s | HackShastra Studio",
  },
  description: siteDescription,
  keywords: [
    "HackShastra Studio",
    "cybersecurity web design",
    "secure website development",
    "website security review",
    "startup website design",
    "small business website",
  ],
  alternates: {
    canonical: "https://hackshastra.in",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "https://hackshastra.in",
    siteName: "HackShastra Studio",
    locale: "en_US",
    images: [{ url: "/studio-workspace.png", width: 1200, height: 675, alt: "HackShastra Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/studio-workspace.png"],
  },
  other: {
    "theme-color": "#050505",
    "og:image:alt": "HackShastra Studio",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "HackShastra Studio",
      url: "https://hackshastra.in",
      description: siteDescription,
    },
    {
      "@type": "WebSite",
      name: "HackShastra Studio",
      url: "https://hackshastra.in",
      description: siteDescription,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-[#f7efe4]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
