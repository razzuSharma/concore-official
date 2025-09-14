import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 py-20 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Leading Technology Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Building the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-blue-600 dark:text-blue-400">
              {" "}
              Concore Technologies
            </span>{" "}
            specializes in cutting-edge software development, AI solutions, and
            digital transformation services that drive business growth and
            technological excellence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-xl">
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-xl"
          >
            <Link href="/contact-us">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
