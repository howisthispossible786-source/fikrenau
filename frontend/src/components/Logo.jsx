import { Link } from 'react-router-dom';

/**
 * Official Fikr-e-Nau Brand Logo Component
 * Combines the elegant golden emblem (symbolizing 'New Thought' & rising talent)
 * with the refined editorial typography.
 * Supports image overrides if an official raster asset is supplied at /logo.png.
 */
export const Logo = ({ className = '', showWordmark = true, size = 'default' }) => {
  const sizeClasses = {
    small: 'h-8',
    default: 'h-10',
    large: 'h-14',
  }[size] || 'h-10';

  return (
    <Link 
      to="/" 
      className={`group flex items-center gap-3 select-none transition-transform duration-300 active:scale-95 ${className}`}
      aria-label="Fikr-e-Nau Home"
    >
      {/* Luxury Gold Monogram Emblem */}
      {/* <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-xl blur-md group-hover:bg-[#D4AF37]/35 transition-all duration-300 pointer-events-none" />
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClasses} aspect-square relative z-10 filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105`}
        >
          <defs>
            <linearGradient id="fnGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF7EE" />
              <stop offset="45%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E8043" />
            </linearGradient>
            <linearGradient id="fnRingGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
            </linearGradient>
          </defs> */}

          {/* Exterior Geometric Frame
          <rect 
            x="8" 
            y="8" 
            width="84" 
            height="84" 
            rx="20" 
            stroke="url(#fnRingGrad)" 
            strokeWidth="2.5" 
            fill="#0D0D11"
            className="transition-all duration-300 group-hover:stroke-[#D4AF37]"
          />

          {/* Subtle Inner Diamond Guide */}
          {/* <rect 
            x="50" 
            y="16" 
            width="48" 
            height="48" 
            rx="8" 
            transform="rotate(45 50 16)" 
            stroke="rgba(212, 175, 55, 0.18)" 
            strokeWidth="1.2" 
            fill="none" 
          /> */}

          {/* Central Calligraphic Monogram 'F' & 'N' Modern Fusion */}
          {/* <path 
            d="M32 68V32C32 29.79 33.79 28 36 28H62C64.21 28 66 29.79 66 32V35C66 37.21 64.21 39 62 39H44V47H58C60.21 47 62 48.79 62 51V52C62 54.21 60.21 56 58 56H44V68C44 70.21 42.21 72 40 72H36C33.79 72 32 70.21 32 68Z" 
            fill="url(#fnGoldGrad)" 
          /> */}

          {/* Radiant Star of New Thought / Innovation */}
          {/* <path 
            d="M68 28L69.8 33.2L75 35L69.8 36.8L68 42L66.2 36.8L61 35L66.2 33.2L68 28Z" 
            fill="#FFF" 
            className="animate-pulse"
          />
          <circle cx="68" cy="35" r="7" fill="#D4AF37" fillOpacity="0.25" />
        </svg>
      </div>  */}

      <img src=".logo.jpeg" alt="" />

      {/* Typography Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#F3E5AB] transition-colors leading-tight">
            FIKR<span className="text-[#D4AF37]">-</span>E<span className="text-[#D4AF37]">-</span>NAU
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/90 font-medium">
            Youth &middot; Talent &middot; Ideas
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
