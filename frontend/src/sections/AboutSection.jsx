
import React, { useLayoutEffect, useRef } from 'react';
import {
  Sparkles,
  Eye,
  Target,
  Compass,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const manifestoRef = useRef(null);
  const tenetsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(imageRef.current, {
        opacity: 0,
        x: isMobile ? 0 : -50,
        y: isMobile ? 30 : 0,
        scale: isMobile ? 0.98 : 0.95,
        force3D: true,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        x: isMobile ? 0 : 50,
        y: isMobile ? 25 : 0,
        force3D: true,
      });

      gsap.set(manifestoRef.current, {
        opacity: 0,
        y: 20,
        force3D: true,
      });

      gsap.set(tenetsRef.current.filter(Boolean), {
        opacity: 0,
        y: 20,
        force3D: true,
      });

      /* =====================================================
         MAIN SECTION REVEAL
      ===================================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: isMobile
            ? 'top 85%'
            : 'top 75%',

          toggleActions:
            'play none none reverse',
        },
      });

      /* =====================================================
         IMAGE
      ===================================================== */

      tl.to(imageRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.7 : 0.9,
        ease: 'power3.out',
      });

      /* =====================================================
         CONTENT
      ===================================================== */

      tl.to(
        contentRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: isMobile ? 0.7 : 0.85,
          ease: 'power3.out',
        },
        isMobile ? '-=0.35' : '-=0.65'
      );

      /* =====================================================
         MANIFESTO
      ===================================================== */

      tl.to(
        manifestoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.35'
      );

      /* =====================================================
         TENETS
      ===================================================== */

      tl.to(
        tenetsRef.current.filter(Boolean),
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: isMobile ? 0.06 : 0.1,
          ease: 'power2.out',
        },
        '-=0.25'
      );

      /* =====================================================
         LOGO BREATHING
         
         Very subtle.
         Disabled on reduced-motion.
      ===================================================== */

      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (!reduceMotion) {
        gsap.to('.about-logo-image', {
          scale: 1.018,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      /* =====================================================
         CARD HOVER
         
         Desktop / mouse devices only.
      ===================================================== */

      const canHover = window.matchMedia(
        '(hover: hover) and (pointer: fine)'
      ).matches;

      const cards = sectionRef.current?.querySelectorAll(
        '.about-tenet'
      );

      if (canHover && cards) {
        cards.forEach((card) => {
          const icon = card.querySelector(
            '.about-tenet-icon'
          );

          const arrow = card.querySelector(
            '.about-tenet-arrow'
          );

          const enter = () => {
            gsap.to(card, {
              y: -5,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: true,
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1.08,
                rotate: 4,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: true,
              });
            }

            if (arrow) {
              gsap.to(arrow, {
                x: 3,
                y: -3,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: true,
              });
            }
          };

          const leave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: true,
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: true,
              });
            }

            if (arrow) {
              gsap.to(arrow, {
                x: 0,
                y: 0,
                opacity: 0.35,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: true,
              });
            }
          };

          card.addEventListener('mouseenter', enter);
          card.addEventListener('mouseleave', leave);

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
            card.removeEventListener(
              'mouseenter',
              card._aboutEnter
            );
          }

          if (card._aboutLeave) {
            card.removeEventListener(
              'mouseleave',
              card._aboutLeave
            );
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

        /*
          Prevent long text from creating horizontal
          overflow on very small screens.
        */

        .about-section h1,
        .about-section h2,
        .about-section h3,
        .about-section h4,
        .about-section p {
          overflow-wrap: break-word;
        }

        @media (max-width: 380px) {
          .about-philosophy {
            left: 12px !important;
            right: 12px !important;
            bottom: 12px !important;
            width: auto !important;
            max-width: calc(100% - 24px) !important;
          }

          .about-philosophy-icon {
            width: 32px !important;
            height: 32px !important;
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

      <section
        ref={sectionRef}
        id="about"
        className="
          about-section
          relative
          overflow-x-clip
          py-16
          sm:py-20
          md:py-24
          lg:py-32
          xl:py-36
          bg-[#09090B]
        "
      >
        {/* =====================================================
            BACKGROUND ATMOSPHERE
        ===================================================== */}

        <div className="absolute inset-0 pointer-events-none">

          {/* Left glow */}

          <div
            className="
              absolute
              left-[-220px]
              sm:left-[-180px]
              top-1/2
              -translate-y-1/2
              w-[380px]
              sm:w-[500px]
              h-[380px]
              sm:h-[500px]
              rounded-full
              bg-[#D4AF37]/[0.055]
              blur-[100px]
              sm:blur-[130px]
            "
          />

          {/* Right glow */}

          <div
            className="
              absolute
              right-[-220px]
              sm:right-[-200px]
              top-[20%]
              w-[350px]
              sm:w-[450px]
              h-[350px]
              sm:h-[450px]
              rounded-full
              bg-[#D4AF37]/[0.035]
              blur-[100px]
              sm:blur-[130px]
            "
          />

          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.018]
            "
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
              backgroundSize: '70px 70px',
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
            xs:px-5
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
              MAIN GRID
          =================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-12
              gap-12
              md:gap-10
              lg:gap-14
              xl:gap-20
              items-center
            "
          >

            {/* =================================================
                LEFT — IMAGE
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
              "
            >

              {/* Responsive image wrapper */}

              <div
                className="
                  relative
                  w-full
                  max-w-[420px]
                  sm:max-w-[480px]
                  lg:max-w-[500px]
                  mx-auto
                  lg:mx-0
                  px-1
                  sm:px-2
                  lg:px-0
                "
              >

                {/* =============================================
                    OUTER GLOW
                ============================================= */}

                <div
                  className="
                    absolute
                    inset-[8%]
                    rounded-[1.5rem]
                    sm:rounded-[2.5rem]
                    bg-[#D4AF37]/10
                    blur-[45px]
                    sm:blur-[70px]
                  "
                />

                {/* =============================================
                    TOP LEFT DECORATION
                ============================================= */}

                <div
                  className="
                    absolute
                    -top-2
                    -left-1
                    sm:-top-3
                    sm:-left-3
                    lg:-top-4
                    lg:-left-4
                    w-14
                    h-14
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

                {/* =============================================
                    BOTTOM RIGHT DECORATION
                ============================================= */}

                <div
                  className="
                    absolute
                    -bottom-2
                    -right-1
                    sm:-bottom-3
                    sm:-right-3
                    lg:-bottom-4
                    lg:-right-4
                    w-14
                    h-14
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

                {/* =============================================
                    IMAGE FRAME
                ============================================= */}

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

                  {/* =========================================
                      INNER IMAGE
                  ========================================= */}

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

                  {/* =========================================
                      PHILOSOPHY BADGE
                  ========================================= */}

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

                    {/* Badge icon */}

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

                    {/* Badge text */}

                    <div
                      className="
                        about-philosophy-text
                        min-w-0
                        
                      "
                    >
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

                {/* =============================================
                    DECORATIVE DOTS
                ============================================= */}

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
                    bottom-1/3
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
                RIGHT — CONTENT
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

              {/* ===============================================
                  LABEL
              =============================================== */}

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

              {/* ===============================================
                  MAIN HEADING
              =============================================== */}

              <h2
                className="
                  about-heading
                  text-[2rem]
                  xs:text-[2.2rem]
                  sm:text-5xl
                  md:text-[3.1rem]
                  lg:text-[3.6rem]
                  xl:text-[4.35rem]
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-white
                  max-w-4xl
                  break-words
                "
              >
                Every Young Person Carries a{' '}
                <span className="text-[#D4AF37]">
                  Hidden Spark.
                </span>
              </h2>

              {/* ===============================================
                  SECONDARY HEADING
              =============================================== */}

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

              {/* ===============================================
                  DIVIDER
              =============================================== */}

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

              {/* ===============================================
                  INTRO
              =============================================== */}

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
                Fikr-e-Nau was born out of an undeniable truth:
                <span className="text-white font-semibold">
                  {' '}raw genius and creative innovation are everywhere,
                  but visibility is not.
                </span>
              </p>

              {/* ===============================================
                  BODY
              =============================================== */}

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
                  In quiet bedrooms, community workshops, college
                  corridors, and digital corners, talented individuals
                  are sculpting, coding, writing, and designing the future.
                  Too often, their potential remains unnoticed simply
                  because the traditional gates are locked.
                </p>

                <p>
                  <strong className="font-bold text-white">
                    Fikr-e-Nau
                  </strong>{' '}
                  — meaning{' '}
                  <span className="text-[#D4AF37] font-medium">
                    "New Thought"
                  </span>{' '}
                  — exists to dismantle those barriers. We are an open,
                  youth-centric cultural stage built to discover, validate,
                  and celebrate emerging voices before the world catches on.
                </p>
              </div>

              {/* ===============================================
                  CORE TENETS
              =============================================== */}

              <div
                className="
                  mt-8
                  sm:mt-10
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
                    mb-4
                    sm:mb-5
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

                {/* =============================================
                    TENETS GRID
                ============================================= */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-2.5
                    sm:gap-3
                  "
                >

                  {/* ===========================================
                      TENET 1
                  =========================================== */}

                  <div
                    ref={(el) => {
                      tenetsRef.current[0] = el;
                    }}
                    className="
                      about-tenet
                      group
                      relative
                      min-w-0
                      p-3.5
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

                      <div className="min-w-0 pr-4">

                        <h4
                          className="
                            text-xs
                            sm:text-sm
                            font-bold
                            text-white
                          "
                        >
                          Visibility Over Ability
                        </h4>

                        <p
                          className="
                            mt-1.5
                            text-[11px]
                            sm:text-xs
                            text-[#85858E]
                            leading-relaxed
                          "
                        >
                          We solve the discovery bottleneck for
                          underrepresented youth.
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          about-tenet-arrow
                          absolute
                          top-3.5
                          right-3.5
                          sm:top-4
                          sm:right-4
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

                  {/* ===========================================
                      TENET 2
                  =========================================== */}

                  <div
                    ref={(el) => {
                      tenetsRef.current[1] = el;
                    }}
                    className="
                      about-tenet
                      group
                      relative
                      min-w-0
                      p-3.5
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

                      <div className="min-w-0 pr-4">

                        <h4
                          className="
                            text-xs
                            sm:text-sm
                            font-bold
                            text-white
                          "
                        >
                          Talent to Opportunity
                        </h4>

                        <p
                          className="
                            mt-1.5
                            text-[11px]
                            sm:text-xs
                            text-[#85858E]
                            leading-relaxed
                          "
                        >
                          Direct bridges to mentors, institutions,
                          and creative patrons.
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          about-tenet-arrow
                          absolute
                          top-3.5
                          right-3.5
                          sm:top-4
                          sm:right-4
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

                  {/* ===========================================
                      TENET 3
                  =========================================== */}

                  <div
                    ref={(el) => {
                      tenetsRef.current[2] = el;
                    }}
                    className="
                      about-tenet
                      group
                      relative
                      min-w-0
                      p-3.5
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

                      <div className="min-w-0 pr-4">

                        <h4
                          className="
                            text-xs
                            sm:text-sm
                            font-bold
                            text-white
                          "
                        >
                          Diverse Disciplines
                        </h4>

                        <p
                          className="
                            mt-1.5
                            text-[11px]
                            sm:text-xs
                            text-[#85858E]
                            leading-relaxed
                          "
                        >
                          Equal reverence for fine arts, software
                          code, poetry, and social tech.
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          about-tenet-arrow
                          absolute
                          top-3.5
                          right-3.5
                          sm:top-4
                          sm:right-4
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

                  {/* ===========================================
                      TENET 4
                  =========================================== */}

                  <div
                    ref={(el) => {
                      tenetsRef.current[3] = el;
                    }}
                    className="
                      about-tenet
                      group
                      relative
                      min-w-0
                      p-3.5
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

                      <div className="min-w-0 pr-4">

                        <h4
                          className="
                            text-xs
                            sm:text-sm
                            font-bold
                            text-white
                          "
                        >
                          Free & Accessible
                        </h4>

                        <p
                          className="
                            mt-1.5
                            text-[11px]
                            sm:text-xs
                            text-[#85858E]
                            leading-relaxed
                          "
                        >
                          Zero fees for submission or discovery.
                          Built for youth empowerment.
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          about-tenet-arrow
                          absolute
                          top-3.5
                          right-3.5
                          sm:top-4
                          sm:right-4
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
            </div>
          </div>

          {/* ===================================================
              BOTTOM BRAND STATEMENT
          =================================================== */}

          <div
            className="
              mt-14
              sm:mt-20
              lg:mt-24
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
              A platform for the next generation of thinkers,
              creators, builders and storytellers.
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
    </>
  );
};

export default AboutSection;

