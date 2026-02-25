import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Container from "@/components/HomePage/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#334155] bg-[#0F172A] py-14 text-[#F8F9F5]">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold uppercase tracking-[0.14em] text-[#F8F9F5]">CONCORE TECHNOLOGIES</h2>
            <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-[#F8F9F5]/70">
              Software development partner for web, mobile, AI, and cloud delivery focused on speed,
              quality, and long-term support.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-[#F8F9F5]">Links</h3>
            <ul className="mt-4 space-y-2 font-sans text-sm text-[#F8F9F5]/70">
              <li>
                <Link href="/#services" className="transition hover:text-[#F8F9F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#work" className="transition hover:text-[#F8F9F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#F8F9F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="transition hover:text-[#F8F9F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-[#F8F9F5]">Contact</h3>
            <ul className="mt-4 space-y-3 font-sans text-sm text-[#F8F9F5]/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#14B8A6]" aria-hidden="true" />
                contact@concoretechnologies.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#14B8A6]" aria-hidden="true" />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="font-mono mt-10 border-t border-[#334155] pt-6 text-sm tracking-wide text-[#F8F9F5]/60">
          © {year} CONCORE TECHNOLOGIES. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
