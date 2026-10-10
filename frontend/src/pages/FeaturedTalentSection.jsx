import React, { useEffect, useState } from 'react';
import TalentCard from '../components/TalentCard';
import { FEATURED_TALENTS } from '../utils/mockData';
import {
  X,
  MapPin,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

/* ============================================================
   FONT / CUSTOM STYLES
============================================================ */

const FONT_STYLES = `
  .talent-section {
    font-family: 'Poppins', sans-serif;
  }

  .talent-serif {
    font-family: 'Poppins', sans-serif;
  }

  .talent-story-no-scroll {
    overflow: hidden !important;
    overscroll-behavior: none !important;
    touch-action: none;
  }

  .talent-story-tags {
    overflow: hidden !important;
    white-space: nowrap;
  }

  .talent-story * {
    scrollbar-width: none;
  }

  .talent-story *::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  @media (max-width: 639px) {
    .talent-story-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
    }
  }

  @media (max-width: 380px) {
    .talent-story-description {
      -webkit-line-clamp: 4;
    }
  }
`;

/* ============================================================
   CATEGORIES
============================================================ */

const CATEGORIES = [
  'All',
  'Art',
  'Technology',
  'Writing',
  'Design',
  'Photography',
  'Entrepreneurship',
];

/* ============================================================
   GET TALENT IMAGE
============================================================ */

const getTalentImage = (talent) => {
  if (!talent?.imageUrl) {
    return '/talents/placeholder.jpg';
  }

  return talent.imageUrl;
};

/* ============================================================
   NORMALIZE CATEGORY
============================================================ */

const normalizeCategory = (category) => {
  return String(category ?? '')
    .trim()
    .toLowerCase();
};

/* ============================================================
   CHECK CATEGORY MATCH
============================================================ */

const talentMatchesCategory = (talent, selectedCategory) => {
  if (!talent) return false;

  const normalizedSelectedCategory =
    normalizeCategory(selectedCategory);

  if (normalizedSelectedCategory === 'all') {
    return true;
  }

  const talentCategories = Array.isArray(talent.category)
    ? talent.category
    : [talent.category];

  return talentCategories.some(
    (category) =>
      normalizeCategory(category) ===
      normalizedSelectedCategory
  );
};

/* ============================================================
   CREATE UNIQUE TALENT KEY
============================================================ */

const getTalentUniqueKey = (talent) => {
  if (talent?.id !== undefined && talent?.id !== null) {
    return `id:${String(talent.id)}`;
  }

  return [
    normalizeCategory(talent?.name),
    normalizeCategory(talent?.title),
    talent?.imageUrl ?? '',
  ].join('|');
};

/* ============================================================
   COMPONENT
============================================================ */

export const FeaturedTalentSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTalentModal, setActiveTalentModal] = useState(null);

  /* ==========================================================
     FILTER + DEDUPLICATE TALENTS

     - "All" shows all unique talents.
     - Selecting "Art" shows ONLY Art talents.
     - Supports category as:
         category: "Art"
       OR
         category: ["Art", "Design"]
     - Matching is case-insensitive.
     - Duplicate records are removed.
  ========================================================== */

  const filteredTalents = (() => {
    const seen = new Set();

    return FEATURED_TALENTS.filter((talent) => {
      if (!talent) return false;

      // First filter by category.
      if (!talentMatchesCategory(talent, selectedCategory)) {
        return false;
      }

      // Then remove duplicate talents.
      const uniqueKey = getTalentUniqueKey(talent);

      if (seen.has(uniqueKey)) {
        return false;
      }

      seen.add(uniqueKey);

      return true;
    });
  })();

  /* ==========================================================
     LOCK COMPLETE PAGE SCROLL WHEN STORY IS OPEN
  ========================================================== */

  useEffect(() => {
    if (activeTalentModal) {
      document.documentElement.classList.add(
        'talent-story-no-scroll'
      );

      document.body.classList.add(
        'talent-story-no-scroll'
      );

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100dvh';
      document.documentElement.style.height = '100dvh';
    } else {
      document.documentElement.classList.remove(
        'talent-story-no-scroll'
      );

      document.body.classList.remove(
        'talent-story-no-scroll'
      );

      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    }

    return () => {
      document.documentElement.classList.remove(
        'talent-story-no-scroll'
      );

      document.body.classList.remove(
        'talent-story-no-scroll'
      );

      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, [activeTalentModal]);

  /* ==========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveTalentModal(null);
      }
    };

    if (activeTalentModal) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activeTalentModal]);

  return (
    <>
      <style>{FONT_STYLES}</style>

      {/* ======================================================
          MAIN TALENT SECTION
      ====================================================== */}

      <section
        id="talents"
        className="
          talent-section
          relative
          overflow-hidden
          py-16
          sm:py-20
          md:py-24
          lg:py-32
          bg-[#09090B]
          border-t
          border-[#D4AF37]/10
        "
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="
              absolute
              left-1/2
              top-[25%]
              -translate-x-1/2
              w-[280px]
              sm:w-[450px]
              lg:w-[650px]
              h-[280px]
              sm:h-[450px]
              lg:h-[650px]
              rounded-full
              bg-[#D4AF37]/[0.025]
              blur-[100px]
              lg:blur-[140px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.018]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '70px 70px',
            }}
          />
        </div>

        {/* CONTAINER */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-7
              lg:gap-10
              mb-10
              sm:mb-12
              lg:mb-14
            "
          >
            <div className="min-w-0 max-w-3xl">
              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-4
                  sm:mb-5
                "
              >
                <span
                  className="
                    w-7
                    sm:w-10
                    h-px
                    bg-[#D4AF37]/60
                  "
                />

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    sm:tracking-[0.3em]
                    text-[#D4AF37]
                    whitespace-nowrap
                  "
                >
                  Spotlight Directory
                </span>
              </div>

              <h2
                className="
                  talent-serif
                  text-[2rem]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-white
                "
              >
                Featured Emerging{' '}
                <span className="text-[#D4AF37]">
                  Talents.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  sm:mt-5
                  max-w-2xl
                  text-sm
                  sm:text-base
                  text-[#8E8E93]
                  leading-relaxed
                "
              >
                Meet the bold young creators, researchers,
                designers, and artists stepping into their
                rightful spotlight.
              </p>
            </div>

            {/* NOMINATE */}

            <a
              href="#submit"
              className="
                self-start
                lg:self-end
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                sm:px-6
                py-2.5
                sm:py-3
                rounded-full
                text-xs
                sm:text-sm
                font-semibold
                text-[#D4AF37]
                border
                border-[#D4AF37]/30
                bg-[#D4AF37]/[0.02]
                hover:bg-[#D4AF37]/10
                hover:border-[#D4AF37]/50
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              Nominate a Creator
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* CATEGORY FILTER */}

          <div
            className="
              relative
              mb-9
              sm:mb-10
            "
          >
            <div
              className="
                absolute
                right-0
                top-0
                bottom-3
                w-10
                bg-gradient-to-l
                from-[#09090B]
                to-transparent
                pointer-events-none
                z-10
                sm:hidden
              "
            />

            <div
              className="
                flex
                items-center
                gap-2
                overflow-x-auto
                pb-3
                no-scrollbar
                overscroll-x-contain
                flex-wrap
              "
              style={{
                scrollbarWidth: 'none',
              }}
            >
              {CATEGORIES.map((category) => {
                const active =
                  selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`
                      shrink-0
                      px-4
                      sm:px-5
                      py-2
                      sm:py-2.5
                      rounded-full
                      text-[11px]
                      sm:text-xs
                      md:text-sm
                      font-semibold
                      whitespace-nowrap
                      cursor-pointer
                      border
                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            bg-[#D4AF37]
                            text-[#09090B]
                            border-[#D4AF37]
                            shadow-[0_0_18px_rgba(212,175,55,0.25)]
                          `
                          : `
                            bg-[#121217]
                            text-gray-400
                            border-white/[0.06]
                            hover:border-[#D4AF37]/30
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* TALENT GRID */}

          {filteredTalents.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-5
                sm:gap-6
                lg:gap-7
              "
            >
              {filteredTalents.map((talent) => (
                <TalentCard
                  key={getTalentUniqueKey(talent)}
                  talent={{
                    ...talent,
                    imageUrl: getTalentImage(talent),
                  }}
                  onSelect={(selected) =>
                    setActiveTalentModal(selected)
                  }
                />
              ))}
            </div>
          ) : (
            <div
              className="
                py-16
                sm:py-20
                text-center
                rounded-3xl
                border
                border-white/[0.06]
                bg-[#111116]/60
              "
            >
              <Sparkles
                className="
                  mx-auto
                  w-8
                  h-8
                  text-[#D4AF37]
                  mb-4
                "
              />

              <h3
                className="
                  talent-serif
                  text-xl
                  sm:text-2xl
                  text-white
                "
              >
                New talent is coming.
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  sm:text-sm
                  text-[#77777F]
                "
              >
                We are currently discovering creators
                in this category.
              </p>
            </div>
          )}

          {/* BOTTOM INFORMATION */}

          <div
            className="
              mt-10
              sm:mt-14
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-3
            "
          >
            <p
              className="
                text-[10px]
                sm:text-xs
                text-[#6E6E76]
                leading-relaxed
              "
            >
              Showing{' '}
              <span className="text-[#D4AF37] font-semibold">
                {filteredTalents.length}
              </span>{' '}
              of{' '}
              <span className="text-white">
                {FEATURED_TALENTS.length}
              </span>{' '}
              spotlight creators.
            </p>

            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                sm:text-[10px]
                uppercase
                tracking-[0.16em]
                sm:tracking-[0.22em]
                text-[#62626A]
                font-semibold
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#D4AF37]
                "
              />

              Discovering the next generation
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FULL SCREEN TALENT STORY
      ====================================================== */}

      {activeTalentModal && (
        <div
          className="
            talent-story
            fixed
            inset-0
            z-[100]
            w-screen
            h-[100dvh]
            min-h-[100dvh]
            max-h-[100dvh]
            overflow-hidden
            bg-[#070708]
          "
        >
          <div
            className="
              relative
              w-full
              h-full
              min-h-0
              max-h-[100dvh]
              overflow-hidden
              bg-[#08090B]
            "
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() =>
                setActiveTalentModal(null)
              }
              className="
                fixed
                top-3
                right-3
                sm:top-5
                sm:right-5
                lg:top-6
                lg:right-7
                z-[300]
                w-9
                h-9
                sm:w-10
                sm:h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-black/75
                backdrop-blur-xl
                border
                border-white/10
                text-gray-300
                hover:text-white
                hover:border-[#D4AF37]/50
                hover:bg-black/90
                transition-all
                duration-300
              "
              aria-label="Close talent story"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* MAIN LAYOUT */}

            <div
              className="
                w-full
                h-full
                min-h-0
                grid
                grid-cols-1
                lg:grid-cols-2
                overflow-hidden
              "
            >
              {/* LEFT IMAGE */}

              <div
                className="
                  relative
                  min-w-0
                  min-h-0
                  h-[43vh]
                  lg:h-full
                  bg-[#050506]
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  p-3
                  sm:p-5
                  md:p-7
                  lg:p-10
                  xl:p-14
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_60%)]
                  "
                />

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    sm:top-7
                    sm:left-7
                    md:top-8
                    md:left-8
                    lg:top-10
                    lg:left-10
                    w-16
                    sm:w-24
                    md:w-28
                    lg:w-32
                    h-16
                    sm:h-24
                    md:h-28
                    lg:h-32
                    border-t
                    border-l
                    border-[#D4AF37]/45
                    rounded-tl-[25px]
                    pointer-events-none
                    hidden
                    md:flex
                    transition-all
                    duration-150
                  "
                />

                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    sm:bottom-7
                    sm:right-7
                    md:bottom-8
                    md:right-8
                    lg:bottom-10
                    lg:right-10
                    w-16
                    sm:w-24
                    md:w-28
                    lg:w-32
                    h-16
                    sm:h-24
                    md:h-28
                    lg:h-32
                    border-b
                    border-r
                    border-[#D4AF37]/45
                    rounded-br-[25px]
                    pointer-events-none
                    hidden
                    md:flex
                    transition-all
                    duration-150
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    w-full
                    h-full
                    max-w-[760px]
                    max-h-[37vh]
                    lg:max-h-[86vh]
                    rounded-[20px]
                    sm:rounded-[25px]
                    lg:rounded-[30px]
                    border
                    border-[#D4AF37]/25
                    bg-[#09090B]
                    p-2
                    sm:p-3
                    md:p-4
                    lg:p-5
                    shadow-[0_30px_100px_rgba(0,0,0,0.7)]
                  "
                >
                  <div
                    className="
                      relative
                      w-full
                      h-full
                      rounded-[15px]
                      sm:rounded-[19px]
                      lg:rounded-[23px]
                      overflow-hidden
                      bg-black
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={getTalentImage(activeTalentModal)}
                      alt={activeTalentModal.name}
                      className="
                        w-full
                        h-full
                        object-contain
                        select-none
                      "
                      loading="eager"
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        pointer-events-none
                        bg-gradient-to-t
                        from-black/15
                        via-transparent
                        to-black/10
                      "
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}

              <div
                className="
                  relative
                  min-w-0
                  min-h-0
                  h-[57vh]
                  lg:h-full
                  flex
                  items-center
                  overflow-hidden
                  bg-[#0B0B0F]
                  border-t
                  lg:border-t-0
                  lg:border-l
                  border-white/[0.07]
                  px-5
                  py-5
                  sm:px-8
                  sm:py-7
                  md:px-10
                  md:py-9
                  lg:px-10
                  lg:py-10
                  xl:px-16
                  2xl:px-20
                "
              >
                <div
                  className="
                    absolute
                    right-[-180px]
                    top-[-180px]
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-[#D4AF37]/[0.04]
                    blur-[110px]
                    pointer-events-none
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    w-full
                    max-w-2xl
                    min-w-0
                    max-h-full
                    overflow-hidden
                  "
                >
                  {/* MEET */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      mb-3
                      sm:mb-4
                      lg:mb-5
                    "
                  >
                    <span
                      className="
                        w-7
                        sm:w-10
                        lg:w-12
                        h-px
                        bg-[#D4AF37]
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-[#D4AF37]
                        font-bold
                      "
                    >
                      Meet
                    </span>
                  </div>

                  {/* NAME */}

                  <h1
                    className="
                      talent-serif
                      text-[2rem]
                      sm:text-4xl
                      md:text-5xl
                      lg:text-5xl
                      xl:text-6xl
                      leading-[0.98]
                      tracking-[-0.04em]
                      font-semibold
                      text-white
                      break-words
                    "
                  >
                    {activeTalentModal.name}
                  </h1>

                  {/* TITLE + LOCATION */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-2
                      gap-y-1
                      mt-3
                      sm:mt-4
                      text-[11px]
                      sm:text-sm
                      text-[#F3E5AB]
                    "
                  >
                    <span>
                      {activeTalentModal.title}
                    </span>

                    {activeTalentModal.location && (
                      <>
                        <span className="text-white/25">
                          ·
                        </span>

                        <MapPin
                          className="
                            w-3
                            h-3
                            sm:w-4
                            sm:h-4
                            text-[#D4AF37]
                            shrink-0
                          "
                        />

                        <span>
                          {activeTalentModal.location}
                        </span>
                      </>
                    )}
                  </div>

                  {/* DIVIDER */}

                  <div
                    className="
                      mt-4
                      sm:mt-5
                      lg:mt-6
                      w-full
                      h-px
                      bg-gradient-to-r
                      from-[#D4AF37]/45
                      via-[#D4AF37]/15
                      to-transparent
                    "
                  />

                  {/* DESCRIPTION */}

                  <p
                    className="
                      talent-story-description
                      mt-4
                      sm:mt-5
                      lg:mt-6
                      text-xs
                      sm:text-sm
                      lg:text-[15px]
                      xl:text-base
                      text-[#A0A0AA]
                      leading-[1.7]
                      sm:leading-[1.8]
                      lg:leading-[1.85]
                    "
                  >
                    {activeTalentModal.shortDescription}
                  </p>

                  {/* TAGS */}

                  {activeTalentModal.tags?.length > 0 && (
                    <div
                      className="
                        mt-5
                        sm:mt-6
                        lg:mt-7
                        min-w-0
                      "
                    >
                      <div
                        className="
                          text-[8px]
                          sm:text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#6F6F78]
                          font-semibold
                          mb-2
                          sm:mb-3
                        "
                      >
                        Specialties
                      </div>

                      <div
                        className="
                          talent-story-tags
                          flex
                          items-center
                          gap-2
                          w-full
                          max-w-full
                        "
                      >
                        {activeTalentModal.tags.map(
                          (tag, index) => (
                            <span
                              key={index}
                              className="
                                shrink-0
                                inline-flex
                                items-center
                                px-2.5
                                sm:px-3
                                py-1.5
                                rounded-full
                                bg-white/[0.035]
                                border
                                border-[#D4AF37]/20
                                text-[8px]
                                sm:text-[9px]
                                lg:text-[10px]
                                text-[#E5C378]
                                font-medium
                              "
                            >
                              #{tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* FOOTER */}

                  <div
                    className="
                      mt-5
                      sm:mt-6
                      lg:mt-7
                      pt-4
                      sm:pt-5
                      border-t
                      border-white/[0.08]
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[9px]
                        sm:text-[10px]
                        text-gray-500
                        min-w-0
                      "
                    >
                      <CheckCircle2
                        className="
                          w-3.5
                          h-3.5
                          sm:w-4
                          sm:h-4
                          text-[#D4AF37]
                          shrink-0
                        "
                      />

                      <span className="truncate">
                        Profile verified by Fikr-e-Nau.
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveTalentModal(null)
                      }
                      className="
                        shrink-0
                        inline-flex
                        items-center
                        justify-center
                        px-5
                        sm:px-6
                        py-2.5
                        sm:py-3
                        rounded-full
                        text-[10px]
                        sm:text-xs
                        font-bold
                        bg-[#D4AF37]
                        text-black
                        hover:bg-[#E6C25B]
                        active:scale-[0.98]
                        transition-all
                        duration-200
                      "
                    >
                      Close Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedTalentSection;

