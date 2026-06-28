import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, DM_Sans, Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import IntroSplash from "@/components/Layout/IntroSplash";

// Runs before paint: flag a first visit so the intro splash shows immediately
// (and only then). Returning visitors and reduced-motion users skip it.
const introFlagScript = `try{if(!localStorage.getItem('concore-intro-seen')&&!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){document.documentElement.classList.add('intro-pending')}}catch(e){}`;

const siteName = "Concore Technologies";
const siteUrl = "https://www.concoretechnologies.com";
const defaultTitle = "Concore Technologies | Web Development Company in Nepal";
const defaultDescription =
  "Concore Technologies builds custom web applications, business websites, and scalable software for startups and growing companies.";
const defaultOgImage = "/opengraph-image";
const defaultTwitterImage = "/twitter-image";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "web development company Nepal",
    "custom web app development",
    "business website development",
    "software development company Kathmandu",
    "Concore Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultTwitterImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bebasNeue.variable} ${dmMono.variable} ${spaceGrotesk.variable} ${fraunces.variable} font-sans antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: introFlagScript }} />
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden bg-[#F8F9F5]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.3)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />
            <div className="fixed inset-x-0 top-0 z-50">
              <Navbar />
            </div>
            <main className="relative z-10 pt-[4.5rem]">{children}</main>
            <div className="relative z-10">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <IntroSplash />
      </body>
    </html>
  );
}
