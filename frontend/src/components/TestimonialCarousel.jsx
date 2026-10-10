import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { TESTIMONIALS } from '../utils/mockData';

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  /* =========================================================
     SLIDE CONTROLS
  ========================================================= */

  const prevSlide = () => {
    setDirection(-1);

    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setDirection(1);

    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const current = TESTIMONIALS[currentIndex];

  /* =========================================================
     SLIDE ANIMATION
  ========================================================= */

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 70 : -70,
      opacity: 0,
      scale: 0.98,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -70 : 70,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">

      {/* =====================================================
          AMBIENT GOLD GLOW
      ===================================================== */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-64
          h-64
          sm:w-80
          sm:h-80
          md:w-96
          md:h-96
          bg-[#D4AF37]/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div className="relative z-10 overflow-hidden rounded-3xl">

        <AnimatePresence
          mode="wait"
          custom={direction}
          initial={false}
        >
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: 'spring',
                stiffness: 260,
                damping: 28,
              },
              opacity: {
                duration: 0.25,
              },
              scale: {
                duration: 0.35,
                ease: 'easeOut',
              },
            }}
            className="
              relative
              rounded-3xl
              p-6
              sm:p-8
              md:p-10
              lg:p-14
              bg-[#111116]/95
              backdrop-blur-xl
              border
              border-[#D4AF37]/20
              shadow-[0_20px_50px_rgba(0,0,0,0.8)]
            "
          >

            {/* =================================================
                TOP HEADER
                IMAGE + PERSON INFORMATION MOVED UP
            ================================================= */}

            <div
              className="
                flex
                flex-col
                gap-6
                pb-6
                sm:pb-7
                border-b
                border-white/10
              "
            >

              {/* Community Voice Label */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-widest
                    text-[#C5A059]
                    font-medium
                  "
                >
                  <Sparkles
                    className="
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                      text-[#D4AF37]
                    "
                  />

                  <span>
                    Community Voice · {current.category}
                  </span>
                </div>

                <span
                  className="
                    hidden
                    sm:block
                    text-[9px]
                    sm:text-[10px]
                    tracking-wider
                    text-gray-500
                    uppercase
                    whitespace-nowrap
                  "
                >
                  Fikr-e-Nau Community
                </span>
              </div>

              {/* =================================================
                  PERSON INFORMATION
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >

                {/* Person */}

                <div className="flex items-center gap-4 min-w-0">

                  <motion.div
                    key={`${current.id}-avatar`}
                    initial={{
                      scale: 0.85,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08,
                    }}
                    className="relative shrink-0"
                  >

                    {/* Gold glow */}

                    <div
                      className="
                        absolute
                        -inset-1.5
                        rounded-full
                        bg-[#D4AF37]/20
                        blur-md
                      "
                    />

                    {/* Avatar */}

                    <img
                      src={current.avatar}
                      alt={`${current.author} - ${current.role}`}
                      className="
                        relative
                        w-14
                        h-14
                        sm:w-16
                        sm:h-16
                        rounded-full
                        object-cover
                        border-2
                        border-[#D4AF37]/50
                        shadow-lg
                      "
                    />
                  </motion.div>

                  {/* Name + Role */}

                  <motion.div
                    key={`${current.id}-info`}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.12,
                    }}
                    className="min-w-0"
                  >

                    <h4
                      className="
                        font-bold
                        text-white
                        text-base
                        sm:text-lg
                        truncate
                      "
                    >
                      {current.author}
                    </h4>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-[#D4AF37]/90
                        font-medium
                        mt-0.5
                        truncate
                      "
                    >
                      {current.role}
                    </p>

                  </motion.div>

                </div>

              </div>

            </div>

            {/* =================================================
                QUOTE SECTION
                MOVED DOWN BELOW IMAGE + PERSON
            ================================================= */}

            <div
              className="
                pt-8
                sm:pt-10
                md:pt-12
              "
            >

              {/* Quote Icon */}

              <div
                className="
                  text-[#D4AF37]/40
                  mb-5
                  sm:mb-6
                "
              >
                <Quote
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    md:w-12
                    md:h-12
                    fill-[#D4AF37]/10
                  "
                />
              </div>

              {/* Quote Text */}

              <motion.blockquote
                key={`${current.id}-quote`}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                }}
                className="
                  font-serif-heading
                  text-lg
                  sm:text-2xl
                  md:text-3xl
                  lg:text-[2rem]
                  text-white
                  font-normal
                  leading-[1.6]
                  sm:leading-relaxed
                  italic
                  max-w-3xl
                "
              >
                "{current.quote}"
              </motion.blockquote>

            </div>

            {/* =================================================
                CONTROLS
            ================================================= */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-5
                sm:gap-7
                mt-8
                sm:mt-10
                pt-6
                border-t
                border-white/10
              "
            >

              {/* Small label */}

              <div
                className="
                  hidden
                  sm:block
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-gray-600
                "
              >
                Community Voice
              </div>

              {/* Navigation */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  sm:justify-end
                  gap-3
                  w-full
                  sm:w-auto
                "
              >

                {/* Previous */}

                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous community voice"
                  className="
                    shrink-0
                    p-3
                    rounded-full
                    border
                    border-[#D4AF37]/30
                    text-white
                    hover:bg-[#D4AF37]/15
                    hover:border-[#D4AF37]
                    transition-all
                    duration-300
                    active:scale-90
                  "
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Indicators */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    px-2
                    min-w-0
                    overflow-hidden
                  "
                >
                  {TESTIMONIALS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to community voice ${idx + 1}`}
                      className="
                        relative
                        h-2
                        shrink-0
                        flex
                        items-center
                      "
                    >
                      <motion.span
                        animate={{
                          width:
                            idx === currentIndex
                              ? 24
                              : 8,

                          opacity:
                            idx === currentIndex
                              ? 1
                              : 0.35,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeOut',
                        }}
                        className="
                          block
                          h-2
                          rounded-full
                          bg-[#D4AF37]
                        "
                      />
                    </button>
                  ))}
                </div>

                {/* Next */}

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next community voice"
                  className="
                    shrink-0
                    p-3
                    rounded-full
                    border
                    border-[#D4AF37]/30
                    text-white
                    hover:bg-[#D4AF37]/15
                    hover:border-[#D4AF37]
                    transition-all
                    duration-300
                    active:scale-90
                  "
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default TestimonialCarousel;

