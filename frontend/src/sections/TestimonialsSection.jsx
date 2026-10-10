import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCarousel from '../components/TestimonialCarousel';

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#09090B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Community Voices"
          title="Voices of the Movement"
          subtitle="Reflections from emerging artists, students, innovators, and mentors connected through Fikr-e-Nau."
          align="center"
        />

        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
