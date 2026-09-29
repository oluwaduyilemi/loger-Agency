"use client";

import {
  ArrowUpRight,
  Layers3,
  MoveUpRight,
  Orbit,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const principles = [
  {
    icon: Orbit,
    title: "We start with your business objectives, not trends.",
    description:
      "We take time to understand your market, your customers and your goals before recommending any solution.",
  },
  {
    icon: Layers3,
    title: "We choose the right tools for the problem.",
    description:
      "We're technology-agnostic. We use the tools that best fit the job—not simply the latest or most popular.",
  },
  {
    icon: MoveUpRight,
    title: "We build for the long run.",
    description:
      "Our work is designed to evolve with your business, so you're never stuck with outdated or rigid solutions.",
  },
];

const headingReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Strategy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="strategy"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface-soft)] text-[var(--foreground)]"
    >
      {/* Very subtle technical background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                var(--border) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                var(--border) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
        {/* Main layout */}
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left */}
          <motion.div
            variants={headingReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="max-w-[450px]"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Why we're different
              </span>
            </div>

            <h2 className="max-w-[430px] font-serif text-[48px] leading-[0.94] tracking-[-0.05em] text-[var(--foreground)] sm:text-[54px] lg:text-[60px]">
              Strategy before
              <br />
              software.
            </h2>

            {/* Small accent line */}
            <motion.div
              initial={{
                scaleX: shouldReduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "left",
              }}
              className="mt-8 h-px w-20 bg-[var(--accent)]"
            />
          </motion.div>

          {/* Right */}
          <div className="grid border-t border-[var(--border)] md:grid-cols-3 md:border-t-0">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.title}
                  initial={
                    shouldReduceMotion
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 30,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.7,
                    delay: shouldReduceMotion
                      ? 0
                      : 0.15 + index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "group relative border-b border-[var(--border)] py-8",
                    "md:px-7 md:py-3",
                    index < principles.length - 1
                      ? "md:border-r"
                      : "",
                    index === 0
                      ? "md:pl-0"
                      : "",
                  ].join(" ")}
                >
                  {/* Icon */}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                          }
                        : {
                            opacity: 0,
                            scale: 0.75,
                            rotate: -8,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.55,
                      delay: shouldReduceMotion
                        ? 0
                        : 0.25 + index * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                  >
                    <Icon size={18} strokeWidth={1.45} />
                  </motion.div>

                  {/* Number */}
                  <div className="mt-7 flex items-center gap-2">
                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--muted-soft)]">
                      0{index + 1}
                    </span>

                    <span className="h-px w-7 bg-[var(--border)] transition-all duration-300 group-hover:w-10 group-hover:bg-[var(--accent)]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 max-w-[250px] font-serif text-[24px] leading-[1.03] tracking-[-0.035em] text-[var(--foreground)]">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-[260px] text-[13px] leading-6 text-[var(--muted)]">
                    {principle.description}
                  </p>

                  {/* Tiny action cue */}
                  <div className="mt-7 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted-soft)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    Principle
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}