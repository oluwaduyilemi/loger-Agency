"use client";

import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  type: "landscape" | "fintech" | "interior" | "analytics";
};

const projects: Project[] = [
  {
    number: "01",
    category: "LANDSCAPE CO.",
    title: "Sustainable landscapes. Better futures.",
    description:
      "A modern digital presence designed to communicate the company's expertise, services and environmental focus.",
    type: "landscape",
  },
  {
    number: "02",
    category: "FINTECH PLATFORM",
    title: "Banking made simple and secure.",
    description:
      "A product experience focused on clarity, trust and a simpler path through complex financial information.",
    type: "fintech",
  },
  {
    number: "03",
    category: "INTERIOR STUDIO",
    title: "Timeless design. Thoughtful living.",
    description:
      "A refined editorial experience built around visual storytelling, trust and premium positioning.",
    type: "interior",
  },
  {
    number: "04",
    category: "SaaS ANALYTICS",
    title: "Grow faster with smarter insights.",
    description:
      "A product interface that turns complex business data into clear, actionable information.",
    type: "analytics",
  },
];

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 32,
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

function BrowserTopBar() {
  return (
    <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-[#171514] px-3">
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

      <div className="ml-auto flex items-center gap-2">
        <span className="h-1.5 w-6 rounded-full bg-white/10" />
        <span className="h-1.5 w-8 rounded-full bg-white/10" />
        <span className="h-1.5 w-5 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function LandscapeVisual() {
  return (
    <div className="relative h-full min-h-[230px] overflow-hidden bg-[#e8e4dc]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f4f1eb_0%,#d4d0c7_48%,#8f948f_100%)]" />

      {/* Building */}
      <div className="absolute bottom-[-2%] left-[7%] h-[76%] w-[52%] bg-[#efede8] shadow-[12px_0_25px_rgba(0,0,0,0.08)]" />

      <div className="absolute bottom-[0%] left-[39%] h-[68%] w-[32%] -skew-x-[15deg] bg-[#b8b7b2]" />

      <div className="absolute bottom-[0%] right-[-2%] h-[63%] w-[29%] skew-x-[13deg] bg-[#d4d1ca]" />

      {/* Windows */}
      <div className="absolute bottom-[13%] left-[14%] grid w-[36%] grid-cols-4 gap-2 opacity-65">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="h-4 bg-[#faf8f3]/80"
          />
        ))}
      </div>

      {/* Overlay copy */}
      <div className="absolute left-6 top-6">
        <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-black/45">
          Landscape Co.
        </span>

        <h4 className="mt-3 max-w-[170px] font-serif text-[25px] leading-[0.95] tracking-[-0.04em] text-[#171514]">
          Sustainable landscapes.
          <br />
          Better futures.
        </h4>
      </div>

      <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[8px] font-medium text-[#171514]">
        View project
        <ArrowUpRight size={10} strokeWidth={1.7} />
      </div>
    </div>
  );
}

function FintechVisual() {
  return (
    <div className="relative h-full min-h-[230px] overflow-hidden bg-[#141615]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(72,110,255,0.22),transparent_35%)]" />

      {/* Dashboard */}
      <div className="absolute inset-[11%] overflow-hidden rounded-xl border border-white/10 bg-[#1b1e1f] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="text-[8px] font-medium text-white/45">
            FINTECH
          </span>

          <div className="flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-white/10" />
            <span className="h-1.5 w-6 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.15fr] gap-4 p-4">
          <div>
            <span className="text-[7px] uppercase tracking-[0.18em] text-white/30">
              Balance
            </span>

            <div className="mt-2 text-[22px] font-semibold tracking-[-0.05em] text-white">
              $84,320
            </div>

            <div className="mt-2 text-[7px] text-[#7894ff]">
              +12.8% this month
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white/[0.04] p-2">
                <span className="text-[6px] uppercase tracking-[0.14em] text-white/30">
                  Income
                </span>
                <div className="mt-1 text-[9px] font-medium text-white">
                  $18,420
                </div>
              </div>

              <div className="rounded-lg bg-white/[0.04] p-2">
                <span className="text-[6px] uppercase tracking-[0.14em] text-white/30">
                  Out
                </span>
                <div className="mt-1 text-[9px] font-medium text-white">
                  $7,210
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="relative flex items-end rounded-lg border border-white/8 bg-white/[0.025] p-3">
            <svg
              viewBox="0 0 200 90"
              className="h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 78C25 68 36 70 51 60C67 49 74 55 91 43C105 33 118 40 131 27C147 13 164 20 196 5"
                stroke="#7792ff"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M4 78C25 68 36 70 51 60C67 49 74 55 91 43C105 33 118 40 131 27C147 13 164 20 196 5V90H4Z"
                fill="rgba(119,146,255,0.08)"
              />

              <circle
                cx="196"
                cy="5"
                r="3"
                fill="#7792ff"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating data badge */}
      <div className="absolute bottom-5 left-5 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur">
        <span className="text-[6px] uppercase tracking-[0.16em] text-white/35">
          Monthly growth
        </span>

        <div className="mt-1 text-[12px] font-semibold text-white">
          +32.4%
        </div>
      </div>
    </div>
  );
}

