import React, { useLayoutEffect, useRef } from "react";
import {
  Sparkles,
  Eye,
  Target,
  Compass,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TestimonialCarousel from "../components/TestimonialCarousel";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const manifestoRef = useRef(null);
  const tenetsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(imageRef.current, {
        opacity: 0,
        x: isMobile ? 0 : -40,
        y: isMobile ? 25 : 0,
        scale: isMobile ? 0.98 : 0.96,
        force3D: true,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        x: isMobile ? 0 : 40,
        y: isMobile ? 20 : 0,
        force3D: true,
      });

      gsap.set(manifestoRef.current, {
        opacity: 0,
        y: 15,
        force3D: true,
      });

      gsap.set(tenetsRef.current.filter(Boolean), {
        opacity: 0,
        y: 15,
        force3D: true,
      });

      /* =====================================================
         MAIN REVEAL
      ===================================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 88%" : "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(imageRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.55 : 0.75,
        ease: "power3.out",
      });

      tl.to(
        contentRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: isMobile ? 0.55 : 0.7,
          ease: "power3.out",
        },
        isMobile ? "-=0.2" : "-=0.45",
      );

      tl.to(
        manifestoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.2",
      );

      tl.to(
        tenetsRef.current.filter(Boolean),
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: isMobile ? 0.04 : 0.08,
          ease: "power2.out",
        },
        "-=0.15",
      );

      /* =====================================================
         LOGO BREATHING
      ===================================================== */

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduceMotion && !isMobile) {
        gsap.to(".about-logo-image", {
          scale: 1.015,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* =====================================================
         DESKTOP CARD HOVER ONLY
      ===================================================== */

      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;

      const cards = sectionRef.current?.querySelectorAll(".about-tenet");

      if (canHover && cards) {
        cards.forEach((card) => {
          const icon = card.querySelector(".about-tenet-icon");
          const arrow = card.querySelector(".about-tenet-arrow");

          const enter = () => {
            gsap.to(card, {
              y: -4,
              duration: 0.25,
              ease: "power2.out",
              overwrite: true,
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1.06,
                rotate: 3,
                duration: 0.25,
                ease: "power2.out",
                overwrite: true,
              });
            }

            if (arrow) {
              gsap.to(arrow, {
                x: 3,
                y: -3,
                opacity: 1,
                duration: 0.25,
                ease: "power2.out",
                overwrite: true,
              });
            }
          };

          const leave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.25,
              ease: "power2.out",
              overwrite: true,
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.25,
                ease: "power2.out",
                overwrite: true,
              });
            }

            if (arrow) {
              gsap.to(arrow, {
                x: 0,
                y: 0,
                opacity: 0.35,
                duration: 0.25,
                ease: "power2.out",
                overwrite: true,
              });
            }
          };

          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);

          card._aboutEnter = enter;
          card._aboutLeave = leave;
        });
      }

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        cards?.forEach((card) => {
          if (card._aboutEnter) {
            card.removeEventListener("mouseenter", card._aboutEnter);
          }

          if (card._aboutLeave) {
            card.removeEventListener("mouseleave", card._aboutLeave);
          }
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          font-family: 'Poppins', sans-serif;
          overflow-x: clip;
        }

        .about-heading {
          font-family: 'Poppins', sans-serif;
        }

        .about-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
          transform-origin: center;
        }

        .about-image-frame {
          transform-style: preserve-3d;
          max-width: 100%;
        }

        .about-tenet {
          min-width: 0;
          will-change: transform;
        }

        .about-section h1,
        .about-section h2,
        .about-section h3,
        .about-section h4,
        .about-section p {
          overflow-wrap: break-word;
        }

        @media (max-width: 640px) {
          .about-section {
            overflow-x: hidden;
          }
        }

        @media (max-width: 380px) {
          .about-philosophy {
            left: 10px !important;
            right: 10px !important;
            bottom: 10px !important;
            width: auto !important;
            max-width: calc(100% - 20px) !important;
          }

          .about-philosophy-icon {
            width: 30px !important;
            height: 30px !important;
          }

          .about-philosophy-text {
            min-width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-logo-image {
            transform: none !important;
          }
        }
      `}</style>

      {/* =========================================================
          ABOUT SECTION
      ========================================================= */}

      <section
        ref={sectionRef}
        id="about"
        className="
          about-section
          relative
          overflow-x-clip
          py-14
          sm:py-16
          md:py-20
          lg:py-24
          xl:py-28
          bg-[#09090B]
        "
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left glow */}
          <div
            className="
              absolute
              left-[-220px]
              sm:left-[-180px]
              top-1/2
              -translate-y-1/2
              w-[360px]
              sm:w-[500px]
              h-[360px]
              sm:h-[500px]
              rounded-full
              bg-[#D4AF37]/[0.05]
              blur-[100px]
              sm:blur-[130px]
            "
          />

          {/* Right glow */}
          <div
            className="
              absolute
              right-[-220px]
              sm:right-[-180px]
              top-[20%]
              w-[320px]
              sm:w-[450px]
              h-[320px]
              sm:h-[450px]
              rounded-full
              bg-[#D4AF37]/[0.03]
              blur-[100px]
              sm:blur-[130px]
            "
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Desktop center line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#D4AF37]/10
              to-transparent
              hidden
              xl:block
            "
          />
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* ===================================================
              TOP LABEL
          =================================================== */}

          <div
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-3
              mb-10
              sm:mb-12
              lg:mb-16
            "
          >
            <span className="w-7 sm:w-10 h-px bg-[#D4AF37]/60" />

            <span
              className="
                text-[9px]
                sm:text-[10px]
                md:text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                sm:tracking-[0.3em]
                text-[#D4AF37]
                whitespace-nowrap
              "
            >
              About Fikr-e-Nau
            </span>

            <span
              className="
                w-7
                sm:w-10
                h-px
                bg-[#D4AF37]/60
                lg:hidden
              "
            />
          </div>

          {/* ===================================================
              MAIN CONTENT
          =================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-12
              gap-10
              sm:gap-12
              md:gap-10
              lg:gap-14
              xl:gap-20
              items-start
            "
          >
            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              ref={imageRef}
              className="
                min-w-0
                w-full
                md:col-span-1
                lg:col-span-5
                order-2
                md:order-1
                md:flex
                hidden
                justify-center
                md:justify-start
              "
            >
              <div
                className="
                  relative
                  w-full
                  max-w-[380px]
                  sm:max-w-[430px]
                  lg:max-w-[500px]
                  mx-auto
                  md:mx-0
                  px-1
                  sm:px-2
                  lg:px-0
                "
              >
                {/* Top-left decoration */}
                <div
                  className="
                    absolute
                    -top-2
                    -left-1
                    sm:-top-3
                    sm:-left-3
                    lg:-top-4
                    lg:-left-4
                    w-12
                    h-12
                    sm:w-20
                    sm:h-20
                    lg:w-24
                    lg:h-24
                    border-t
                    border-l
                    border-[#D4AF37]/45
                    rounded-tl-[1.25rem]
                    sm:rounded-tl-[1.75rem]
                    lg:rounded-tl-[2rem]
                    z-20
                    pointer-events-none
                  "
                />

                {/* Bottom-right decoration */}
                <div
                  className="
                    absolute
                    -bottom-2
                    -right-1
                    sm:-bottom-3
                    sm:-right-3
                    lg:-bottom-4
                    lg:-right-4
                    w-12
                    h-12
                    sm:w-20
                    sm:h-20
                    lg:w-24
                    lg:h-24
                    border-b
                    border-r
                    border-[#D4AF37]/45
                    rounded-br-[1.25rem]
                    sm:rounded-br-[1.75rem]
                    lg:rounded-br-[2rem]
                    z-20
                    pointer-events-none
                  "
                />

                {/* Image frame */}
                <div
                  className="
                    about-image-frame
                    relative
                    w-full
                    overflow-hidden
                    rounded-[1.35rem]
                    sm:rounded-[1.75rem]
                    lg:rounded-[2rem]
                    bg-[#0D0D11]
                    border
                    border-[#D4AF37]/25
                    shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                    sm:shadow-[0_30px_80px_rgba(0,0,0,0.65)]
                    p-2
                    sm:p-3
                    lg:p-4
                  "
                >
                  {/* Image */}
                  <div
                    className="
                      relative
                      w-full
                      aspect-square
                      overflow-hidden
                      rounded-[1rem]
                      sm:rounded-[1.35rem]
                      lg:rounded-[1.5rem]
                      border
                      border-white/[0.06]
                      bg-black
                    "
                  >
                    <img
                      src="/logo.jpeg"
                      alt="Fikr-e-Nau"
                      className="
                        about-logo-image
                        relative
                        z-10
                        w-full
                        h-full
                        object-cover
                      "
                    />

                    {/* Image overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        z-20
                        pointer-events-none
                        bg-gradient-to-br
                        from-white/[0.04]
                        via-transparent
                        to-[#D4AF37]/[0.05]
                      "
                    />

                    {/* Bottom gradient */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-24
                        sm:h-32
                        z-20
                        bg-gradient-to-t
                        from-black/55
                        to-transparent
                        pointer-events-none
                      "
                    />
                  </div>

                  {/* Philosophy badge */}
                  <div
                    className="
                      about-philosophy
                      absolute
                      z-30
                      bottom-4
                      left-4
                      sm:bottom-6
                      sm:left-6
                      lg:bottom-7
                      lg:left-7
                      flex
                      items-center
                      gap-2
                      sm:gap-3
                      max-w-[calc(100%-2rem)]
                      sm:max-w-[calc(100%-3rem)]
                      px-3
                      py-2.5
                      sm:px-4
                      sm:py-3
                      rounded-xl
                      sm:rounded-2xl
                      bg-[#09090B]/90
                      border
                      border-[#D4AF37]/20
                      backdrop-blur-xl
                      shadow-2xl
                    "
                  >
                    <div
                      className="
                        about-philosophy-icon
                        shrink-0
                        flex
                        items-center
                        justify-center
                        w-8
                        h-8
                        sm:w-9
                        sm:h-9
                        rounded-lg
                        sm:rounded-xl
                        bg-[#D4AF37]/10
                        border
                        border-[#D4AF37]/15
                      "
                    >
                      <Sparkles
                        className="
                          w-3.5
                          h-3.5
                          sm:w-4
                          sm:h-4
                          text-[#D4AF37]
                        "
                      />
                    </div>

                    <div className="about-philosophy-text min-w-0">
                      <p
                        className="
                          text-[8px]
                          sm:text-[10px]
                          uppercase
                          tracking-[0.12em]
                          sm:tracking-[0.18em]
                          text-[#D4AF37]
                          font-bold
                          truncate
                        "
                      >
                        Our Philosophy
                      </p>

                      <p
                        className="
                          text-[10px]
                          sm:text-xs
                          text-white
                          font-semibold
                          mt-0.5
                          leading-tight
                          truncate
                        "
                      >
                        Ideas deserve a voice.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div
                  className="
                    absolute
                    -right-1
                    sm:-right-2
                    lg:-right-3
                    top-1/4
                    w-1.5
                    h-1.5
                    sm:w-2
                    sm:h-2
                    rounded-full
                    bg-[#D4AF37]
                    shadow-[0_0_15px_rgba(212,175,55,0.6)]
                  "
                />

                <div
                  className="
                    absolute
                    -left-1
                    sm:-left-1
                    lg:-left-2
                    top-1/3
                    w-1
                    h-1
                    sm:w-1.5
                    sm:h-1.5
                    rounded-full
                    bg-[#D4AF37]/60
                  "
                />
              </div>
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              ref={contentRef}
              className="
                min-w-0
                w-full
                md:col-span-1
                lg:col-span-7
                order-1
                md:order-2
              "
            >
              {/* Label */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-4
                  sm:mb-5
                "
              >
                <div
                  className="
                    shrink-0
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    sm:w-9
                    sm:h-9
                    rounded-lg
                    sm:rounded-xl
                    bg-[#D4AF37]/10
                    border
                    border-[#D4AF37]/15
                  "
                >
                  <Sparkles
                    className="
                      w-3.5
                      h-3.5
                      sm:w-4
                      sm:h-4
                      text-[#D4AF37]
                    "
                  />
                </div>

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    sm:tracking-[0.2em]
                    text-[#D4AF37]
                  "
                >
                  Manifesto & Mission
                </span>
              </div>

              {/* Main heading */}
              <h2
                className="
                  about-heading
                  text-[2rem]
                  xs:text-[2.2rem]
                  sm:text-5xl
                  md:text-[3rem]
                  lg:text-[3.6rem]
                  xl:text-[4.2rem]
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-white
                  max-w-4xl
                  break-words
                "
              >
                Every Young Person Carries a{" "}
                <span className="text-[#D4AF37]">Hidden Spark.</span>
              </h2>

              {/* Secondary heading */}
              <p
                className="
                  mt-5
                  sm:mt-6
                  text-base
                  sm:text-xl
                  lg:text-2xl
                  font-medium
                  text-[#D7D7DC]
                  leading-relaxed
                  max-w-2xl
                "
              >
                We give it an audience.
              </p>

              {/* Divider */}
              <div
                className="
                  w-16
                  sm:w-20
                  h-px
                  bg-gradient-to-r
                  from-[#D4AF37]
                  to-transparent
                  my-6
                  sm:my-7
                "
              />

              {/* Intro */}
              <p
                ref={manifestoRef}
                className="
                  text-sm
                  sm:text-base
                  text-[#A7A7B0]
                  leading-[1.85]
                  sm:leading-[1.9]
                  max-w-2xl
                "
              >
                Fikr-e-Nau was born out of an undeniable truth:{" "}
                <span className="text-white font-semibold">
                  raw genius and creative innovation are everywhere, but
                  visibility is not.
                </span>
              </p>

              {/* Body */}
              <div
                className="
                  mt-5
                  sm:mt-6
                  space-y-4
                  sm:space-y-5
                  text-sm
                  sm:text-[15px]
                  text-[#92929B]
                  leading-[1.85]
                  sm:leading-[1.9]
                  max-w-2xl
                "
              >
                <p>
                  In quiet bedrooms, community workshops, college corridors, and
                  digital corners, talented individuals are sculpting, coding,
                  writing, and designing the future. Too often, their potential
                  remains unnoticed simply because the traditional gates are
                  locked.
                </p>

                <p>
                  <strong className="font-bold text-white">Fikr-e-Nau</strong> —
                  meaning{" "}
                  <span className="text-[#D4AF37] font-medium">
                    "New Thought"
                  </span>{" "}
                  — exists to dismantle those barriers. We are an open,
                  youth-centric cultural stage built to discover, validate, and
                  celebrate emerging voices before the world catches on.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
              CORE TENETS
          =================================================== */}

          <div
            className="
              mt-12
              sm:mt-16
              lg:mt-20
              pt-6
              sm:pt-8
              border-t
              border-white/[0.08]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                mb-5
                sm:mb-6
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    sm:tracking-[0.25em]
                    text-[#6F6F78]
                    font-bold
                  "
                >
                  What We Believe
                </p>

                <h3
                  className="
                    mt-1
                    text-sm
                    sm:text-lg
                    font-bold
                    text-white
                  "
                >
                  Built around four principles.
                </h3>
              </div>

              <div
                className="
                  hidden
                  sm:flex
                  shrink-0
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/10
                  text-[#D4AF37]
                "
              >
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Tenets */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                sm:gap-4
              "
            >
              {/* Tenet 1 */}
              <div
                ref={(el) => {
                  tenetsRef.current[0] = el;
                }}
                className="
                  about-tenet
                  group
                  relative
                  min-w-0
                  p-4
                  sm:p-5
                  rounded-xl
                  sm:rounded-2xl
                  bg-[#111116]/80
                  border
                  border-white/[0.06]
                  hover:border-[#D4AF37]/25
                  transition-colors
                  duration-300
                "
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className="
                      about-tenet-icon
                      shrink-0
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-lg
                      sm:rounded-xl
                      bg-[#D4AF37]/10
                      border
                      border-[#D4AF37]/10
                      text-[#D4AF37]
                    "
                  >
                    <Eye className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 pr-5">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Visibility Over Ability
                    </h4>

                    <p className="mt-1.5 text-[11px] sm:text-xs text-[#85858E] leading-relaxed">
                      We solve the discovery bottleneck for underrepresented
                      youth.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="
                      about-tenet-arrow
                      absolute
                      top-4
                      right-4
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                      text-[#D4AF37]
                      opacity-35
                    "
                  />
                </div>
              </div>

              {/* Tenet 2 */}
              <div
                ref={(el) => {
                  tenetsRef.current[1] = el;
                }}
                className="
                  about-tenet
                  group
                  relative
                  min-w-0
                  p-4
                  sm:p-5
                  rounded-xl
                  sm:rounded-2xl
                  bg-[#111116]/80
                  border
                  border-white/[0.06]
                  hover:border-[#D4AF37]/25
                  transition-colors
                  duration-300
                "
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className="
                      about-tenet-icon
                      shrink-0
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-lg
                      sm:rounded-xl
                      bg-[#D4AF37]/10
                      border
                      border-[#D4AF37]/10
                      text-[#D4AF37]
                    "
                  >
                    <Target className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 pr-5">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Talent to Opportunity
                    </h4>

                    <p className="mt-1.5 text-[11px] sm:text-xs text-[#85858E] leading-relaxed">
                      Direct bridges to mentors, institutions, and creative
                      patrons.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="
                      about-tenet-arrow
                      absolute
                      top-4
                      right-4
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                      text-[#D4AF37]
                      opacity-35
                    "
                  />
                </div>
              </div>

              {/* Tenet 3 */}
              <div
                ref={(el) => {
                  tenetsRef.current[2] = el;
                }}
                className="
                  about-tenet
                  group
                  relative
                  min-w-0
                  p-4
                  sm:p-5
                  rounded-xl
                  sm:rounded-2xl
                  bg-[#111116]/80
                  border
                  border-white/[0.06]
                  hover:border-[#D4AF37]/25
                  transition-colors
                  duration-300
                "
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className="
                      about-tenet-icon
                      shrink-0
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-lg
                      sm:rounded-xl
                      bg-[#D4AF37]/10
                      border
                      border-[#D4AF37]/10
                      text-[#D4AF37]
                    "
                  >
                    <Compass className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 pr-5">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Diverse Disciplines
                    </h4>

                    <p className="mt-1.5 text-[11px] sm:text-xs text-[#85858E] leading-relaxed">
                      Equal reverence for fine arts, software code, poetry, and
                      social tech.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="
                      about-tenet-arrow
                      absolute
                      top-4
                      right-4
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                      text-[#D4AF37]
                      opacity-35
                    "
                  />
                </div>
              </div>

              {/* Tenet 4 */}
              <div
                ref={(el) => {
                  tenetsRef.current[3] = el;
                }}
                className="
                  about-tenet
                  group
                  relative
                  min-w-0
                  p-4
                  sm:p-5
                  rounded-xl
                  sm:rounded-2xl
                  bg-[#111116]/80
                  border
                  border-white/[0.06]
                  hover:border-[#D4AF37]/25
                  transition-colors
                  duration-300
                "
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className="
                      about-tenet-icon
                      shrink-0
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-lg
                      sm:rounded-xl
                      bg-[#D4AF37]/10
                      border
                      border-[#D4AF37]/10
                      text-[#D4AF37]
                    "
                  >
                    <HeartHandshake className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 pr-5">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Open to Everyone
                    </h4>

                    <p className="mt-1.5 text-[11px] sm:text-xs text-[#85858E] leading-relaxed">
                      Every young voice deserves a space to be seen, heard, and
                      celebrated.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="
                      about-tenet-arrow
                      absolute
                      top-4
                      right-4
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                      text-[#D4AF37]
                      opacity-35
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              BOTTOM BRAND STATEMENT
          =================================================== */}

          <div
            className="
              mt-12
              sm:mt-16
              lg:mt-20
              pt-6
              sm:pt-8
              border-t
              border-white/[0.06]
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              justify-between
              gap-4
              sm:gap-5
            "
          >
            <p
              className="
                text-[11px]
                sm:text-xs
                md:text-sm
                text-[#66666F]
                max-w-lg
                leading-relaxed
              "
            >
              A platform for the next generation of thinkers, creators, builders
              and storytellers.
            </p>

            <div
              className="
                flex
                items-center
                gap-2
                text-[8px]
                sm:text-[10px]
                uppercase
                tracking-[0.18em]
                sm:tracking-[0.25em]
                text-[#D4AF37]/70
                font-bold
                whitespace-nowrap
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              New Thought · New Voices
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
          Directly below About and before Footer
      ========================================================= */}

      <section
        id="community-voices"
        className="
          relative
          overflow-hidden
          bg-[#09090B]
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        {/* Background glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[300px]
            h-[300px]
            sm:w-[450px]
            sm:h-[450px]
            rounded-full
            bg-[#D4AF37]/[0.035]
            blur-[100px]
            pointer-events-none
          "
        />

        {/* Section heading */}
        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            mb-10
            sm:mb-12
            md:mb-14
          "
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 sm:w-12 h-px bg-[#D4AF37]/50" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.22em]
                  sm:tracking-[0.3em]
                  font-bold
                  text-[#D4AF37]
                "
              >
                Community Voices
              </span>

              <span className="w-8 sm:w-12 h-px bg-[#D4AF37]/50" />
            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Vision of Executive Members
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-[#92929B]
              "
            >
              Real voices from the people who believe in creativity, ideas, and
              the next generation.
            </p>
          </div>
        </div>

        {/* Testimonial carousel */}
        <div className="relative z-10">
          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
