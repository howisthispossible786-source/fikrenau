import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export const EventCard = ({ event, onSelect }) => {
  const {
    title,
    type,
    date,
    time,
    location,
    description,
    seatsLeft,
    badge,
  } = event;

  return (
    <div className="group relative rounded-2xl p-6 sm:p-7 bg-[#121217] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.7)] flex flex-col justify-between">
      {/* Subtle gold line accent at top */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/10 text-[#E5C378] border border-[#D4AF37]/25">
            {type}
          </span>
          {badge && (
            <span className="text-[11px] font-medium tracking-wide uppercase text-gray-400">
              {badge}
            </span>
          )}
        </div>

        {/* Event Title */}
        <h3 className="font-serif-heading text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug mb-3">
          {title}
        </h3>

        {/* Date & Location Details */}
        <div className="space-y-2 text-xs text-[#9E9EA7] mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{date}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              {time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{location}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#A0A0AA] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer / CTA */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-medium text-[#C5A059]">
          {seatsLeft}
        </span>

        <button
          type="button"
          onClick={() => onSelect && onSelect(event)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#FFF] transition-colors group/btn cursor-pointer"
        >
          <span>View Event</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
