import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Container from "@/components/HomePage/Container";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1C2128] bg-[#0A0C0F] py-14 text-[#E6E8EB]">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
            >
              <Image
                src="/logos/only-logo-white.png"
                alt="Concore Technologies logo"
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
              <span className="font-mono text-lg font-medium uppercase tracking-[0.22em] text-[#F4F6F8]">
                Concore Technologies
              </span>
            </Link>

            <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-[#9BA3AD]">
              Software development partner for web, mobile, AI, and cloud delivery focused on speed, quality, and
              long-term support.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-[#6B7280]">Links</h3>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-[#9BA3AD]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#F4F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-[#6B7280]">Contact</h3>
            <ul className="mt-4 space-y-3 font-sans text-sm text-[#9BA3AD]">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#14B8A6]" aria-hidden="true" />
                contact@concoretechnologies.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#14B8A6]" aria-hidden="true" />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#1C2128] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.02em] text-[#6B7280]">
            © {year} Concore Technologies — All rights reserved.
          </p>
          <a
            href="#"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8A929C] transition hover:text-[#F4F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
