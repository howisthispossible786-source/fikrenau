import { Calendar, User, ArrowUpRight } from 'lucide-react';

export const StoryCard = ({ story, onRead }) => {
  const {
    title,
    category,
    excerpt,
    author,
    date,
    readTime,
    coverImage,
    featured,
  } = story;

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#111116] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.8)] ${
        featured ? 'lg:col-span-2 lg:flex-row' : ''
      }`}
    >
      {/* Cover Image */}
      <div
        className={`relative overflow-hidden bg-[#16161E] ${
          featured ? 'lg:w-1/2 aspect-video lg:aspect-auto' : 'aspect-[16/10]'
        }`}
      >
        <img
          src={coverImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent lg:hidden" />

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#09090B]/85 backdrop-blur-md text-[#E5C378] border border-[#D4AF37]/30">
            {category}
          </span>
        </div>
      </div>

      {/* Story Content */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between ${
          featured ? 'lg:w-1/2' : 'flex-1'
        }`}
      >
        <div>
          {/* Metadata info */}
          <div className="flex items-center gap-3 text-xs text-[#8A8A93] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              {date}
            </span>
            <span>&bull;</span>
            <span>{readTime}</span>
          </div>

          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug">
            {title}
          </h3>

          <p className="text-sm text-[#A0A0AA] mt-3 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Footer info: Author and Read More */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#C5A059]">
            <User className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-medium text-gray-300">{author}</span>
          </div>

          <button
            type="button"
            onClick={() => onRead && onRead(story)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#FFF] transition-colors cursor-pointer"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;
