import React from 'react';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion from '../components/FaqAccordion';

export const FaqSection = () => {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clarity & Details"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about showcasing your work, our curation criteria, and joining the community."
          align="center"
        />

        <FaqAccordion />

        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-[#B2B2BC] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Have a question that is not covered here? Reach out directly to our editorial desk at{' '}
            <a
              href="mailto:contact@fikrenau.org"
              className="text-[#D4AF37] hover:underline font-medium"
            >
              contact@fikrenau.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