function InteriorVisual() {
  return (
    <div className="relative h-full min-h-[230px] overflow-hidden bg-[#e5ded4]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f4f0e9_0%,#d6cec2_100%)]" />

      {/* Room */}
      <div className="absolute inset-x-[8%] bottom-[7%] top-[14%] overflow-hidden bg-[#eee9e2] shadow-[0_25px_45px_rgba(25,20,15,0.1)]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),transparent_40%)]" />

        {/* Window */}
        <div className="absolute right-[8%] top-[8%] h-[56%] w-[36%] border border-black/10 bg-[#c6c9c5]">
          <div className="absolute inset-y-0 left-1/2 w-px bg-black/10" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/10" />
        </div>

        {/* Sofa */}
        <div className="absolute bottom-[10%] left-[10%] h-[27%] w-[57%] rounded-t-[22px] bg-[#b2aaa0]" />
        <div className="absolute bottom-[7%] left-[18%] h-[15%] w-[44%] rounded-[10px] bg-[#cbc3b7]" />

        {/* Table */}
        <div className="absolute bottom-[7%] right-[8%] h-[30%] w-[26%] rounded-full border border-black/10 bg-[#bda996]/50" />

        {/* Plant */}
        <div className="absolute bottom-[12%] right-[17%] h-[28%] w-[7%] bg-[#7e827c]/40" />
      </div>

      <div className="absolute left-6 top-6">
        <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-black/45">
          Interior Studio
        </span>

        <h4 className="mt-3 max-w-[175px] font-serif text-[25px] leading-[0.95] tracking-[-0.04em] text-[#171514]">
          Timeless design.
          <br />
          Thoughtful living.
        </h4>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="relative h-full min-h-[230px] overflow-hidden bg-[#ece9e3]">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#f4f2ed_0%,#dedbd4_100%)]" />

      {/* Dashboard window */}
      <div className="absolute inset-[10%] overflow-hidden rounded-xl border border-black/10 bg-[#f9f7f3] shadow-[0_25px_50px_rgba(20,17,15,0.12)]">
        <div className="border-b border-black/10 px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-black/40">
              Analytics
            </span>

            <span className="rounded-full bg-black/5 px-2 py-1 text-[6px] text-black/35">
              Last 30 days
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[0.72fr_1.28fr] gap-3 p-4">
          <div className="space-y-2">
            <div className="rounded-lg bg-black/[0.035] p-3">
              <span className="text-[6px] uppercase tracking-[0.14em] text-black/35">
                Visitors
              </span>
              <div className="mt-2 text-[15px] font-semibold tracking-[-0.04em]">
                24,842
              </div>
              <span className="text-[7px] text-[#2d5bff]">
                +37%
              </span>
            </div>

            <div className="rounded-lg bg-black/[0.035] p-3">
              <span className="text-[6px] uppercase tracking-[0.14em] text-black/35">
                Conversion
              </span>
              <div className="mt-2 text-[15px] font-semibold tracking-[-0.04em]">
                4.82%
              </div>
              <span className="text-[7px] text-[#2d5bff]">
                +18%
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-black/10 bg-white p-3">
            <div className="text-[6px] uppercase tracking-[0.14em] text-black/30">
              Performance
            </div>

            <svg
              viewBox="0 0 230 110"
              className="mt-5 h-[100px] w-full"
              fill="none"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <line
                  key={index}
                  x1="0"
                  x2="230"
                  y1={20 + index * 18}
                  y2={20 + index * 18}
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="1"
                />
              ))}

              <path
                d="M4 89C25 82 33 75 48 78C62 80 70 65 86 68C102 71 116 48 130 54C145 60 155 34 170 40C189 48 199 22 226 12"
                stroke="#2d5bff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <path
                d="M4 89C25 82 33 75 48 78C62 80 70 65 86 68C102 71 116 48 130 54C145 60 155 34 170 40C189 48 199 22 226 12V110H4Z"
                fill="rgba(45,91,255,0.07)"
              />

              <circle
                cx="226"
                cy="12"
                r="3.5"
                fill="#2d5bff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: Project["type"] }) {
  return (
    <div className="relative overflow-hidden rounded-t-[12px]">
      <BrowserTopBar />

      {type === "landscape" && <LandscapeVisual />}
      {type === "fintech" && <FintechVisual />}
      {type === "interior" && <InteriorVisual />}
      {type === "analytics" && <AnalyticsVisual />}
    </div>
  );
}

export default function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
        {/* Section heading */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Selected work
              </span>
            </div>

            <h2 className="max-w-[600px] font-serif text-[46px] leading-[0.96] tracking-[-0.05em] sm:text-[54px] lg:text-[60px]">
              Real projects.
              <br />
              <span className="italic">Real impact.</span>
            </h2>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 border-b border-[var(--accent)] pb-1 text-[12px] font-medium text-[var(--foreground)]"
          >
            View all projects

            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={
                shouldReduceMotion
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 42,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.18,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion
                  ? 0
                  : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -5,
                    }
              }
              className="group overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--surface)] transition-[box-shadow,border-color] duration-500 hover:border-[var(--border-strong)] hover:shadow-[0_20px_50px_color-mix(in_srgb,var(--foreground)_8%,transparent)]"
            >
              {/* Visual */}
              <div className="overflow-hidden">
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.025,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="origin-center"
                >
                  <ProjectVisual type={project.type} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-soft)]">
                    {project.category}
                  </span>

                  <span className="text-[8px] font-medium tracking-[0.12em] text-[var(--muted-soft)]">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-4 min-h-[55px] font-serif text-[23px] leading-[1.02] tracking-[-0.035em] text-[var(--foreground)]">
                  {project.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-[11px] leading-5 text-[var(--muted)]">
                  {project.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-[10px] font-medium text-[var(--foreground)]"
                >
                  <span className="relative">
                    View case study

                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
                  </span>

                  <MoveUpRight
                    size={12}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}