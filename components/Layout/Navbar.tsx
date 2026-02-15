"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Computer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/our-portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      default:
        return <Computer className="h-4 w-4" />;
    }
  };

  return (
    <header className="border-b border-gray-800/80 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
          <Image
            src="/logos/only-logo-white.png"
            alt="Concore Technologies logo"
            width={30}
            height={30}
            className="h-7 w-7 rounded-sm object-contain"
            priority
          />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base">
            CONCORE TECHNOLOGIES
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-gray-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact-us"
            className="hidden text-sm font-medium tracking-wide text-gray-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 lg:inline"
          >
            Get Estimate
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
          </Button>
          <Button asChild className="hidden bg-blue-600 text-white hover:bg-blue-500 md:inline-flex">
            <Link href="/contact-us">Book a Call</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-md text-gray-300 hover:bg-gray-800 hover:text-white md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-gray-800 bg-gray-950 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium tracking-wide text-gray-200 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-blue-600 text-white hover:bg-blue-500">
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                Book a Call
              </Link>
            </Button>
            <Link
              href="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-md px-3 py-2 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
