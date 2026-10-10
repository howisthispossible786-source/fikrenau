import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import { UPCOMING_EVENTS } from '../utils/mockData';
import { X, Calendar, MapPin, Clock, Users, Check } from 'lucide-react';

export const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => {
      setRegistered(false);
      setSelectedEvent(null);
    }, 2000);
  };

  return (
    <section id="events" className="relative py-24 sm:py-32 bg-[#0C0C10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Initiatives & Gatherings"
            title="Upcoming Showcases & Workshops"
            subtitle="Engage directly with the community through live masterclasses, portfolio critiques, and youth summits."
            className="mb-0"
          />

          <span className="self-start md:self-end text-xs font-semibold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#121217]">
            2026 Season Schedule
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={(evt) => setSelectedEvent(evt)}
            />
          ))}
        </div>
      </div>

      {/* Event Details & Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#111116] border border-[#D4AF37]/35 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-gray-300 hover:text-white border border-white/10"
              aria-label="Close event modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#E5C378] border border-[#D4AF37]/30">
              {selectedEvent.type}
            </span>

            <h3 className="font-serif-heading text-2xl font-bold text-white mt-4 mb-3 leading-snug">
              {selectedEvent.title}
            </h3>

            <div className="space-y-2 text-xs text-[#9E9EA7] pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>{selectedEvent.date} &bull; {selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{selectedEvent.location}</span>
              </div>
            </div>

            <p className="text-sm text-[#B0B0BA] leading-relaxed mb-6">
              {selectedEvent.description}
            </p>

            {registered ? (
              <div className="p-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#A0F5BE] text-center text-sm font-semibold flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-[#25D366]" />
                <span>Seat reserved successfully! Check email for pass.</span>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for admission pass"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#09090B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#E6C25B] to-[#D4AF37] hover:from-[#F0D070] transition-all cursor-pointer shadow-lg"
                >
                  Reserve Complimentary Seat ({selectedEvent.seatsLeft})
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
