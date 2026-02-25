"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Case Studies" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#DDE6E3] bg-[#F0FAFA]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F0FAFA]/88">
      <div className="border-b border-[#12374B] bg-[#0F2E45] px-6 py-2">
        <p className="mx-auto max-w-[1280px] text-center font-mono text-[11px] uppercase tracking-[0.1em] text-[#2DD4BF]">
          Kathmandu operations base • Remote worldwide • Available for Q2 and Q3 builds
        </p>
      </div>

      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8 lg:px-10" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#0F2E45]">
            <Image
              src="/logos/only-logo-white.png"
              alt="Concore Technologies logo"
              width={18}
              height={18}
              className="h-[1.15rem] w-[1.15rem] object-contain"
              priority
            />
          </span>
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-[#0F172A] md:hidden">Concore</span>
          <span className="hidden font-mono text-base font-semibold uppercase tracking-[0.06em] text-[#0F172A] md:inline">
            CONCORE TECHNOLOGIES
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.94rem] font-medium capitalize tracking-[0.02em] text-[#475569] transition hover:text-[#0F172A]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" className="h-10 rounded-[8px] border-[#CBD5E1] bg-transparent px-5 text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]">
            <Link href="/contact-us">Get Estimate</Link>
          </Button>
          <Button asChild className="h-10 rounded-[8px] bg-[#14B8A6] px-5 text-white hover:bg-[#0D9488]">
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
        <div className="border-t border-[#E2E8F0] bg-[#F0FAFA] px-6 py-4 md:hidden">
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
            <Button asChild className="mt-2 h-10 rounded-[8px] bg-[#14B8A6] text-white hover:bg-[#0D9488]">
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
