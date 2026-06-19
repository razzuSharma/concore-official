"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#DDE6E3] bg-[#F8F9F5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8F9F5]/88">
      <nav className="mx-auto flex h-[4.5rem] max-w-[1280px] items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]">
          <Image
            src="/logos/only-logo-black.png"
            alt="Concore Technologies logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-[#0F172A] md:hidden">Concore</span>
          <span className="hidden font-mono text-base font-semibold uppercase tracking-[0.06em] text-[#0F172A] md:inline">
            CONCORE TECHNOLOGIES
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium capitalize tracking-[0.01em] text-[#475569] transition hover:text-[#0F172A]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <Button
            asChild
            className="h-10 rounded-none border border-[#123F43] bg-[#123F43] px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-[#0F3538]"
          >
            <Link href="/contact-us">Book a Call</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-none text-[#475569] hover:bg-[#F0FDFA] hover:text-[#0F172A] md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-[#E2E8F0] bg-[#F8F9F5] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono px-2 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#475569] hover:bg-[#F0FDFA]"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 h-10 rounded-none border border-[#123F43] bg-[#123F43] px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-[#0F3538]"
            >
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
