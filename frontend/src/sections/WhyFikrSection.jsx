import React from 'react';
import { Sparkles, Shield, Compass, Lightbulb, Users, ArrowRight } from 'lucide-react';

export const WhyFikrSection = () => {
  return (
    <section id="philosophy" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Centered Ambient Gold Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15151B]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[#E5C378] text-xs font-semibold uppercase tracking-widest mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>The Philosophy</span>
        </div>

        {/* Big Master Statement */}
        <blockquote className="font-serif-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.18] tracking-tight max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          "Talent does not always need permission. <br className="hidden sm:block" />
          <span className="text-gold-gradient italic font-normal">
            Sometimes it simply needs a platform.
          </span>"
        </blockquote>

        {/* Editorial Narrative */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#C2C2CB] font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          For generations, the journey of young artists, students, and innovators has been obstructed by unnecessary gatekeepers and quiet doubts. Fikr-e-Nau is an intentional alternative: an open, dignified arena where courage meets community, and where your ideas are recognized on the strength of their integrity.
        </p>

        {/* 3 Core Philosophical Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121217]/80 backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all">
            <div className="p-3 rounded-xl bg-[#09090B]/80 w-fit text-[#D4AF37] mb-4 border border-[#D4AF37]/20">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-serif-heading text-xl font-bold text-white mb-2">
              Dignified Visibility
            </h4>
            <p className="text-xs sm:text-sm text-[#B2B2BC] leading-relaxed">
              We never treat emerging talent as disposable content. Every creator spotlight is curated with editorial reverence and genuine care.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#121217]/80 backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all">
            <div className="p-3 rounded-xl bg-[#09090B]/80 w-fit text-[#D4AF37] mb-4 border border-[#D4AF37]/20">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-serif-heading text-xl font-bold text-white mb-2">
              Cross-Discipline Unity
            </h4>
            <p className="text-xs sm:text-sm text-[#B2B2BC] leading-relaxed">
              From traditional oil painters and calligraphers to machine learning engineers and social workers, creativity takes infinite forms.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#121217]/80 backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all">
            <div className="p-3 rounded-xl bg-[#09090B]/80 w-fit text-[#D4AF37] mb-4 border border-[#D4AF37]/20">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-serif-heading text-xl font-bold text-white mb-2">
              A Lifelong Guild
            </h4>
            <p className="text-xs sm:text-sm text-[#B2B2BC] leading-relaxed">
              Fikr-e-Nau is more than a directory; it is a permanent brotherhood and sisterhood of young minds who uplift one another.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFikrSection;
