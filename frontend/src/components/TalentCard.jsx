import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const TalentCard = ({ talent, onSelect }) => {
  const {
    name,
    category,
    title,
    shortDescription,
    location,
    imageUrl,
    tags = [],
  } = talent;

  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#121216] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.8),0_0_24px_rgba(212,175,55,0.12)]"
    >
      {/* Top Image Preview with gradient mask */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A1A22]">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/20" />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#09090B]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#F3E5AB] text-xs font-medium">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>{category}</span>
        </div>

        {/* Location badge */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1 text-xs text-[#C5A059] bg-[#09090B]/85 backdrop-blur-sm px-2.5 py-0.5 rounded-md">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-serif-heading text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug">
            {name}
          </h3>
          <p className="text-xs uppercase tracking-wider text-[#D4AF37]/90 font-medium mt-0.5">
            {title}
          </p>
          <p className="text-sm text-[#A0A0AA] mt-3 line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Tags and Action Button */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 2).map((t, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]"
              >
                #{t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onSelect && onSelect(talent)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] transition-colors group/btn cursor-pointer"
          >
            <span>View Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
