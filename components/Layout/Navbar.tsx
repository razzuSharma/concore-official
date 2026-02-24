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
    <header className="border-b border-[#213457] bg-[#070b12]/95 backdrop-blur supports-[backdrop-filter]:bg-[#070b12]/88">
      <nav className="mx-auto flex h-20 max-w-[1180px] items-center justify-between px-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
          <Image
            src="/logos/only-logo-white.png"
            alt="Concore Technologies logo"
            width={30}
            height={30}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#d9e4fb] md:hidden">Concore</span>
          <span className="hidden font-mono text-sm font-semibold uppercase tracking-[0.08em] text-[#e4edff] md:inline">
            CONCORE TECHNOLOGIES
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.14em] text-[#9db5de] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" className="rounded-none border-[#36598f] bg-transparent text-[#d8e5ff] hover:bg-[#0d1b31]">
            <Link href="/contact-us">Get Estimate</Link>
          </Button>
          <Button asChild className="rounded-none bg-[#1f71f4] text-white hover:bg-[#3383ff]">
            <Link href="/contact-us">Book a Call</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-none text-[#d0def8] hover:bg-[#11203a] hover:text-white md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      <div className="border-t border-[#213457] px-6 py-2">
        <p className="mx-auto max-w-[1180px] text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[#90acda]">
          Kathmandu operations base • Remote worldwide • Available for Q2 and Q3 builds
        </p>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#213457] bg-[#070b12] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono px-2 py-2 text-xs uppercase tracking-[0.14em] text-[#c6d6f3] hover:bg-[#10203a]"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-none bg-[#1f71f4] text-white hover:bg-[#3383ff]">
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
