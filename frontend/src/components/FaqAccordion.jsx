import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQ_ITEMS } from '../utils/mockData';

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            layout
            initial={false}
            animate={{
              borderColor: isOpen
                ? 'rgba(212, 175, 55, 0.45)'
                : 'rgba(255, 255, 255, 0.10)',
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`rounded-2xl border overflow-hidden transition-colors ${
              isOpen
                ? 'bg-[#121217]/85 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)]'
                : 'bg-[#0E0E12]/80 backdrop-blur-sm hover:border-[#D4AF37]/25'
            }`}
          >
            {/* Question */}
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-serif-heading text-base sm:text-lg md:text-xl font-medium text-white flex items-center gap-3">
                <span className="text-xs font-sans text-[#D4AF37] font-semibold tabular-nums shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>{item.question}</span>
              </span>

              {/* Animated Plus / Minus */}
              <motion.span
                animate={{
                  rotate: isOpen ? 180 : 0,
                  scale: isOpen ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`p-1.5 rounded-full border shrink-0 transition-colors duration-300 ${
                  isOpen
                    ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#F3E5AB]'
                    : 'border-white/10 text-gray-400'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="minus"
                      initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      <Minus className="w-4 h-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="plus"
                      initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
            </button>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  key="answer"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    height: {
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.25,
                      ease: 'easeOut',
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 border-t border-white/5">
                    <motion.p
                      initial={{ y: -8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05,
                      }}
                      className="text-sm sm:text-base text-[#C5C5D0] leading-relaxed"
                    >
                      {item.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;