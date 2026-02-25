import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Concore Technologies",
  description:
    "Contact Concore Technologies for business website development, custom web apps, and software consulting. Share your project and get a tailored execution plan.",
  alternates: {
    canonical: "/contact-us",
  },
};

const serviceOptions = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud & DevOps",
  "UI/UX Design",
  "Product Discovery",
];

const processItems = [
  {
    title: "Discovery Call",
    description:
      "We understand your goals, constraints, and the technical scope before proposing an approach.",
  },
  {
    title: "Technical Assessment",
    description:
      "Our team reviews architecture, timeline, and team model to create a clear project plan.",
  },
  {
    title: "Proposal & Kickoff",
    description:
      "You receive a structured proposal with milestones, deliverables, and communication cadence.",
  },
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9F5]">
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8F9F5] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-2 text-sm font-medium text-[#14B8A6]">
            <ShieldCheck className="h-4 w-4" />
            Trusted product engineering partner
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            Let&apos;s Build Your Next Software Product
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Share your business goals and project requirements. We&apos;ll respond
            with a practical plan, timeline, and engagement model tailored to
            your team.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-8 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0F172A] md:text-3xl">
                  Project Inquiry Form
                </h2>
                <p className="mt-2 text-sm text-[#475569]">
                  Fill out the details below. For urgent inquiries, email us at{" "}
                  <a
                    href="mailto:hello@concoretech.com"
                    className="font-medium text-[#14B8A6] hover:text-[#14B8A6]"
                  >
                    hello@concoretech.com
                  </a>
                  .
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A]">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A]">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A]">
                      Project Type
                    </label>
                    <select className="w-full rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20">
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A]">
                      Estimated Budget
                    </label>
                    <select className="w-full rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20">
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A]">
                      Timeline
                    </label>
                    <select className="w-full rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20">
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2-months">1 - 2 months</option>
                      <option value="3-4-months">3 - 4 months</option>
                      <option value="5-months+">5+ months</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0F172A]">
                    Project Overview
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Describe your goals, current challenges, and what success looks like for your project."
                    className="w-full resize-none rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="rounded-lg px-6 py-6 text-base">
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button asChild variant="outline" className="rounded-lg px-6 py-6 text-base">
                    <Link href="mailto:hello@concoretech.com">Email Us Directly</Link>
                  </Button>
                </div>

                <p className="text-xs text-[#475569]">
                  By submitting this form, you agree to be contacted regarding
                  your project inquiry.
                </p>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Contact Information
              </h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3 text-[#475569]">
                  <Mail className="mt-0.5 h-4 w-4 text-[#14B8A6]" />
                  <span>hello@concoretech.com</span>
                </div>
                <div className="flex items-start gap-3 text-[#475569]">
                  <Phone className="mt-0.5 h-4 w-4 text-[#14B8A6]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3 text-[#475569]">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#14B8A6]" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Engagement Process
              </h3>
              <div className="mt-5 space-y-4">
                {processItems.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[#475569]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0F172A] p-6 text-white">
              <p className="text-sm font-medium text-[#F8F9F5]/75">
                Prefer scheduling directly?
              </p>
              <div className="mt-3 flex items-center gap-2 text-lg font-semibold">
                <Calendar className="h-5 w-5" />
                Book a consultation call
              </div>
              <Button
                asChild
                variant="secondary"
                className="mt-5 w-full rounded-lg bg-[#14B8A6] text-[#FFFFFF] hover:bg-[#14B8A6]"
              >
                <Link href="mailto:hello@concoretech.com?subject=Consultation%20Call%20Request">
                  Schedule Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
