/**
 * Reusable Editorial Section Heading Component
 * Enforces uniform typographic scale, refined gold badge accent, and responsive spacing.
 */
export const SectionHeading = ({
  badge = '',
  title = '',
  subtitle = '',
  align = 'left', // 'left' | 'center'
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {/* Refined Gold Category Badge */}
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#E5C378] text-xs font-semibold tracking-widest uppercase mb-4 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {/* Refined Editorial Serif Heading */}
      {title && (
        <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          {title}
        </h2>
      )}

      {/* Editorial Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-[#C2C2CB] font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
