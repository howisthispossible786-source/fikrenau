
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPACT_STATS } from '../utils/mockData';

gsap.registerPlugin(ScrollTrigger);

export const ImpactStatsSection = ({ stats = IMPACT_STATS }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const numberRefs = useRef([]);
  const counterTweensRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      const numbers = numberRefs.current.filter(Boolean);

      const isMobile = window.matchMedia('(max-width: 640px)').matches;

      /* =====================================================
         CONFIG
      ===================================================== */

      const cardDuration = isMobile ? 0.65 : 0.8;
      const numberDuration = isMobile ? 1.8 : 2.2;

      /* =====================================================
         INITIAL STATE
      ===================================================== */

      gsap.set(cards, {
        opacity: 0,
        y: isMobile ? 30 : 50,
        scale: isMobile ? 0.98 : 0.96,
        force3D: true,
      });

      gsap.set(numbers, {
        opacity: 0,
        y: isMobile ? 12 : 20,
        force3D: true,
      });

      /* =====================================================
         RESET COUNTERS
         
         This function is called EVERY time the section
         enters the viewport.
      ===================================================== */

      const resetCounters = () => {
        // Kill any previous counter animations.
        counterTweensRef.current.forEach((tween) => {
          if (tween) tween.kill();
        });

        counterTweensRef.current = [];

        // Reset every displayed number back to 0.
        stats.forEach((stat, index) => {
          const element = numberRefs.current[index];

          if (!element) return;

          const rawValue = stat.value;

          const target = parseFloat(
            String(rawValue)
              .replace(/,/g, '')
              .replace(/[^\d.-]/g, '')
          );

          if (Number.isNaN(target)) {
            element.textContent = rawValue;
            return;
          }

          element.textContent = '0';
        });
      };

      /* =====================================================
         CREATE COUNTER ANIMATIONS
      ===================================================== */

      const animateCounters = () => {
        stats.forEach((stat, index) => {
          const element = numberRefs.current[index];

          if (!element) return;

          const rawValue = stat.value;

          /*
            Supports values such as:

            100
            500
            95
            10.5
            1,500
          */

          const target = parseFloat(
            String(rawValue)
              .replace(/,/g, '')
              .replace(/[^\d.-]/g, '')
          );

          if (Number.isNaN(target)) {
            element.textContent = rawValue;
            return;
          }

          const decimals = String(target).includes('.')
            ? String(target).split('.')[1].length
            : 0;

          const counter = {
            value: 0,
          };

          const tween = gsap.to(counter, {
            value: target,

            duration: numberDuration,

            delay: isMobile
              ? 0.15 + index * 0.08
              : 0.25 + index * 0.12,

            ease: 'power2.out',

            overwrite: true,

            onUpdate: () => {
              const formatted = counter.value.toLocaleString('en-US', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              });

              element.textContent = formatted;
            },

            onComplete: () => {
              /*
                Force the exact final value.

                This prevents floating-point rounding
                from leaving something like 99.9999.
              */

              element.textContent = target.toLocaleString('en-US', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              });
            },
          });

          counterTweensRef.current.push(tween);
        });
      };

      /* =====================================================
         MAIN SECTION TIMELINE
         
         IMPORTANT:
         toggleActions:
         
         play     = animate when entering
         none     = do nothing while scrolling forward
         restart  = reset/replay when leaving backwards
         restart  = replay when entering again
      ===================================================== */

      const tl = gsap.timeline({
        paused: true,

        onStart: () => {
          /*
            Every time the timeline starts,
            counters are completely reset.
          */

          resetCounters();
        },

        onComplete: () => {
          /*
            Counter animation starts after the cards
            have begun appearing.
          */

          animateCounters();
        },
      });

      /* =====================================================
         CARDS REVEAL
      ===================================================== */

      tl.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: cardDuration,
        stagger: isMobile ? 0.08 : 0.12,
        ease: 'power3.out',
      });

      /* =====================================================
         NUMBERS REVEAL
      ===================================================== */

      tl.to(
        numbers,
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.35 : 0.4,
          stagger: isMobile ? 0.05 : 0.08,
          ease: 'power2.out',
        },
        '-=0.35'
      );

      /* =====================================================
         SCROLL TRIGGER
         
         The important change:
         
         The animation RESTARTS every time the user enters
         the section again.
      ===================================================== */

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,

        start: isMobile ? 'top 82%' : 'top 78%',

        end: isMobile ? 'bottom 18%' : 'bottom 22%',

        /*
          Every time the section enters the viewport:
          - reset
          - replay
          - restart counters
        */

        onEnter: () => {
          resetCounters();

          tl.restart();
        },

        /*
          When scrolling back upward into the section,
          replay again.
        */

        onEnterBack: () => {
          resetCounters();

          tl.restart();
        },

        /*
          When leaving the section, immediately prepare
          everything for the next visit.
        */

        onLeave: () => {
          tl.pause(0);

          resetCounters();

          gsap.set(cards, {
            opacity: 0,
            y: isMobile ? 30 : 50,
            scale: isMobile ? 0.98 : 0.96,
          });

          gsap.set(numbers, {
            opacity: 0,
            y: isMobile ? 12 : 20,
          });
        },

        onLeaveBack: () => {
          tl.pause(0);

          resetCounters();

          gsap.set(cards, {
            opacity: 0,
            y: isMobile ? 30 : 50,
            scale: isMobile ? 0.98 : 0.96,
          });

          gsap.set(numbers, {
            opacity: 0,
            y: isMobile ? 12 : 20,
          });
        },

        /*
          Only trigger when entering.
          The callbacks above handle the reset/replay.
        */

        once: false,
      });

      /* =====================================================
         CARD HOVER ANIMATION
         
         Desktop only.
         This avoids unnecessary hover calculations
         on touch devices.
      ===================================================== */

      if (!isMobile) {
        cards.forEach((card) => {
          const glow = card.querySelector('.stat-card-glow');
          const line = card.querySelector('.stat-card-line');

          const handleEnter = () => {
            gsap.to(card, {
              y: -8,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: true,
            });

            if (glow) {
              gsap.to(glow, {
                opacity: 1,
                scale: 1.15,
                duration: 0.45,
                ease: 'power2.out',
                overwrite: true,
              });
            }

            if (line) {
              gsap.to(line, {
                scaleX: 1,
                opacity: 1,
                duration: 0.35,
                ease: 'power2.out',
                overwrite: true,
              });
            }
          };

          const handleLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: true,
            });

            if (glow) {
              gsap.to(glow, {
                opacity: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: true,
              });
            }

            if (line) {
              gsap.to(line, {
                scaleX: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: true,
              });
            }
          };

          card.addEventListener('mouseenter', handleEnter);
          card.addEventListener('mouseleave', handleLeave);

          card._handleEnter = handleEnter;
          card._handleLeave = handleLeave;
        });
      }

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        /*
          Kill all counter animations.
        */

        counterTweensRef.current.forEach((tween) => {
          if (tween) tween.kill();
        });

        counterTweensRef.current = [];

        /*
          Kill ScrollTrigger.
        */

        trigger.kill();

        /*
          Remove hover listeners.
        */

        cards.forEach((card) => {
          if (card?._handleEnter) {
            card.removeEventListener(
              'mouseenter',
              card._handleEnter
            );
          }

          if (card?._handleLeave) {
            card.removeEventListener(
              'mouseleave',
              card._handleLeave
            );
          }
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <>
      {/* =====================================================
          FONT + CUSTOM STYLES
      ===================================================== */}

      <style>{`
        .impact-stats-section {
          font-family: 'Poppins', sans-serif;
        }

        .impact-stat-number {
          font-family: 'Poppins', sans-serif;
        }

        .impact-stat-card {
          transform-style: preserve-3d;
          will-change: transform, opacity;
        }

        .impact-stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;

          background: linear-gradient(
            135deg,
            rgba(212, 175, 55, 0.22),
            transparent 35%,
            transparent 65%,
            rgba(212, 175, 55, 0.08)
          );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite: xor;
          mask-composite: exclude;

          pointer-events: none;
        }

        .stat-card-glow {
          pointer-events: none;
          filter: blur(45px);
        }

        .stat-card-line {
          transform: scaleX(0);
          transform-origin: center;
        }

        @media (max-width: 640px) {
          .impact-stat-card {
            border-radius: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .impact-stat-card {
            transform: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          SECTION
      ===================================================== */}

      <section
        ref={sectionRef}
        className="
          impact-stats-section
          relative
          overflow-hidden
          py-20
          sm:py-24
          lg:py-28
          bg-transparent
          border-y
          border-[#D4AF37]/10
        "
      >
        {/* =================================================
            BACKGROUND ATMOSPHERE
        ================================================= */}

        <div className="absolute inset-0 pointer-events-none">

          {/* Main radial glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[600px]
              h-[300px]
              rounded-full
              bg-[#D4AF37]/[0.035]
              blur-[100px]
            "
          />

          {/* Decorative grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.4) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.4) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Top glow */}

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[300px]
              sm:w-[500px]
              h-px
              bg-[#D4AF37]/30
              blur-[1px]
            "
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

            {/* Small eyebrow */}

            <div className="inline-flex items-center gap-3 mb-5">

              <span className="w-8 sm:w-10 h-px bg-[#D4AF37]/50" />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  tracking-[0.28em]
                  uppercase
                  text-[#D4AF37]
                "
              >
                Our Impact
              </span>

              <span className="w-8 sm:w-10 h-px bg-[#D4AF37]/50" />

            </div>

            {/* Heading */}

            <h2
              className="
                impact-stat-number
                text-4xl
                sm:text-5xl
                lg:text-6xl
                text-white
                leading-[1.05]
                tracking-tight
                drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]
              "
            >
              Ideas creating

              <span className="block text-[#D4AF37]">
                real impact.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                text-sm
                sm:text-base
                text-[#C2C2CB]
                leading-relaxed
                max-w-xl
                mx-auto
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]
              "
            >
              A growing community of thinkers, creators and young voices
              turning ideas into meaningful change.
            </p>
          </div>

          {/* =================================================
              STATS GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-3
              sm:gap-5
              lg:gap-6
            "
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.id || idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="
                  impact-stat-card
                  group
                  relative
                  overflow-hidden
                  flex
                  flex-col
                  items-center
                  text-center
                  min-h-[190px]
                  sm:min-h-[220px]
                  lg:min-h-[240px]
                  justify-center
                  px-4
                  py-7
                  sm:px-6
                  sm:py-8
                  rounded-2xl
                  sm:rounded-3xl
                  bg-[#131318]/80
                  border
                  border-white/[0.08]
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(0,0,0,0.5)]
                  transition-colors
                  duration-300
                  hover:border-[#D4AF37]/35
                "
              >

                {/* =================================================
                    AMBIENT CARD GLOW
                ================================================= */}

                <div
                  className="
                    stat-card-glow
                    absolute
                    -bottom-20
                    left-1/2
                    -translate-x-1/2
                    w-32
                    h-24
                    rounded-full
                    bg-[#D4AF37]/10
                    opacity-0
                  "
                />

                {/* =================================================
                    TOP GOLD LINE
                ================================================= */}

                <div
                  className="
                    stat-card-line
                    absolute
                    top-0
                    left-8
                    right-8
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#D4AF37]
                    to-transparent
                    opacity-0
                  "
                />

                {/* =================================================
                    SMALL DECORATIVE DOT
                ================================================= */}

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[#D4AF37]/30
                    group-hover:bg-[#D4AF37]
                    transition-colors
                    duration-300
                  "
                />

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-baseline
                    justify-center
                    text-white
                    leading-none
                  "
                >
                  <span
                    ref={(el) => {
                      numberRefs.current[idx] = el;
                    }}
                    className="
                      impact-stat-number
                      text-4xl
                      sm:text-5xl
                      lg:text-6xl
                      tracking-tight
                      group-hover:text-[#F3E5AB]
                      transition-colors
                      duration-300
                    "
                  >
                    0
                  </span>

                  {stat.suffix && (
                    <span
                      className="
                        ml-1
                        text-lg
                        sm:text-xl
                        lg:text-2xl
                        font-semibold
                        text-[#D4AF37]
                      "
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* =================================================
                    LABEL
                ================================================= */}

                <h3
                  className="
                    relative
                    z-10
                    mt-4
                    text-xs
                    sm:text-sm
                    lg:text-base
                    font-semibold
                    text-[#D4AF37]
                    tracking-[0.08em]
                    uppercase
                  "
                >
                  {stat.label}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    relative
                    z-10
                    mt-2
                    text-[11px]
                    sm:text-xs
                    text-[#8E8E93]
                    leading-relaxed
                    max-w-[190px]
                  "
                >
                  {stat.description}
                </p>

                {/* =================================================
                    BOTTOM CORNER ACCENT
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-12
                    h-12
                    border-t
                    border-l
                    border-[#D4AF37]/0
                    group-hover:border-[#D4AF37]/15
                    rounded-tl-3xl
                    transition-colors
                    duration-300
                  "
                />
              </div>
            ))}
          </div>

          {/* =================================================
              BOTTOM MICRO TEXT
          ================================================= */}

          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3">

            <div className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />

            <span
              className="
                text-[9px]
                sm:text-[10px]
                text-[#6E6E73]
                uppercase
                tracking-[0.2em]
              "
            >
              Growing every day
            </span>

            <div className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />

          </div>

        </div>
      </section>
    </>
  );
};

export default ImpactStatsSection;

