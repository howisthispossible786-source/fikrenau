import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const StartLoader = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const logoFrameRef = useRef(null);
  const auraRef = useRef(null);
  const auraInnerRef = useRef(null);
  const ringOuterRef = useRef(null);
  const ringInnerRef = useRef(null);
  const particlesRef = useRef(null);
  const taglineRef = useRef(null);
  const lineRef = useRef(null);
  const cornerRef = useRef(null);
  const progressRef = useRef(null);
  const glowTextRef = useRef(null);




  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;



    const ctx = gsap.context(() => {
      const allParticles = particlesRef.current
        ? Array.from(particlesRef.current.children)
        : [];

      // Mobile uses fewer particles for better performance.
      const particles = isMobile
        ? allParticles.slice(0, 6)
        : allParticles;

      /* =========================================================
         REDUCED MOTION
         Still keeps the loader around 2.5 seconds,
         but removes the heavy animations.
      ========================================================= */

      if (prefersReducedMotion) {
        gsap.set(containerRef.current, {
          opacity: 1,
        });

        gsap.set(
          [
            logoRef.current,
            logoFrameRef.current,
            auraRef.current,
            auraInnerRef.current,
            ringOuterRef.current,
            ringInnerRef.current,
            taglineRef.current,
            lineRef.current,
            glowTextRef.current,
            cornerRef.current,
            progressRef.current,
          ],
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            filter: "none",
          }
        );

        gsap.set(progressRef.current, {
          scaleX: 1,
        });

        gsap.set(particles, {
          opacity: 0.5,
          scale: 1,
        });

        gsap.delayedCall(2.5, () => {
          document.body.style.overflow = originalOverflow;
          setIsDone(true);
          onComplete?.();
        });

        return;
      }

      /* =========================================================
         INITIAL STATES
      ========================================================= */

      gsap.set(containerRef.current, {
        opacity: 0,
        force3D: true,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.82,
        y: 8,
        filter: isMobile ? "blur(5px)" : "blur(10px)",
        force3D: true,
      });

      gsap.set(logoFrameRef.current, {
        opacity: 0,
        scale: 0.82,
        rotation: isMobile ? -4 : -7,
        force3D: true,
      });

      gsap.set(auraRef.current, {
        opacity: 0,
        scale: 0.6,
        force3D: true,
      });

      gsap.set(auraInnerRef.current, {
        opacity: 0,
        scale: 0.7,
        force3D: true,
      });

      gsap.set(ringOuterRef.current, {
        opacity: 0,
        scale: 0.7,
        rotation: -15,
        force3D: true,
      });

      gsap.set(ringInnerRef.current, {
        opacity: 0,
        scale: 0.75,
        rotation: 12,
        force3D: true,
      });

      gsap.set(taglineRef.current, {
        opacity: 0,
        y: 10,
        filter: isMobile ? "blur(3px)" : "blur(5px)",
        force3D: true,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        opacity: 0,
        force3D: true,
      });

      gsap.set(glowTextRef.current, {
        opacity: 0,
        y: 5,
        force3D: true,
      });

      gsap.set(progressRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        force3D: true,
      });

      gsap.set(cornerRef.current, {
        opacity: 0,
      });

      gsap.set(particles, {
        opacity: 0,
        scale: 0,
        force3D: true,
      });

      /* =========================================================
         MAIN TIMELINE
         
         TOTAL DURATION = EXACTLY 2.5 SECONDS
      ========================================================= */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },

        onComplete: () => {
          document.body.style.overflow = originalOverflow;

          setIsDone(true);

          onComplete?.();
        },
      });

      /* =========================================================
         0.00s
         BACKGROUND
      ========================================================= */

      tl.to(
        containerRef.current,
        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        0
      );

      /* =========================================================
         0.00s
         CORNERS
      ========================================================= */

      tl.to(
        cornerRef.current,
        {
          opacity: 0.65,
          duration: 0.7,
        },
        0
      );

      /* =========================================================
         0.00s
         OUTER AURA
      ========================================================= */

      tl.to(
        auraRef.current,
        {
          opacity: 0.85,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        0
      );

      /* =========================================================
         0.15s
         INNER AURA
      ========================================================= */

      tl.to(
        auraInnerRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.15
      );

      /* =========================================================
         0.00s
         OUTER RING
      ========================================================= */

      tl.to(
        ringOuterRef.current,
        {
          opacity: 0.65,
          scale: 1,
          rotation: 0,
          duration: 1.15,
          ease: "power2.out",
        },
        0
      );

      /* =========================================================
         0.15s
         INNER RING
      ========================================================= */

      tl.to(
        ringInnerRef.current,
        {
          opacity: 0.8,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power2.out",
        },
        0.15
      );

      /* =========================================================
         0.30s
         LOGO FRAME
      ========================================================= */

      tl.to(
        logoFrameRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.95,
          ease: "back.out(1.4)",
        },
        0.3
      );

      /* =========================================================
         0.40s
         LOGO
      ========================================================= */

      tl.to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        },
        0.4
      );

      /* =========================================================
         0.80s
         PARTICLES
      ========================================================= */

      tl.to(
        particles,
        {
          opacity: 0.7,
          scale: 1,
          duration: 0.75,
          stagger: isMobile ? 0.04 : 0.06,
          ease: "back.out(1.8)",
        },
        0.8
      );

      /* =========================================================
         1.20s
         TAGLINE
      ========================================================= */

      tl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        1.2
      );

      /* =========================================================
         1.35s
         LINE
      ========================================================= */

      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        1.35
      );

      /* =========================================================
         1.45s
         DESCRIPTION
      ========================================================= */

      tl.to(
        glowTextRef.current,
        {
          opacity: 0.7,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
        },
        1.45
      );

      /* =========================================================
         0.50s → 2.05s
         PROGRESS BAR
         
         This is intentionally much slower so the loader
         feels like a real 2.5-second cinematic loader.
      ========================================================= */

      tl.to(
        progressRef.current,
        {
          scaleX: 1,
          duration: 1.55,
          ease: "power1.inOut",
        },
        1.2
      );

      /* =========================================================
         0.90s
         LOGO PULSE
      ========================================================= */

      tl.to(
        logoRef.current,
        {
          scale: 1.025,
          duration: 0.45,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        0.9
      );

      /* =========================================================
         1.35s
         SECOND SUBTLE LOGO PULSE
      ========================================================= */

      tl.to(
        logoRef.current,
        {
          scale: 1.018,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        1.35
      );

      /* =========================================================
         1.75s
         THIRD SUBTLE LOGO PULSE
      ========================================================= */

      tl.to(
        logoRef.current,
        {
          scale: 1.015,
          duration: 0.45,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        1.75
      );

      /* =========================================================
         2.00s
         EXIT START
         
         EXIT ENDS AT 2.50s
      ========================================================= */

      tl.to(
        [logoFrameRef.current, logoRef.current, taglineRef.current],
        {
          y: -12,
          opacity: 0,
          scale: 1.025,
          filter: isMobile ? "blur(2px)" : "blur(4px)",
          duration: 0.5,
          stagger: 0.025,
          ease: "power3.in",
        },
        2.0
      );

      /* =========================================================
         2.00s
         RINGS EXIT
      ========================================================= */

      tl.to(
        [ringOuterRef.current, ringInnerRef.current],
        {
          opacity: 0,
          scale: 1.18,
          duration: 0.55,
          ease: "power2.in",
        },
        2.0
      );

      /* =========================================================
         2.00s
         AURA EXIT
      ========================================================= */

      tl.to(
        [auraRef.current, auraInnerRef.current],
        {
          opacity: 0,
          scale: 1.2,
          duration: 0.55,
          ease: "power2.in",
        },
        2.0
      );

      /* =========================================================
         2.05s
         PARTICLES EXIT
      ========================================================= */

      tl.to(
        particles,
        {
          opacity: 0,
          scale: 0,
          duration: 0.35,
          stagger: {
            each: 0.015,
            from: "center",
          },
          ease: "power2.in",
        },
        2.05
      );

      /* =========================================================
         2.30s
         CORNERS EXIT
      ========================================================= */

      tl.to(
        cornerRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        },
        2.3
      );

      /* =========================================================
         2.05s → 2.50s
         FINAL CONTAINER FADE
         
         This guarantees the timeline finishes at 2.5 seconds.
      ========================================================= */

      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.75,
          ease: "power3.inOut",
        },
        2.05
      );

      /* =========================================================
         CONTINUOUS ANIMATIONS
         
         These are deliberately subtle.
         Mobile gets only a light aura pulse.
      ========================================================= */

      if (!isMobile) {
        gsap.to(ringOuterRef.current, {
          rotation: 360,
          duration: 18,
          repeat: -1,
          ease: "none",
        });

        gsap.to(ringInnerRef.current, {
          rotation: -360,
          duration: 14,
          repeat: -1,
          ease: "none",
        });

        gsap.to(auraInnerRef.current, {
          scale: 1.06,
          opacity: 0.8,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        particles.forEach((particle, index) => {
          const angle =
            (index / Math.max(particles.length, 1)) *
            Math.PI *
            2;

          const distance = 80 + (index % 3) * 22;

          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          gsap.to(particle, {
            x,
            y,
            duration: 4 + (index % 2),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.06,
          });
        });

        gsap.to(glowTextRef.current, {
          opacity: 0.4,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      } else {
        // Mobile: only subtle aura pulse.
        gsap.to(auraInnerRef.current, {
          scale: 1.04,
          opacity: 0.75,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => {
      document.body.style.overflow = originalOverflow;
      ctx.revert();
    };
  }, [onComplete]);

  if (isDone) return null;

  const particlePositions = [
    "top-[27%] left-[38%]",
    "top-[32%] left-[62%]",
    "top-[39%] left-[28%]",
    "top-[43%] left-[72%]",
    "top-[24%] left-[52%]",
    "top-[65%] left-[34%]",
    "top-[69%] left-[64%]",
    "top-[58%] left-[25%]",
    "top-[57%] left-[76%]",
    "top-[73%] left-[51%]",
    "top-[36%] left-[47%]",
    "top-[62%] left-[56%]",
  ];

  return (
    <aside
      ref={containerRef}
      role="status"
      aria-label="Loading Fikr-e-Nau"
      aria-live="polite"
      className="
        fixed inset-0 z-[99999]
        flex items-center justify-center
        overflow-hidden
        select-none
        pointer-events-auto
        bg-[#070709]
        w-screen
        h-[100dvh]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, #15151A 0%, #0B0B0E 42%, #070709 78%, #040406 100%)",
        }}
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-30 sm:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
        }}
      />

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.28) 70%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* =====================================================
          CORNERS
      ===================================================== */}

      <div
        ref={cornerRef}
        className="
          absolute
          inset-4
          sm:inset-6
          md:inset-8
          lg:inset-10
          pointer-events-none
        "
      >
        <span className="absolute top-0 left-0 h-6 w-6 sm:h-8 sm:w-8 border-l border-t border-[#D4AF37]/25" />

        <span className="absolute top-0 right-0 h-6 w-6 sm:h-8 sm:w-8 border-r border-t border-[#D4AF37]/25" />

        <span className="absolute bottom-0 left-0 h-6 w-6 sm:h-8 sm:w-8 border-l border-b border-[#D4AF37]/25" />

        <span className="absolute bottom-0 right-0 h-6 w-6 sm:h-8 sm:w-8 border-r border-b border-[#D4AF37]/25" />
      </div>

      {/* =====================================================
          OUTER AURA
      ===================================================== */}

      <div
        ref={auraRef}
        className="
          absolute
          w-[190px] h-[190px]
          sm:w-[280px] sm:h-[280px]
          md:w-[390px] md:h-[390px]
          lg:w-[500px] lg:h-[500px]
          rounded-full
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.08) 32%, rgba(212,175,55,0.025) 52%, transparent 72%)",
          filter: "blur(18px)",
          willChange: "transform, opacity",
        }}
      />

      {/* =====================================================
          INNER AURA
      ===================================================== */}

      <div
        ref={auraInnerRef}
        className="
          absolute
          w-[120px] h-[120px]
          sm:w-[180px] sm:h-[180px]
          md:w-[250px] md:h-[250px]
          lg:w-[320px] lg:h-[320px]
          rounded-full
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,225,120,0.18) 0%, rgba(212,175,55,0.08) 35%, transparent 68%)",
          filter: "blur(12px)",
          willChange: "transform, opacity",
        }}
      />

      {/* =====================================================
          OUTER RING
      ===================================================== */}

      <div
        ref={ringOuterRef}
        className="
          absolute
          w-[155px] h-[155px]
          sm:w-[220px] sm:h-[220px]
          md:w-[300px] md:h-[300px]
          lg:w-[390px] lg:h-[390px]
          rounded-full
          border border-[#D4AF37]/20
          pointer-events-none
        "
        style={{
          boxShadow:
            "0 0 25px rgba(212,175,55,0.06), inset 0 0 25px rgba(212,175,55,0.025)",
          willChange: "transform, opacity",
        }}
      />

      {/* =====================================================
          INNER RING
      ===================================================== */}

      <div
        ref={ringInnerRef}
        className="
          absolute
          w-[115px] h-[115px]
          sm:w-[170px] sm:h-[170px]
          md:w-[235px] md:h-[235px]
          lg:w-[300px] lg:h-[300px]
          rounded-full
          border border-[#D4AF37]/30
          pointer-events-none
        "
        style={{
          borderStyle: "dashed",
          boxShadow: "0 0 18px rgba(212,175,55,0.05)",
          willChange: "transform, opacity",
        }}
      />

      {/* =====================================================
          PARTICLES
      ===================================================== */}

      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      >
        {particlePositions.map((position, index) => (
          <span
            key={index}
            className={`
              absolute
              ${position}
              h-[3px] w-[3px]
              sm:h-1 sm:w-1
              rounded-full
              bg-[#E6C25B]
              shadow-[0_0_6px_rgba(230,194,91,0.65)]
            `}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative z-10
          flex flex-col
          items-center
          text-center
          px-5
          sm:px-6
          max-w-full
        "
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <div
          ref={logoFrameRef}
          className="
            relative
            flex items-center justify-center
            rounded-[22px]
            p-1.5
            sm:rounded-[26px]
            sm:p-2.5
            md:p-3
          "
        >
          <div
            className="
              absolute inset-0
              rounded-[22px]
              sm:rounded-[26px]
              border border-[#D4AF37]/20
              bg-white/[0.012]
              backdrop-blur-[1px]
            "
          />

          <div
            className="
              absolute
              -inset-3
              sm:-inset-5
              rounded-full
              opacity-50
            "
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.12), transparent 65%)",
              filter: "blur(10px)",
            }}
          />

          <div
            ref={logoRef}
            className="
              relative
              overflow-hidden
              rounded-[17px]
              sm:rounded-[21px]
              w-[90px] h-[90px]
              xs:w-[100px] xs:h-[100px]
              sm:w-32 sm:h-32
              md:w-36 md:h-36
              lg:w-44 lg:h-44
            "
            style={{
              willChange: "transform, opacity, filter",
            }}
          >
            <img
              src="/logo.jpeg"
              alt="Fikr-e-Nau Logo"
              className="
                h-full w-full
                object-contain
                rounded-[17px]
                sm:rounded-[21px]
                block
              "
              loading="eager"
              decoding="async"
            />

            <span
              className="
                absolute inset-y-0
                -left-full
                w-1/2
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                animate-[loaderShine_2.8s_ease-in-out_infinite]
              "
            />
          </div>
        </div>

        {/* ===================================================
            TAGLINE
        =================================================== */}

        <div
          ref={taglineRef}
          className="
            mt-5
            sm:mt-7
            flex flex-col
            items-center
          "
        >
          <span
            className="
              text-[8px]
              xs:text-[9px]
              sm:text-[10px]
              md:text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.32em]
              text-[#E6C25B]
              whitespace-nowrap
            "
          >
            Recognise · Inspire · Empower
          </span>

          <div
            ref={lineRef}
            className="
              mt-2
              sm:mt-3
              h-px
              w-10
              sm:w-14
              md:w-20
              origin-center
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]
              to-transparent
            "
          />
        </div>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <span
          ref={glowTextRef}
          className="
            mt-3
            sm:mt-4
            text-[7px]
            sm:text-[9px]
            uppercase
            tracking-[0.16em]
            sm:tracking-[0.22em]
            text-white/25
            whitespace-nowrap
          "
        >
          Shaping New Thought
        </span>

        {/* ===================================================
            PROGRESS
        =================================================== */}

        <div
          className="
            mt-5
            sm:mt-7
            h-[2px]
            w-20
            sm:w-28
            md:w-32
            overflow-hidden
            rounded-full
            bg-white/[0.06]
          "
        >
          <div
            ref={progressRef}
            className="
              h-full
              w-full
              origin-left
              rounded-full
              bg-gradient-to-r
              from-[#8E6D1D]
              via-[#F3D77A]
              to-[#D4AF37]
              shadow-[0_0_7px_rgba(212,175,55,0.45)]
            "
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM BRANDING
      ===================================================== */}

      <div
        className="
          absolute
          bottom-4
          sm:bottom-6
          md:bottom-8
          left-1/2
          -translate-x-1/2
          text-[6px]
          sm:text-[8px]
          uppercase
          tracking-[0.28em]
          text-white/15
          whitespace-nowrap
        "
      >
        Fikr-e-Nau
      </div>

      {/* =====================================================
          LOADER SHINE
      ===================================================== */}

      <style>{`
        @keyframes loaderShine {
          0% {
            left: -100%;
          }

          45%,
          100% {
            left: 160%;
          }
        }
      `}</style>
    </aside>
  );
};

export default StartLoader;