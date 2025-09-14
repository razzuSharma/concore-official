"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Computer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

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

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      default:
        return "System";
    }
  };

  return (
    <nav className="max-w-4xl mx-auto px-6 ">
      <div className="flex justify-between items-center  h-14 backdrop-blur-lg rounded-2xl px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="flex items-center">
            {mounted ? (
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/logos/only-logo-white.png"
                    : "/logos/only-logo-black.png"
                }
                alt="Concore Technologies"
                width={48}
                height={48}
                className="h-12 w-auto"
                priority
              />
            ) : (
              <div className="h-12 w-12 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
            )}
            <span className="ml-4 text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
              Concore Technologies
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/"
              className="text-gray-700 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Services
            </Link>
            <Link
              href="/our-portfolio"
              className="text-gray-700 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
            Portfolio
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
            title={`Switch to ${getThemeLabel()} theme`}
          >
            {getThemeIcon()}
            <span className="hidden sm:inline ml-2">{getThemeLabel()}</span>
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3">
          <div className="px-4 pt-4 pb-4 space-y-2 backdrop-blur-lg rounded-2xl shadow-xl">
            <Link
              href="/"
              className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
