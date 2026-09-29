import Link from "next/link";
import { ArrowUpRight, CircleDot, Sparkles } from "lucide-react";

function HeroArtwork() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[620px] lg:h-[570px]">
      {/* Technical background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main grid */}
        <div
          className="absolute inset-0 opacity-70"
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
            backgroundSize: "34px 34px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 88%, transparent)",
          }}
        />

        {/* Construction lines */}
        <div className="absolute left-[12%] top-0 h-full w-px bg-[var(--border)]" />
        <div className="absolute left-[27%] top-0 h-full w-px bg-[var(--border)]" />
        <div className="absolute left-[77%] top-0 h-full w-px bg-[var(--border)]" />
        <div className="absolute left-[89%] top-0 h-full w-px bg-[var(--border)]" />

        <div className="absolute left-0 top-[14%] h-px w-full bg-[var(--border)]" />
        <div className="absolute left-0 top-[30%] h-px w-full bg-[var(--border)]" />
        <div className="absolute left-0 top-[76%] h-px w-full bg-[var(--border)]" />
        <div className="absolute left-0 top-[88%] h-px w-full bg-[var(--border)]" />

        {/* Orbital lines and technical marks */}
        <svg
          viewBox="0 0 640 570"
          className="absolute inset-0 h-full w-full overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          {/* Large upper orbit */}
          <path
            d="M236 120C322 34 488 44 543 145C592 235 539 319 451 344"
            stroke="var(--foreground)"
            strokeOpacity="0.14"
            strokeWidth="1"
            strokeDasharray="2 7"
          />

          {/* Lower orbit */}
          <path
            d="M92 362C121 311 203 296 265 329C339 369 355 457 294 516"
            stroke="var(--foreground)"
            strokeOpacity="0.14"
            strokeWidth="1"
            strokeDasharray="2 7"
          />

          {/* Blue connection */}
          <path
            d="M170 236C231 222 265 235 290 282"
            stroke="var(--accent)"
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeDasharray="2 6"
          />

          {/* Center crosshair */}
          <path
            d="M308 246V258M302 252H314"
            stroke="var(--foreground)"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          {/* Upper-right crosshair */}
          <path
            d="M568 72V84M562 78H574"
            stroke="var(--foreground)"
            strokeOpacity="0.18"
            strokeWidth="1"
          />

          {/* Lower-right crosshair */}
          <path
            d="M575 427V439M569 433H581"
            stroke="var(--foreground)"
            strokeOpacity="0.18"
            strokeWidth="1"
          />

          {/* Construction dots */}
          <circle
            cx="118"
            cy="353"
            r="2.5"
            fill="var(--accent)"
          />

          <circle
            cx="118"
            cy="353"
            r="8"
            stroke="var(--accent)"
            strokeOpacity="0.15"
          />

          <circle
            cx="492"
            cy="146"
            r="2.5"
            fill="var(--foreground)"
            fillOpacity="0.4"
          />

          <circle
            cx="294"
            cy="516"
            r="2"
            fill="var(--foreground)"
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {/* Blue anchor node */}
      <div className="absolute left-[10%] top-[52%] z-20 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] shadow-[0_0_0_10px_color-mix(in_srgb,var(--accent)_10%,transparent)]">
        <div className="h-1.5 w-1.5 rounded-full bg-[var(--background)]" />
      </div>

      {/* Browser window */}
      <div className="absolute left-[14%] top-[8%] z-10 w-[69%] overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_70px_color-mix(in_srgb,var(--foreground)_12%,transparent)]">
        {/* Browser top bar */}
        <div className="flex h-10 items-center gap-2 bg-[var(--foreground)] px-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--background)] opacity-30" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--background)] opacity-30" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--background)] opacity-30" />

          <div className="ml-auto flex gap-5">
            <span className="h-1.5 w-7 rounded-full bg-[var(--background)] opacity-15" />
            <span className="h-1.5 w-9 rounded-full bg-[var(--background)] opacity-15" />
            <span className="h-1.5 w-5 rounded-full bg-[var(--background)] opacity-15" />
          </div>
        </div>

        {/* Website preview */}
        <div className="relative grid min-h-[295px] grid-cols-[0.8fr_1.2fr] bg-[var(--surface-soft)]">
          {/* Preview copy */}
          <div className="flex flex-col justify-center px-7 py-8 sm:px-9">
            <span className="mb-4 text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-soft)]">
              Digital experience
            </span>

            <h3 className="max-w-[175px] font-serif text-[26px] leading-[0.98] tracking-[-0.04em] text-[var(--foreground)] sm:text-[31px]">
              Elevating spaces.
              <br />
              Inspiring
              <br />
              communities.
            </h3>

            <p className="mt-5 max-w-[170px] text-[9px] leading-4 text-[var(--muted)]">
              Digital experiences that help businesses attract, engage and
              connect with the right customers.
            </p>

            <div className="mt-6 flex items-center gap-2 text-[9px] font-medium text-[var(--foreground)]">
              View project
              <ArrowUpRight size={11} strokeWidth={1.8} />
            </div>
          </div>

          {/* Architectural visual */}
          <div className="relative min-h-[295px] overflow-hidden bg-[var(--surface-soft)]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--surface) 0%, var(--surface-soft) 48%, var(--foreground) 140%)",
                opacity: 0.62,
              }}
            />

            {/* Building shapes */}
            <div className="absolute bottom-0 left-[9%] h-[80%] w-[57%] bg-[var(--surface)] shadow-[8px_0_18px_color-mix(in_srgb,var(--foreground)_8%,transparent)]" />

            <div
              className="absolute bottom-0 left-[32%] h-[66%] w-[42%] -skew-x-[14deg]"
              style={{
                background:
                  "color-mix(in srgb, var(--foreground) 18%, var(--surface))",
              }}
            />

            <div
              className="absolute bottom-0 right-[-6%] h-[74%] w-[35%] skew-x-[12deg]"
              style={{
                background:
                  "color-mix(in srgb, var(--foreground) 9%, var(--surface))",
              }}
            />

            {/* Architectural horizontal lines */}
            <div className="absolute bottom-[21%] left-[12%] h-px w-[54%] bg-[var(--border-strong)]" />
            <div className="absolute bottom-[35%] left-[8%] h-px w-[50%] bg-[var(--border-strong)]" />
            <div className="absolute bottom-[49%] left-[13%] h-px w-[47%] bg-[var(--border-strong)]" />

            {/* Glass blocks */}
            <div className="absolute bottom-[24%] left-[17%] grid w-[32%] grid-cols-4 gap-1.5 opacity-50">
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className="h-5 bg-[var(--background)]"
                />
              ))}
            </div>
          </div>

          {/* Growth signal */}
          <div className="absolute bottom-5 left-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <CircleDot
                size={12}
                className="text-[var(--accent)]"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-soft)]">
                Growth signal
              </span>
            </div>

            <div className="mt-1 text-[13px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
              +32%
            </div>
          </div>
        </div>
      </div>

      {/* Floating phone */}
      <div className="absolute right-[8%] top-[41%] z-30 w-[25%] min-w-[122px] max-w-[155px]">
        <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-soft)] p-2 shadow-[0_28px_55px_color-mix(in_srgb,var(--foreground)_18%,transparent)]">
          <div className="overflow-hidden rounded-[19px] border border-[var(--border)] bg-[var(--surface)]">
            {/* Phone header */}
            <div className="flex h-7 items-center justify-between bg-[var(--foreground)] px-2.5">
              <span className="h-1 w-1 rounded-full bg-[var(--background)] opacity-30" />
              <span className="h-1 w-5 rounded-full bg-[var(--background)] opacity-15" />
              <span className="h-1 w-1 rounded-full bg-[var(--background)] opacity-30" />
            </div>

            <div className="p-3">
              <div className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-soft)]">
                Insight
              </div>

              <h4 className="mt-3 font-serif text-[17px] leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]">
                Results that
                <br />
                drive growth.
              </h4>

              <div className="mt-4 text-[8px] font-medium text-[var(--accent)]">
                +37% Organic traffic
              </div>

              {/* Chart */}
              <svg
                viewBox="0 0 140 62"
                className="mt-3 h-[58px] w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="heroChartFill"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--accent)"
                      stopOpacity="0.2"
                    />

                    <stop
                      offset="100%"
                      stopColor="var(--accent)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M4 53C19 49 18 41 31 44C43 47 48 30 61 35C77 41 82 22 96 26C109 30 118 17 136 7V62H4Z"
                  fill="url(#heroChartFill)"
                />

                <path
                  d="M4 53C19 49 18 41 31 44C43 47 48 30 61 35C77 41 82 22 96 26C109 30 118 17 136 7"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <circle
                  cx="136"
                  cy="7"
                  r="3"
                  fill="var(--accent)"
                />
              </svg>

              {/* Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-[var(--surface-soft)] p-2">
                  <div className="text-[6px] uppercase tracking-[0.12em] text-[var(--muted-soft)]">
                    Speed
                  </div>

                  <div className="mt-1 text-[10px] font-semibold text-[var(--foreground)]">
                    92
                  </div>
                </div>

                <div className="rounded-lg bg-[var(--surface-soft)] p-2">
                  <div className="text-[6px] uppercase tracking-[0.12em] text-[var(--muted-soft)]">
                    Leads
                  </div>

                  <div className="mt-1 text-[10px] font-semibold text-[var(--foreground)]">
                    +18%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating performance card */}
      <div className="absolute bottom-[8%] right-[28%] z-30 rounded-xl border border-[var(--border)] bg-[var(--dark-panel)] px-4 py-3 text-[var(--dark-panel-text)] shadow-[0_20px_40px_color-mix(in_srgb,var(--foreground)_15%,transparent)]">
        <div className="flex items-center gap-2">
          <Sparkles
            size={12}
            className="text-[var(--accent)]"
          />

          <span className="text-[7px] uppercase tracking-[0.16em] opacity-50">
            Performance
          </span>
        </div>

        <div className="mt-2 text-[18px] font-semibold tracking-[-0.04em]">
          92
        </div>

        <div className="mt-1 text-[7px] opacity-45">
          Excellent experience
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1400px] items-center gap-6 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:px-12 lg:py-14">
        {/* Left side */}
        <div className="relative z-10 max-w-[680px]">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Design. Technology. Growth.
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-[740px] font-serif text-[58px] leading-[0.95] tracking-[-0.055em] text-[var(--foreground)] sm:text-[68px] lg:text-[73px] xl:text-[81px]">
            Digital experiences
            <br />
            built to move your
            <br />
            business{" "}
            <span className="italic text-[var(--accent)]">
              forward.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[520px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px]">
            We combine branding, design, technology and AI to help growing
            businesses build, improve and evolve the way they show up, connect
            and grow online.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[var(--foreground)] px-5 py-4 text-[13px] font-medium text-[var(--background)] transition-transform duration-300 hover:-translate-y-1"
            >
              Start a project

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />
            </Link>

            <Link
              href="#work"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-[var(--foreground)]"
            >
              <span className="border-b border-[var(--accent)] pb-1">
                See our work
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Capability strip */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--border)] pt-7">
            {["Brand", "Web", "Product", "Growth", "AI"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-[var(--muted-soft)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-soft)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative min-h-[500px] lg:min-h-[570px] lg:-translate-y-20">
          <HeroArtwork />
        </div>
      </div>
    </section>
  );
}