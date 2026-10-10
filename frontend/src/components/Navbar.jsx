
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  LogIn,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

export const Navbar = () => {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when viewport becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent page scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Discover Talent", path: "/featuredtalents" },
    { name: "Stories", path: "/stories" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/#contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out

          ${
            isScrolled
              ? `
                bg-[#09090B]/85
                backdrop-blur-2xl
                border-b border-[#D4AF37]/15
                shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              `
              : `
                bg-transparent
                border-b border-transparent
              `
          }
        `}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex items-center justify-between
              transition-all duration-500
              ${isScrolled ? "h-18" : "h-22"}
            `}
          >
            {/* =====================================================
                LOGO
            ===================================================== */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                group relative
                flex items-center
                shrink-0
                focus-visible:outline-none
              "
              aria-label="Fikr-e-Nau Home"
            >
              <div
                className="
                  relative
                  flex items-center justify-center
                  rounded-xl
                  overflow-hidden
                  transition-all duration-500
                  ease-out
                  group-hover:scale-[1.03]
                  group-hover:-translate-y-0.5
                "
              >
                <img
                  src="/logo.jpeg"
                  alt="Fikr-e-Nau"
                  className="
                    h-12 w-12
                    sm:h-13 sm:w-13
                    lg:h-20 lg:w-20
                    object-contain
                    rounded-xl
                  "
                />

                {/* Gold glow */}
                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                    shadow-[inset_0_0_24px_rgba(212,175,55,0.25)]
                  "
                />
              </div>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <nav
              className="
                hidden lg:flex
                items-center
                gap-1
                xl:gap-2
              "
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
                    navbar-link
                    group
                    relative

                    flex
                    items-center
                    justify-center

                    px-3.5
                    xl:px-4

                    py-2.5

                    rounded-xl

                    text-[13px]
                    xl:text-sm

                    font-semibold
                    tracking-[0.01em]

                    text-[#BDBDC5]

                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    hover:-translate-y-[1px]
                    hover:text-[#F3E5AB]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#D4AF37]/50
                  "
                >
                  {/* =================================================
                      HOVER BACKGROUND
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-xl

                      bg-gradient-to-r
                      from-[#D4AF37]/0
                      via-[#D4AF37]/[0.065]
                      to-[#D4AF37]/0

                      opacity-0
                      scale-[0.92]

                      transition-all
                      duration-500
                      ease-out

                      group-hover:opacity-100
                      group-hover:scale-100
                    "
                  />

                  {/* =================================================
                      SOFT OUTER GLOW
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-xl

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100

                      shadow-[0_0_24px_rgba(212,175,55,0.10)]
                    "
                  />

                  {/* =================================================
                      TEXT
                  ================================================= */}

                  <span
                    className="
                      relative
                      z-10

                      transition-all
                      duration-500
                      ease-out

                      group-hover:tracking-[0.025em]
                    "
                  >
                    {link.name}
                  </span>

                  {/* =================================================
                      PREMIUM GOLD UNDERLINE
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none
                      absolute

                      left-1/2
                      bottom-[5px]

                      h-[1.5px]

                      w-0
                      -translate-x-1/2

                      rounded-full

                      bg-gradient-to-r
                      from-transparent
                      via-[#D4AF37]
                      to-transparent

                      opacity-0

                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover:w-[58%]
                      group-hover:opacity-100
                    "
                  />

                  {/* =================================================
                      UNDERLINE GLOW
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none
                      absolute

                      left-1/2
                      bottom-[4px]

                      h-[4px]
                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-[#D4AF37]/30
                      blur-[5px]

                      opacity-0

                      transition-all
                      duration-500

                      group-hover:w-[45%]
                      group-hover:opacity-100
                    "
                  />

                  {/* =================================================
                      SMALL GOLD DOT
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none
                      absolute

                      left-1/2
                      -bottom-[2px]

                      h-1
                      w-1

                      -translate-x-1/2
                      translate-y-1

                      rounded-full

                      bg-[#E6C25B]

                      opacity-0
                      scale-0

                      shadow-[0_0_8px_rgba(212,175,55,0.8)]

                      transition-all
                      duration-500
                      ease-out

                      group-hover:opacity-100
                      group-hover:scale-100
                      group-hover:translate-y-0
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* =====================================================
                DESKTOP ACTIONS
            ===================================================== */}

            <div
              className="
                hidden lg:flex
                items-center
                gap-2
                xl:gap-3
              "
            >
              {/* Login */}
              <Link
                to="/login"
                className="
                  group
                  flex items-center gap-2

                  px-4 py-2.5
                  rounded-lg

                  text-sm
                  font-semibold
                  text-[#C8C8CF]

                  transition-all
                  duration-300

                  hover:text-white
                  hover:bg-white/[0.035]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#D4AF37]/50
                "
              >
                <LogIn
                  className="
                    h-4 w-4
                    text-[#D4AF37]

                    transition-transform
                    duration-300

                    group-hover:-translate-x-0.5
                  "
                />

                <span>Login</span>
              </Link>

              {/* Sign Up */}
              <Link
                to="/signup"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  overflow-hidden
                  rounded-full

                  px-5
                  xl:px-6

                  py-2.5

                  text-xs
                  xl:text-sm

                  font-bold
                  text-[#09090B]

                  bg-gradient-to-r
                  from-[#E6C25B]
                  via-[#D4AF37]
                  to-[#B88E28]

                  shadow-[0_0_18px_rgba(212,175,55,0.22)]

                  transition-all
                  duration-300

                  hover:shadow-[0_0_28px_rgba(212,175,55,0.38)]
                  hover:-translate-y-0.5

                  active:translate-y-0
                  active:scale-[0.98]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F3E5AB]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#09090B]
                "
              >
                {/* Shine animation */}
                <span
                  className="
                    pointer-events-none
                    absolute inset-0

                    -translate-x-full

                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent

                    transition-transform
                    duration-700

                    group-hover:translate-x-full
                  "
                />

                <Sparkles
                  className="
                    relative z-10
                    h-3.5 w-3.5

                    transition-transform
                    duration-300

                    group-hover:rotate-12
                  "
                />

                <span className="relative z-10">Sign Up</span>

                <ArrowUpRight
                  className="
                    relative z-10
                    h-3.5 w-3.5

                    opacity-60

                    transition-all
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>

            {/* =====================================================
                MOBILE ACTIONS
            ===================================================== */}

            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Join button */}
              <Link
                to="/signup"
                className="
                  hidden sm:inline-flex
                  items-center
                  justify-center

                  rounded-full

                  px-4
                  py-2

                  text-xs
                  font-bold
                  text-[#09090B]

                  bg-[#D4AF37]

                  shadow-[0_0_14px_rgba(212,175,55,0.18)]

                  transition-all
                  duration-300

                  hover:bg-[#E6C25B]
                  hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]

                  active:scale-95
                "
              >
                Join
              </Link>

              {/* Menu button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="
                  relative
                  flex
                  items-center
                  justify-center

                  h-11
                  w-11

                  sm:h-12
                  sm:w-12

                  rounded-xl

                  border
                  border-[#D4AF37]/25

                  bg-white/[0.025]
                  backdrop-blur-md

                  text-[#E6D280]

                  transition-all
                  duration-300

                  hover:border-[#D4AF37]/60
                  hover:bg-[#D4AF37]/[0.07]
                  hover:text-[#FFFFFF]

                  active:scale-95

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#D4AF37]/50
                "
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden

          bg-black/70
          backdrop-blur-sm

          transition-opacity
          duration-500

          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <aside
        id="mobile-navigation"
        className={`
          fixed
          top-0
          right-0
          z-50

          h-[100dvh]
          w-full
          max-w-[390px]

          lg:hidden

          bg-[#0C0C10]

          border-l
          border-[#D4AF37]/15

          shadow-[-20px_0_60px_rgba(0,0,0,0.55)]

          transition-transform
          duration-500

          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex h-full flex-col">
          {/* Mobile drawer header */}
          <div
            className="
              flex
              items-center
              justify-between

              px-5
              sm:px-6

              py-5

              border-b
              border-white/[0.07]
            "
          >
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.jpeg"
                alt="Fikr-e-Nau"
                className="
                  h-11
                  w-11

                  rounded-xl
                  object-contain
                "
              />

              <div className="flex flex-col">
                <span
                  className="
                    font-serif
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Fikr-e-Nau
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.22em]
                    text-[#D4AF37]/70
                  "
                >
                  New Thought
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="
                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-xl

                text-[#888891]

                transition-all
                duration-300

                hover:bg-white/[0.05]
                hover:text-white
              "
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile navigation */}
          <nav
            className="
              flex-1
              overflow-y-auto

              px-4
              sm:px-5

              py-7
            "
            aria-label="Mobile navigation"
          >
            <div className="mb-5 px-2">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D4AF37]/60
                "
              >
                Explore
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className="
                    group
                    relative

                    flex
                    items-center
                    justify-between

                    overflow-hidden

                    rounded-xl

                    px-4
                    py-4

                    text-[15px]
                    font-semibold
                    text-[#D5D5DC]

                    transition-all
                    duration-300

                    hover:bg-[#D4AF37]/[0.06]
                    hover:text-[#F3E5AB]
                    hover:translate-x-1
                  "
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 35}ms`
                      : "0ms",
                  }}
                >
                  {/* Left gold indicator */}
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2

                      h-0
                      w-[2px]

                      -translate-y-1/2

                      rounded-full

                      bg-[#D4AF37]

                      transition-all
                      duration-300

                      group-hover:h-7
                    "
                  />

                  <span className="relative z-10">{link.name}</span>

                  <span
                    className="
                      flex
                      h-8
                      w-8

                      items-center
                      justify-center

                      rounded-lg

                      bg-white/[0.025]

                      text-[#777781]

                      transition-all
                      duration-300

                      group-hover:bg-[#D4AF37]/10
                      group-hover:text-[#D4AF37]
                      group-hover:translate-x-0.5
                    "
                  >
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile footer */}
          <div
            className="
              border-t
              border-white/[0.07]

              px-5
              sm:px-6

              py-5

              pb-[max(1.25rem,env(safe-area-inset-bottom))]
            "
          >
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="
                  flex
                  w-full

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  border
                  border-[#D4AF37]/25

                  bg-white/[0.02]

                  py-3.5

                  text-sm
                  font-semibold
                  text-[#D5D5DC]

                  transition-all
                  duration-300

                  hover:border-[#D4AF37]/60
                  hover:bg-[#D4AF37]/[0.05]
                  hover:text-white
                "
              >
                <LogIn className="h-4 w-4 text-[#D4AF37]" />
                Login to Account
              </Link>

              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="
                  group
                  flex
                  w-full

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  py-3.5

                  text-sm
                  font-bold
                  text-[#09090B]

                  bg-gradient-to-r
                  from-[#E6C25B]
                  via-[#D4AF37]
                  to-[#B88E28]

                  shadow-[0_0_20px_rgba(212,175,55,0.25)]

                  transition-all
                  duration-300

                  hover:shadow-[0_0_28px_rgba(212,175,55,0.4)]

                  active:scale-[0.98]
                "
              >
                <Sparkles className="h-4 w-4" />
                Sign Up as Talent
              </Link>
            </div>

            <p
              className="
                mt-5

                text-center

                font-serif
                text-sm
                italic

                text-[#D4AF37]/60
              "
            >
              Your talent deserves to be seen.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
