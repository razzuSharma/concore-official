"use client";

import React, { useState } from "react";
import { ChevronDown, CloudCog, Code2, LayoutTemplate, Menu, Smartphone, Wrench, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#work", label: "Case Studies" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

const serviceLinks = [
  {
    href: "/services#web-app-development",
    label: "Web App Development",
    detail: "SaaS platforms, internal tools, and operations systems",
    icon: Code2,
  },
  {
    href: "/services#mobile-app-development",
    label: "Mobile App Development",
    detail: "React Native apps with release-ready delivery",
    icon: Smartphone,
  },
  {
    href: "/services#ui-ux-design",
    label: "UI/UX Design",
    detail: "Product flows, interface systems, and design QA",
    icon: LayoutTemplate,
  },
  {
    href: "/services#custom-software",
    label: "Custom Software",
    detail: "Business-specific systems built for reliability",
    icon: Wrench,
  },
  {
    href: "/services#cloud-devops",
    label: "Cloud & DevOps",
    detail: "CI/CD, observability, and production hardening",
    icon: CloudCog,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onFocusCapture={() => setIsServicesOpen(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsServicesOpen(false);
              }
            }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-[0.94rem] font-medium capitalize tracking-[0.02em] text-[#475569] transition hover:text-[#0F172A]"
              aria-expanded={isServicesOpen}
              aria-haspopup="menu"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </Link>

            <div
              className={`absolute left-1/2 top-full z-[80] mt-3 w-[380px] -translate-x-1/2 rounded-xl border border-[rgba(15,23,42,0.08)] bg-[#FFFFFF] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-150 ${
                isServicesOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
              }`}
              role="menu"
            >
              <div className="grid gap-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="group/item flex items-start gap-3 rounded-md border-l-2 border-transparent px-5 py-2.5 transition hover:border-[#14B8A6] hover:bg-[#F0FDFA]"
                  >
                    <link.icon className="mt-0.5 h-4 w-4 text-[#64748B] transition-colors group-hover/item:text-[#14B8A6]" />
                    <span>
                      <span className="block text-sm font-semibold text-[#0F172A]">{link.label}</span>
                      <span className="block text-[12px] leading-relaxed text-[#64748B]">{link.detail}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
            <div className="mt-1 rounded-md border border-[#E2E8F0] bg-[#FFFFFF]/80 p-2">
              <p className="px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-[#64748B]">Services</p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-[#475569] hover:bg-[#F0FDFA] hover:text-[#0F172A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
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
