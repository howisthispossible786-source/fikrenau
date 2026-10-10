
import React from 'react';
import {
  Compass,
  Sparkles,
  Share2,
  Lightbulb,
  Zap,
  Award,
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import { WHAT_WE_DO_CARDS } from '../utils/mockData';

const iconMap = {
  Compass,
  Sparkles,
  Share2,
  Lightbulb,
  Zap,
  Award,
};

export const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-transparent py-20 sm:py-28 lg:py-32"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Large ambient glow */}
        <div className="absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />

        {/* Side glow */}
        <div className="absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-[#D4AF37]/[0.025] blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#D4AF37]/[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-12 sm:mb-16 lg:mb-18">
          <SectionHeading
            badge="Platform Pillars"
            title="What We Do For Emerging Talent"
            subtitle="Six foundational pillars through which Fikr-e-Nau transforms creative potential into recognized impact."
            align="center"
          />
        </div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_DO_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.iconName] || Sparkles;

            return (
              <article
                key={card.id}
                className="flex h-full"
              >
                <a
                  href="#submit"
                  aria-label={`Learn more about ${card.title}`}
                  className="
                    group relative flex h-full w-full min-h-[390px] flex-col
                    overflow-hidden rounded-2xl
                    border border-white/[0.07]
                    bg-[#111116]/80
                    p-6
                    sm:min-h-[400px] sm:p-7
                    lg:min-h-[410px] lg:p-8
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-[#D4AF37]/35
                    hover:bg-[#141419]
                    hover:shadow-[0_25px_70px_-25px_rgba(212,175,55,0.18)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#D4AF37]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#0A0A0D]
                  "
                >
                  {/* =================================================
                      CARD BACKGROUND NUMBER
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none absolute
                      -right-2 -top-7
                      select-none
                      font-serif
                      text-[120px]
                      font-bold
                      leading-none
                      text-white/[0.025]
                      transition-all duration-500
                      sm:text-[135px]
                      lg:text-[150px]
                      group-hover:text-[#D4AF37]/[0.07]
                      group-hover:scale-110
                    "
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {card.number}
                  </span>

                  {/* =================================================
                      GOLD TOP LINE
                  ================================================= */}

                  <div
                    className="
                      absolute left-6 right-6 top-0 h-[2px]
                      origin-left scale-x-0
                      bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-transparent
                      transition-transform duration-500
                      sm:left-7 sm:right-7
                      lg:left-8 lg:right-8
                      group-hover:scale-x-100
                    "
                  />

                  {/* =================================================
                      TOP ROW
                  ================================================= */}

                  <div className="relative z-10 flex shrink-0 items-center justify-between">
                    {/* Number */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="text-[11px] font-semibold tracking-[0.22em] text-[#D4AF37]/70 sm:text-xs sm:tracking-[0.25em]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="h-px w-6 bg-[#D4AF37]/20 transition-all duration-500 sm:w-7 group-hover:w-10 group-hover:bg-[#D4AF37]/50 sm:group-hover:w-12" />
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        relative flex h-11 w-11 shrink-0 items-center justify-center
                        rounded-xl
                        border border-[#D4AF37]/15
                        bg-[#09090B]
                        text-[#D4AF37]
                        transition-all duration-500
                        sm:h-12 sm:w-12 sm:rounded-2xl
                        group-hover:border-[#D4AF37]/50
                        group-hover:bg-[#D4AF37]
                        group-hover:text-[#09090B]
                        group-hover:rotate-3
                      "
                    >
                      <IconComponent
                        className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                        strokeWidth={1.7}
                      />

                      {/* Icon glow */}
                      <div className="absolute inset-0 -z-10 rounded-xl bg-[#D4AF37]/20 opacity-0 blur-xl transition-opacity duration-500 sm:rounded-2xl group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className="
                      relative z-10
                      mt-9
                      flex flex-1 flex-col
                      sm:mt-10
                    "
                  >
                    {/* Tagline */}
                    <p
                      className="
                        max-w-[320px]
                        text-[11px]
                        font-semibold
                        leading-5
                        tracking-[0.15em]
                        text-[#C5A059]
                        sm:text-xs
                        sm:tracking-[0.17em]
                        md:text-sm
                      "
                    >
                      {card.tagline}
                    </p>

                    {/* Title */}
                    <h3
                      className="
                        mt-2.5
                        max-w-[300px]
                        text-[22px]
                        font-semibold
                        leading-[1.18]
                        tracking-[-0.025em]
                        text-white
                        transition-colors duration-300
                        sm:mt-3
                        sm:text-2xl
                        lg:text-3xl
                        group-hover:text-[#F3E5AB]
                      "
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-3
                        max-w-[320px]
                        text-[13px]
                        leading-6
                        text-[#B5B5C0]
                        transition-colors duration-300
                        sm:mt-3.5
                        sm:text-sm
                        sm:leading-6.5
                        lg:mt-4
                        group-hover:text-white
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================= */}

                  <div
                    className="
                      relative z-10
                      mt-5
                      pt-4
                      sm:mt-6
                      sm:pt-5
                    "
                  >
                    {/* Divider */}
                    <div className="mb-3.5 h-px w-full bg-white/[0.06] sm:mb-4" />

                    <div className="flex min-h-[28px] items-center justify-between gap-3">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {card.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="
                              rounded-full
                              border border-white/[0.06]
                              bg-white/[0.025]
                              px-2 py-1
                              text-[10px]
                              font-medium
                              leading-4
                              tracking-wide
                              text-[#85858E]
                              transition-all duration-300
                              sm:px-2.5
                              sm:text-xs
                              group-hover:border-[#D4AF37]/15
                              group-hover:text-[#A9A9B0]
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      HOVER RADIAL GLOW
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none absolute
                      -bottom-24 -right-24
                      h-52 w-52
                      rounded-full
                      bg-[#D4AF37]/[0.06]
                      blur-[60px]
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Bottom corner accent */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-[2px] w-0
                      bg-[#D4AF37]
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-12 flex justify-center sm:mt-16 lg:mt-20">
          <div className="flex items-center gap-3 text-center sm:gap-4">
            <span className="h-px w-7 bg-[#D4AF37]/20 sm:w-10 lg:w-16" />

            <span className="text-[10px] tracking-[0.16em] text-[#777780] sm:text-xs sm:tracking-[0.2em]">
              Ideas → Action → Impact
            </span>

            <span className="h-px w-7 bg-[#D4AF37]/20 sm:w-10 lg:w-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

