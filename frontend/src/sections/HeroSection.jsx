import { useLayoutEffect, useRef } from "react";
import {
ArrowRight,
Sparkles,
Compass,
CheckCircle2,
MoveUpRight,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
HERO SECTION
============================================================ */

const HeroSection = ({ onDiscoverClick, onSubmitClick }) => {
const heroRef = useRef(null);

useLayoutEffect(() => {
const hero = heroRef.current;


if (!hero) return;

const ctx = gsap.context(() => {
  const mm = gsap.matchMedia();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* ======================================================
     REDUCED MOTION
  ====================================================== */

  if (prefersReducedMotion) {
    gsap.set(
      [
        ".hero-main-aura",
        ".hero-orbit-one",
        ".hero-orbit-two",
        ".hero-particle",
      ],
      {
        opacity: 0,
      },
    );

    gsap.set(
      [
        ".hero-eyebrow",
        ".hero-title",
        ".hero-description",
        ".hero-cta-group",
        ".hero-value-row",
      ],
      {
        opacity: 1,
        y: 0,
        scale: 1,
      },
    );

    return;
  }

  /* ======================================================
     DESKTOP
  ====================================================== */

  mm.add("(min-width: 1025px)", () => {
    gsap.set(".hero-main-aura", {
      opacity: 0,
      scale: 0.85,
    });

    gsap.set([".hero-orbit-one", ".hero-orbit-two"], {
      opacity: 0,
      scale: 0.88,
    });

    gsap.set(".hero-particle", {
      opacity: 0,
      scale: 0,
    });

    gsap.set(".hero-eyebrow", {
      opacity: 0,
      y: 14,
    });

    gsap.set(".hero-title", {
      opacity: 0,
      y: 22,
      scale: 0.98,
    });

    gsap.set(".hero-description", {
      opacity: 0,
      y: 16,
    });

    gsap.set(".hero-cta-group", {
      opacity: 0,
      y: 14,
    });

    gsap.set(".hero-value-row", {
      opacity: 0,
      y: 12,
    });

    const entrance = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    entrance
      .to(
        ".hero-main-aura",
        {
          opacity: 0.055,
          scale: 1,
          duration: 0.8,
        },
        0,
      )
      .to(
        ".hero-orbit-one",
        {
          opacity: 0.55,
          scale: 1,
          duration: 0.7,
        },
        0.18,
      )
      .to(
        ".hero-orbit-two",
        {
          opacity: 0.4,
          scale: 1,
          duration: 0.7,
        },
        0.22,
      )
      .to(
        ".hero-particle",
        {
          opacity: 0.65,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
        },
        0.25,
      )
      .to(
        ".hero-eyebrow",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        0.3,
      )
      .to(
        ".hero-title",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
        },
        0.4,
      )
      .to(
        ".hero-description",
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        0.55,
      )
      .to(
        ".hero-cta-group",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        0.68,
      )
      .to(
        ".hero-value-row",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        0.78,
      );

    gsap.to(".hero-main-aura", {
      opacity: 0.07,
      scale: 1.05,
      duration: 5.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-orbit-one", {
      rotationZ: "+=360",
      duration: 32,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".hero-orbit-two", {
      rotationZ: "-=360",
      duration: 42,
      repeat: -1,
      ease: "none",
    });

    const particleAnimations = [
      [".particle-one", -12, 5, 4.5],
      [".particle-two", 10, -6, 5.2],
      [".particle-three", -9, -5, 4.8],
      [".particle-four", 12, 7, 5.8],
    ];

    particleAnimations.forEach(
      ([target, y, x, duration], index) => {
        gsap.to(target, {
          y,
          x,
          opacity: 0.8,
          scale: 1.2,
          duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      },
    );

    gsap.to(".hero-content", {
      y: -30,
      opacity: 0.92,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "80% top",
        scrub: 1,
      },
    });

    return () => {};
  });

  /* ======================================================
     TABLET
  ====================================================== */

  mm.add("(min-width: 641px) and (max-width: 1024px)", () => {
    gsap.set(".hero-main-aura", {
      opacity: 0,
      scale: 0.9,
    });

    gsap.set([".hero-orbit-one", ".hero-orbit-two"], {
      opacity: 0,
    });

    gsap.set(".hero-particle", {
      opacity: 0,
    });

    gsap.set(".hero-eyebrow", {
      opacity: 0,
      y: 10,
    });

    gsap.set(".hero-title", {
      opacity: 0,
      y: 18,
    });

    gsap.set(".hero-description", {
      opacity: 0,
      y: 14,
    });

    gsap.set(".hero-cta-group", {
      opacity: 0,
      y: 12,
    });

    gsap.set(".hero-value-row", {
      opacity: 0,
      y: 10,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.to(
      ".hero-main-aura",
      {
        opacity: 0.04,
        scale: 1,
        duration: 0.7,
      },
      0,
    )
      .to(
        ".hero-eyebrow",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.2,
      )
      .to(
        ".hero-title",
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        0.3,
      )
      .to(
        ".hero-description",
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
        },
        0.45,
      )
      .to(
        ".hero-cta-group",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.55,
      )
      .to(
        ".hero-value-row",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.65,
      );

    gsap.to(".hero-main-aura", {
      scale: 1.04,
      opacity: 0.05,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  /* ======================================================
     MOBILE
  ====================================================== */

  mm.add("(max-width: 640px)", () => {
    gsap.set(
      [
        ".hero-orbit-one",
        ".hero-orbit-two",
        ".hero-particle",
      ],
      {
        display: "none",
      },
    );

    gsap.set(".hero-main-aura", {
      opacity: 0,
      scale: 0.8,
    });

    gsap.set(".hero-eyebrow", {
      opacity: 0,
      y: 8,
    });

    gsap.set(".hero-title", {
      opacity: 0,
      y: 14,
      scale: 0.99,
    });

    gsap.set(".hero-description", {
      opacity: 0,
      y: 10,
    });

    gsap.set(".hero-cta-group", {
      opacity: 0,
      y: 10,
    });

    gsap.set(".hero-value-row", {
      opacity: 0,
      y: 8,
    });

    const mobileTl = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
    });

    mobileTl
      .to(
        ".hero-main-aura",
        {
          opacity: 0.035,
          scale: 1,
          duration: 0.45,
        },
        0,
      )
      .to(
        ".hero-eyebrow",
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        0.12,
      )
      .to(
        ".hero-title",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
        },
        0.22,
      )
      .to(
        ".hero-description",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.35,
      )
      .to(
        ".hero-cta-group",
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        0.47,
      )
      .to(
        ".hero-value-row",
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        0.58,
      );

    gsap.to(".hero-main-aura", {
      opacity: 0.045,
      scale: 1.03,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-content", {
      y: -18,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "70% top",
        scrub: 0.7,
      },
    });
  });
}, heroRef);

return () => {
  ctx.revert();
};


}, []);

return ( <section
   ref={heroRef}
   id="hero"
   className="
     hero-section
     relative
     min-h-screen
     min-h-[100dvh]
     flex
     items-center
     justify-center
     bg-transparent
     px-4
     pt-28
     pb-20
     sm:px-6
     lg:px-8
   "
 >
{/* ======================================================
BACKGROUND
====================================================== */}

```
  <div
    className="
      absolute
      inset-0
      pointer-events-none
      overflow-hidden
    "
  >
    <div
      className="
        hero-main-aura
        absolute
        left-1/2
        top-[5%]
        h-[420px]
        w-[420px]
        -translate-x-1/2
        rounded-full
        bg-[#D4AF37]/[0.055]
        blur-[90px]
        sm:h-[600px]
        sm:w-[600px]
        sm:blur-[110px]
        lg:h-[700px]
        lg:w-[700px]
        lg:blur-[130px]
      "
      style={{
        willChange: "transform, opacity",
      }}
    />

    <div
      className="
        absolute
        -left-48
        top-[35%]
        h-[300px]
        w-[300px]
        rounded-full
        bg-[#D4AF37]/[0.025]
        blur-[80px]
        sm:h-[400px]
        sm:w-[400px]
        sm:blur-[110px]
        lg:blur-[120px]
      "
    />

    <div
      className="
        absolute
        -right-48
        bottom-[5%]
        h-[320px]
        w-[320px]
        rounded-full
        bg-[#D4AF37]/[0.025]
        blur-[90px]
        sm:h-[400px]
        sm:w-[400px]
        lg:h-[450px]
        lg:w-[450px]
        lg:blur-[120px]
      "
    />

    <div
      className="
        absolute
        inset-0
        opacity-[0.018]
        sm:opacity-[0.025]
      "
      style={{
        backgroundImage:
          "radial-gradient(rgba(212,175,55,0.8) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
      }}
    />

    <div
      className="
        absolute
        left-1/2
        top-0
        h-px
        w-[70%]
        -translate-x-1/2
        bg-gradient-to-r
        from-transparent
        via-[#D4AF37]/40
        to-transparent
      "
    />
  </div>

  {/* ======================================================
      FIXED HERO LOGO BACKGROUND
  ====================================================== */}

  <div
    className="
      hero-3d-scene
      fixed
      inset-0
      z-0
      pointer-events-none
      overflow-hidden
      w-screen
      h-screen
      h-[100dvh]
      flex
      items-center
      justify-center
    "
    aria-hidden="true"
  >
    <div className="hero-logo hero-logo-main">
      <img
        src="/fixedimage.png"
        alt="Fikr-e-Nau"
        draggable="false"
        loading="eager"
        decoding="async"
        className="hero-logo-image"
      />
    </div>

    <div
      className="
        absolute
        inset-0
        pointer-events-none
        bg-[radial-gradient(ellipse_at_center,rgba(7,7,8,0.3)_0%,rgba(7,7,8,0.15)_45%,rgba(7,7,8,0.65)_100%)]
      "
    />

    <div className="hero-orbit hero-orbit-one" />
    <div className="hero-orbit hero-orbit-two" />

    <span className="hero-particle particle-one" />
    <span className="hero-particle particle-two" />
    <span className="hero-particle particle-three" />
    <span className="hero-particle particle-four" />
  </div>

  {/* ======================================================
      HERO CONTENT
  ====================================================== */}

  <div
    className="
      hero-content
      relative
      z-10
      mx-auto
      flex
      w-full
      max-w-6xl
      flex-col
      items-center
      text-center
    "
  >
    {/* Eyebrow */}

    <div
      className="
        hero-eyebrow
        mb-7
        inline-flex
        items-center
        gap-2.5
        rounded-full
        border
        border-[#D4AF37]/25
        bg-[#0E0E12]/80
        px-4
        py-2
        shadow-[0_0_20px_rgba(212,175,55,0.06)]
        backdrop-blur-sm
        sm:mb-9
      "
    >
      <span
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
        "
      >
        <Sparkles
          className="
            h-3.5
            w-3.5
            text-[#D4AF37]
          "
        />
      </span>

      <span
        className="
          font-sans
          text-[10px]
          font-bold
          tracking-[0.18em]
          text-[#D8BF70]
          sm:text-xs
        "
      >
        Recognise • Inspire • Empower
      </span>
    </div>

    {/* Headline */}

    <div className="relative">
      <h1
        className="
          hero-title
          max-w-5xl
          font-editorial
          text-[3.15rem]
          font-medium
          leading-[0.98]
          tracking-[-0.045em]
          text-white
          drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]
          sm:text-6xl
          md:text-7xl
          lg:text-[6.7rem]
        "
      >
        <span className="block">EVERY IDEA</span>

        <span
          className="
            hero-gold-title
            relative
            mt-1
            inline-block
            italic
            lg:text-nowrap
          "
        >
          Deserves a Platform
        </span>
      </h1>
    </div>

    {/* Description */}

    <p
      className="
        hero-description
        mt-7
        max-w-2xl
        font-sans
        text-sm
        font-medium
        leading-7
        tracking-[0.01em]
        text-[#A7A7B0]
        sm:mt-9
        sm:text-base
        sm:leading-8
        md:text-lg
      "
    >
      Fikr-e-Nau is a creative digital platform built to discover,
      celebrate, and amplify the voices of emerging talent. Your ideas,
      creativity, and vision deserve to be seen.
    </p>

    {/* CTA */}

    <div
      className="
        hero-cta-group
        mt-9
        flex
        w-full
        flex-col
        items-center
        gap-3
        sm:mt-11
        sm:w-auto
        sm:flex-row
        sm:gap-4
      "
    >
      <a
        href="#talents"
        onClick={onDiscoverClick}
        className="
          hero-primary-btn
          group
          flex
          w-full
          items-center
          justify-center
          gap-2.5
          rounded-full
          px-7
          py-3.5
          font-sans
          text-sm
          font-bold
          text-[#09090B]
          sm:w-auto
          sm:px-8
          sm:py-4
          sm:text-base
        "
      >
        <Compass className="h-4 w-4" />

        <span>Discover Talent</span>

        <ArrowRight
          className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>

      <a
        href="#submit"
        onClick={onSubmitClick}
        className="
          hero-secondary-btn
          group
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-white/[0.12]
          bg-white/[0.035]
          px-7
          py-3.5
          font-sans
          text-sm
          font-bold
          text-[#E8E8EC]
          sm:w-auto
          sm:px-8
          sm:py-4
          sm:text-base
        "
      >
        <span>Share Your Talent</span>

        <MoveUpRight
          className="
            h-4
            w-4
            text-[#D4AF37]
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </a>
    </div>

    {/* ======================================================
        FOUR SEPARATE PILLARS
    ====================================================== */}

    <div
      className="
        hero-value-row
        mt-14
        grid
        w-full
        max-w-4xl
        grid-cols-2
        gap-3
        pt-2
        sm:mt-16
        sm:grid-cols-4
        sm:gap-4
        sm:pt-3
      "
    >
      <HeroValue
        title="Youth First"
        subtitle="Emerging Voices"
      />

      <HeroValue
        title="Curated"
        subtitle="Creative Quality"
      />

      <HeroValue
        title="Visible"
        subtitle="Real Exposure"
      />

      <HeroValue
        title="Authentic"
        subtitle="Real Stories"
      />
    </div>
  </div>
</section>


);
};

/* ============================================================
VALUE ITEM / PILLAR
============================================================ */

const HeroValue = ({ title, subtitle }) => {
return ( <div
   className="
     hero-value-card
     group
     flex
     min-h-[78px]
     items-center
     justify-center
     gap-2.5
     rounded-2xl
     border
     border-white/[0.10]
     bg-[#0E0E12]/65
     px-3
     py-3
     text-left
     backdrop-blur-md
     shadow-[0_8px_30px_rgba(0,0,0,0.16)]
     transition-all
     duration-300
     hover:border-[#D4AF37]/30
     hover:bg-[#121217]/80
     hover:shadow-[0_10px_35px_rgba(0,0,0,0.24)]
     sm:min-h-[86px]
     sm:gap-3
     sm:px-4
   "
 > <div
     className="
       flex
       h-8
       w-8
       shrink-0
       items-center
       justify-center
       rounded-full
       border
       border-[#D4AF37]/20
       bg-[#D4AF37]/[0.08]
       transition-all
       duration-300
       group-hover:border-[#D4AF37]/40
       group-hover:bg-[#D4AF37]/10
     "
   > <CheckCircle2
       className="
         h-4
         w-4
         text-[#D4AF37]
       "
     /> </div>


  <div className="min-w-0">
    <span
      className="
        block
        font-sans
        text-[10px]
        font-bold
        uppercase
        tracking-[0.1em]
        text-[#E7E7EA]
        sm:text-xs
      "
    >
      {title}
    </span>

    <span
      className="
        mt-0.5
        block
        font-sans
        text-[9px]
        font-medium
        leading-4
        text-[#777780]
        sm:text-[10px]
      "
    >
      {subtitle}
    </span>
  </div>
</div>


);
};

/* ============================================================
HERO STYLES
============================================================ */

const heroStyles = `
.font-editorial {
font-family: 'Poppins', sans-serif;
}

.hero-gold-title {
background:
linear-gradient(
110deg,
#f7e8a8 0%,
#d4af37 38%,
#f2d66d 58%,
#b88e28 100%
);


-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;

text-shadow:
  0 0 35px
  rgba(212,175,55,.08);


}

/* ==========================================================
FIXED HERO BACKGROUND
========================================================== */

.hero-3d-scene {
position: fixed !important;

inset: 0;

z-index: 0;

width: 100vw;

height: 100vh;
height: 100dvh;

pointer-events: none;
overflow: hidden;

display: flex;
align-items: center;
justify-content: center;

background: #070708;


}

.hero-logo {
position: fixed !important;


top: 50%;
left: 0;

width: 100vw;

display: flex;
align-items: center;
justify-content: center;

pointer-events: none;
user-select: none;

overflow: visible;

transform: translateY(-50%) !important;

animation: none !important;
transition: none !important;
will-change: auto !important;


}

.hero-logo-image {
display: block;


width: 100%;
height: auto;

min-width: 0;
max-width: 100%;

flex-shrink: 0;

object-fit: initial;
object-position: center center;

pointer-events: none;
user-select: none;

-webkit-user-drag: none;

animation: none !important;
transition: none !important;
transform: none !important;
will-change: auto !important;


}

.hero-logo-main {
opacity: 0.55;


filter:
  drop-shadow(
    0 0 50px
    rgba(212,175,55,.24)
  );

animation: none !important;
transition: none !important;
will-change: auto !important;


}

/* ==========================================================
LARGE DESKTOP
========================================================== */

@media (min-width: 1025px) {
.hero-logo {
width: 100vw;


  left: 0;
  top: 50%;

  transform: translateY(-50%) !important;
}

.hero-logo-image {
  width: min(68vw, 1150px);

  min-width: 0;
  max-width: 1150px;

  height: 1000px;

  flex-shrink: 0;

  object-fit: initial;
  object-position: center center;

  animation: none !important;
  transition: none !important;
  transform: none !important;
  will-change: auto !important;
}

.hero-logo-main {
  opacity: 0.55;

  filter:
    drop-shadow(
      0 0 50px
      rgba(212,175,55,.24)
    );

  animation: none !important;
  transition: none !important;
  will-change: auto !important;
}


}

/* ==========================================================
DESKTOP ORBITS
========================================================== */

.hero-orbit {
position: absolute;


left: 50%;
top: 50%;

width: min(720px, 85vw);

aspect-ratio: 1 / .35;

border: 1px solid rgba(212,175,55,.1);

border-radius: 50%;

transform-style: preserve-3d;

pointer-events: none;

will-change: transform, opacity;


}

.hero-orbit-one {
transform:
translate(-50%, -50%)
rotateX(65deg)
rotateZ(-15deg);
}

.hero-orbit-two {
width: min(580px, 70vw);


transform:
  translate(-50%, -50%)
  rotateX(65deg)
  rotateZ(72deg);

opacity: .5;


}

/* ==========================================================
PARTICLES
========================================================== */

.hero-particle {
position: absolute;


width: 4px;
height: 4px;

border-radius: 50%;

background: #D4AF37;

box-shadow:
  0 0 8px
  rgba(212,175,55,.55);

pointer-events: none;

will-change: transform, opacity;


}

.particle-one {
left: 23%;
top: 33%;
}

.particle-two {
right: 24%;
top: 27%;


width: 3px;
height: 3px;


}

.particle-three {
left: 30%;
bottom: 25%;

width: 3px;
height: 3px;


}

.particle-four {
right: 30%;
bottom: 31%;
}

/* ==========================================================
FOUR SEPARATE PILLARS
========================================================== */

.hero-value-row {
border-top: none !important;
}

.hero-value-card {
position: relative;
isolation: isolate;


background:
  linear-gradient(
    145deg,
    rgba(20,20,25,0.78),
    rgba(10,10,13,0.62)
  );

border: 1px solid rgba(255,255,255,0.10);

box-shadow:
  0 8px 30px rgba(0,0,0,0.16),
  inset 0 1px 0 rgba(255,255,255,0.035);


}

.hero-value-card::before {
content: "";


position: absolute;

inset: 0;

z-index: -1;

border-radius: inherit;

background:
  radial-gradient(
    circle at 20% 20%,
    rgba(212,175,55,0.07),
    transparent 55%
  );

pointer-events: none;


}

.hero-value-card:hover {
transform: translateY(-2px);


border-color: rgba(212,175,55,0.30);

background:
  linear-gradient(
    145deg,
    rgba(25,25,30,0.84),
    rgba(12,12,16,0.72)
  );


}

/* ==========================================================
PRIMARY BUTTON
========================================================== */

.hero-primary-btn {
background:
linear-gradient(
135deg,
#efd16d 0%,
#d4af37 52%,
#b88e28 100%
);


box-shadow:
  0 10px 28px
  rgba(212,175,55,.16);

transition:
  transform .3s cubic-bezier(.16,1,.3,1),
  box-shadow .3s ease;


}

.hero-primary-btn:hover {
transform: translateY(-3px);


box-shadow:
  0 16px 38px
  rgba(212,175,55,.28);


}

/* ==========================================================
SECONDARY BUTTON
========================================================== */

.hero-secondary-btn {
transition:
color .3s ease,
border-color .3s ease,
background-color .3s ease,
transform .3s cubic-bezier(.16,1,.3,1);
}

.hero-secondary-btn:hover {
color: #f3e5ab;


border-color: rgba(212,175,55,.45);

background-color: rgba(212,175,55,.055);

transform: translateY(-3px);


}

/* ==========================================================
TABLET
========================================================== */

@media (min-width: 641px) and (max-width: 1024px) {
.hero-3d-scene {
width: 100vw;


  height: 100vh;
  height: 100dvh;
}

.hero-logo {
  position: fixed !important;

  top: 50%;
  left: 0;

  width: 100vw;

  transform: translateY(-50%) !important;

  animation: none !important;
  transition: none !important;
  will-change: auto !important;
}

.hero-logo-image {
  width: 100vw;
  min-width: 100vw;

  height: auto;

  max-width: none;
  max-height: none;

  flex-shrink: 0;

  animation: none !important;
  transition: none !important;
  transform: none !important;
  will-change: auto !important;
}

.hero-logo-main {
  opacity: 0.55;

  filter:
    drop-shadow(
      0 0 35px
      rgba(212,175,55,.20)
    );

  animation: none !important;
  transition: none !important;
  will-change: auto !important;
}

.hero-value-card {
  min-height: 82px;
}


}

/* ==========================================================
MOBILE
========================================================== */

@media (max-width: 640px) {
.hero-3d-scene {
width: 100vw;


  height: 100vh;
  height: 100dvh;

  background: #070708;
}

.hero-logo {
  position: fixed !important;

  top: 50%;
  left: 0;

  width: 100vw;

  transform: translateY(-50%) !important;

  animation: none !important;
  transition: none !important;
  will-change: auto !important;
}

.hero-logo-image {
  width: 100vw;
  min-width: 100vw;

  height: auto;

  max-width: none;
  max-height: none;

  object-fit: initial;
  object-position: center center;

  flex-shrink: 0;

  animation: none !important;
  transition: none !important;
  transform: none !important;
  will-change: auto !important;
}

.hero-main-aura {
  filter: blur(55px) !important;
}

.hero-logo-main {
  opacity: 0.55;

  filter:
    drop-shadow(
      0 0 25px
      rgba(212,175,55,.18)
    ) !important;

  animation: none !important;
  transition: none !important;
  will-change: auto !important;
}

.hero-gold-title {
  text-shadow: none;
}

.hero-value-card {
  min-height: 78px;
  border-radius: 16px;
  padding: 10px;
}

.hero-primary-btn,
.hero-secondary-btn {
  transition:
    transform .2s ease,
    background-color .2s ease;
}

.hero-primary-btn:hover,
.hero-secondary-btn:hover {
  transform: none;
}

.hero-value-card:hover {
  transform: none;
}


}

/* ==========================================================
VERY NARROW / TALL PHONES
========================================================== */

@media (max-width: 480px) and (orientation: portrait) {
.hero-logo {
position: fixed !important;


  width: 100vw;
  left: 0;

  animation: none !important;
  transition: none !important;
  will-change: auto !important;
}

.hero-logo-image {
  width: 100vw;
  min-width: 100vw;

  height: auto;

  max-width: none;
  max-height: none;

  animation: none !important;
  transition: none !important;
  transform: none !important;
  will-change: auto !important;
}


}

/* ==========================================================
LANDSCAPE PHONES
========================================================== */

@media (max-width: 900px) and (orientation: landscape) {
.hero-logo {
position: fixed !important;


  width: 100vw;
  left: 0;

  animation: none !important;
  transition: none !important;
  will-change: auto !important;
}

.hero-logo-image {
  width: 100vw;
  min-width: 100vw;

  height: auto;

  max-width: none;
  max-height: none;

  animation: none !important;
  transition: none !important;
  transform: none !important;
  will-change: auto !important;
}


}

/* ==========================================================
REDUCED MOTION
========================================================== */

@media (prefers-reduced-motion: reduce) {
*,
*::before,
*::after {
scroll-behavior: auto !important;
}


.hero-primary-btn,
.hero-secondary-btn,
.hero-value-card {
  transition: none !important;
}

.hero-logo,
.hero-logo-main,
.hero-logo-image {
  animation: none !important;
  transition: none !important;
}


}
`;

/* ============================================================
STYLE INJECTOR
============================================================ */

const StyleInjector = () => <style>{heroStyles}</style>;

/* ============================================================
EXPORT
============================================================ */

const HeroSectionWithStyles = (props) => {
return (
<> <StyleInjector />
<HeroSection {...props} />
</>
);
};

export default HeroSectionWithStyles;
