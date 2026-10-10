import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import StoryCard from '../components/StoryCard';
import { FEATURED_STORIES } from '../utils/mockData';
import { X, BookOpen, Clock, Calendar, User } from 'lucide-react';

export const FeaturedStoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section id="stories" className="relative py-24 sm:py-32 bg-[#0B0B0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Digital Magazine"
            title="Stories of Courage & Creativity"
            subtitle="Deep-dive narratives documenting the honest journeys, failures, and triumphs of young visionaries."
            className="mb-0"
          />

          <a
            href="#stories"
            className="self-start md:self-end text-xs sm:text-sm font-semibold text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1.5 transition-colors"
          >
            <span>Browse All Editorial Stories</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURED_STORIES.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onRead={(s) => setSelectedStory(s)}
            />
          ))}
        </div>
      </div>

      {/* Story Reader Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111116] border border-[#D4AF37]/35 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/50 text-gray-300 hover:text-white border border-white/10"
              aria-label="Close story reader"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{selectedStory.category} &middot; {selectedStory.readTime}</span>
            </div>

            <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {selectedStory.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-[#8A8A93] pb-6 mb-6 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                {selectedStory.author}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                {selectedStory.date}
              </span>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedStory.coverImage}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#B0B0BA] font-light leading-relaxed">
              <p className="text-base sm:text-lg text-white font-serif-heading italic">
                "{selectedStory.excerpt}"
              </p>
              <p>
                Every breakthrough begins when someone refuses to let the noise of conformity drown out their inner voice. In this deep dive, Fikr-e-Nau chronicles the untold days of sketching through power outages, writing through doubts, and learning technical stacks from mobile screens.
              </p>
              <p>
                "When you come from a background where creative pursuits aren't seen as viable paths, every hour you spend on your craft feels like an act of gentle rebellion," the creator shares. Fikr-e-Nau exists precisely to validate that courage.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#D4AF37] text-black hover:bg-[#E6C25B] transition-colors"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedStoriesSection;
