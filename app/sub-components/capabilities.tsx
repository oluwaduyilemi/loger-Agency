"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brush,
  LayoutDashboard,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const capabilities = [
  {
    number: "01",
    icon: Brush,
    title: "Brand & Visual Design",
    description:
      "We craft visual identities and marketing assets that make your business look credible, consistent and unforgettable.",
    items: [
      "Brand Identity",
      "Visual Systems",
      "Marketing Materials",
      "Social & Digital Assets",
    ],
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Digital Experiences",
    description:
      "We design and build websites, web apps and digital products that are beautiful, usable and built to convert.",
    items: [
      "Website Design & Development",
      "Product & UI/UX Design",
      "Web Applications",
      "Design Systems",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Growth & Optimization",
    description:
      "We help you attract the right visitors, convert more of them and continuously improve performance across every channel.",
    items: [
      "Performance Optimization",
      "Conversion Rate Optimization",
      "SEO Foundations",
      "Digital Discoverability",
    ],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI & Automation",
    description:
      "We implement practical AI solutions and automations that save time, reduce costs and unlock new opportunities.",
    items: [
      "AI Assistants & Integrations",
      "Workflow Automation",
      "Data & Process Automation",
      "Custom AI Solutions",
    ],
  },
];

const sectionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
    >
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.18,
        }}
        className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24 lg:px-12 lg:py-28"
      >
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          className="max-w-[700px]"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              What we do
            </span>
          </div>

          <h2 className="max-w-[620px] font-serif text-[42px] leading-[0.98] tracking-[-0.045em] text-[var(--foreground)] sm:text-[50px] lg:text-[56px]">
            Four core capabilities.
            <br />
            One goal: your business growth.
          </h2>
        </motion.div>

        {/* Capability grid */}
        <div className="mt-16 grid grid-cols-1 border-t border-[var(--border)] md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:border-t-0">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.number}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 34 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.75,
                  delay: shouldReduceMotion ? 0 : index * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "group relative border-b border-[var(--border)] py-8 md:px-8 lg:border-b-0 lg:py-5",
                  index === 0
                    ? "md:border-r lg:border-r"
                    : index === 1
                      ? "lg:border-r"
                      : index === 2
                        ? "md:border-r lg:border-r"
                        : "",
                  index >= 2 ? "lg:mt-0" : "",
                ].join(" ")}
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0.75, rotate: -8 }
                    }
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.55,
                      delay: shouldReduceMotion ? 0 : 0.15 + index * 0.11,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--accent)] text-[var(--background)]"
                  >
                    <Icon size={17} strokeWidth={1.7} />
                  </motion.div>

                  <span className="text-[10px] font-medium tracking-[0.08em] text-[var(--muted-soft)]">
                    {capability.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-8 max-w-[260px] font-serif text-[26px] leading-[1.02] tracking-[-0.035em] text-[var(--foreground)]">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[255px] text-[13px] leading-6 text-[var(--muted)]">
                  {capability.description}
                </p>

                {/* List */}
                <ul className="mt-6 space-y-2.5">
                  {capability.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -8 }
                      }
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        delay: shouldReduceMotion
                          ? 0
                          : 0.32 + index * 0.11 + itemIndex * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-start gap-2 text-[11px] leading-5 text-[var(--foreground)]"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--muted-soft)]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Learn more */}
                <Link
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium text-[var(--accent)]"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
                  </span>

                  <ArrowRight
                    size={13}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}