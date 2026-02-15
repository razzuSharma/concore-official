import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/HomePage/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-14 text-gray-200">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold uppercase tracking-[0.14em] text-white">CONCORE TECHNOLOGIES</h2>
            <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-white/70">
              Software development partner for web, mobile, AI, and cloud delivery focused on speed,
              quality, and long-term support.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-white">Links</h3>
            <ul className="mt-4 space-y-2 font-sans text-sm text-white/70">
              <li>
                <Link href="/#services" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#work" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-white">Contact</h3>
            <ul className="mt-4 space-y-3 font-sans text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-300" aria-hidden="true" />
                contact@concoretechnologies.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-300" aria-hidden="true" />
                +977-000-000-0000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-300" aria-hidden="true" />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="font-mono mt-10 border-t border-gray-800 pt-6 text-sm tracking-wide text-white/60">
          © {year} CONCORE TECHNOLOGIES. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
