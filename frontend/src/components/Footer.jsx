import React from 'react';
import {
  MessageCircle,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

import { COMMUNITY_LINKS } from '../utils/mockData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: COMMUNITY_LINKS.instagram,
      icon: FaInstagram,
      hover:
        'hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:shadow-[0_8px_25px_rgba(225,48,108,0.15)]',
    },
    {
      name: 'Facebook',
      href: COMMUNITY_LINKS.facebook,
      icon: FaFacebookF,
      hover:
        'hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:shadow-[0_8px_25px_rgba(24,119,242,0.15)]',
    },
    {
      name: 'LinkedIn',
      href: COMMUNITY_LINKS.linkedin,
      icon: FaLinkedinIn,
      hover:
        'hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:shadow-[0_8px_25px_rgba(10,102,194,0.15)]',
    },
    {
      name: 'TikTok',
      href: COMMUNITY_LINKS.tiktok,
      icon: FaTiktok,
      hover:
        'hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_8px_25px_rgba(255,255,255,0.12)]',
    },
  ];

  return (
    <footer
      className="
        relative
        z-10
        overflow-hidden
        bg-[#070708]/90
        backdrop-blur-md
        border-t
        border-[#D4AF37]/15
      "
    >

      {/* =====================================================
          BACKGROUND AMBIENCE
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Top Gold Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        {/* Bottom Left Glow */}
        <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[#D4AF37]/[0.025] blur-[100px]" />

        {/* Right Glow */}
        <div className="absolute top-1/2 -right-32 w-64 h-64 rounded-full bg-[#D4AF37]/[0.025] blur-[100px]" />

      </div>

      {/* =====================================================
          GOLD TOP LINE
      ====================================================== */}

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* =================================================
            MAIN FOOTER
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 sm:py-20">

          {/* =================================================
              BRAND COLUMN
          ================================================== */}

          <div className="lg:col-span-5">

            {/* Real Logo From Public Folder */}

            <a
              href="#hero"
              className="inline-flex group"
              aria-label="Fikr-e-Nau Home"
            >
              <img
                src="/logo.jpeg"
                alt="Fikr-e-Nau"
                className="
                  w-28
                  sm:w-32
                  h-auto
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-[1.04]
                  group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]
                "
              />
            </a>

            {/* Mission */}

            <p className="mt-7 max-w-md text-sm sm:text-base text-[#9E9EA7] leading-7">
              Fikr-e-Nau is a youth-focused platform dedicated to discovering,
              celebrating, and giving visibility to hidden talents, creative
              minds, and emerging innovators.
            </p>

            {/* Tagline */}

            <p className="mt-5 text-xs tracking-[0.12em] text-[#D4AF37] font-semibold">
              Your talent deserves to be seen.
            </p>

            {/* =================================================
                WHATSAPP COMMUNITY
            ================================================== */}

            <a
              href={COMMUNITY_LINKS.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-4
                mt-8
                px-5
                py-4
                rounded-2xl
                bg-[#0B1710]
                border
                border-[#25D366]/20
                hover:border-[#25D366]/60
                hover:bg-[#0E2115]
                transition-all
                duration-500
                overflow-hidden
              "
            >

              {/* Hover Background */}

              <span
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-r
                  from-[#25D366]/5
                  to-transparent
                "
              />

              {/* Icon */}

              <span
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  bg-[#25D366]/10
                  text-[#25D366]
                  group-hover:bg-[#25D366]/20
                  group-hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <MessageCircle className="w-5 h-5" />
              </span>

              {/* Text */}

              <span className="relative">

                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#6EE7A0] mb-1">
                  Official Community
                </span>

                <span className="flex items-center gap-2 text-sm font-semibold text-white">
                  Join our WhatsApp Channel

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      text-[#25D366]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </span>

              </span>
            </a>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div className="lg:col-span-2">

            <h3 className="text-xs tracking-[0.12em] text-[#D4AF37] font-bold mb-6">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-[#96969F]">

              {[
                ['#hero', 'Home'],
                ['#about', 'About Us'],
                ['#what-we-do', 'What We Do'],
                ['#philosophy', 'Our Philosophy'],
                ['#faq', 'FAQ'],
              ].map(([href, label]) => (
                <li key={label}>

                  <a
                    href={href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >

                    <span
                      className="
                        w-0
                        h-px
                        bg-[#D4AF37]
                        group-hover:w-4
                        transition-all
                        duration-300
                      "
                    />

                    {label}

                  </a>

                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              DISCOVER
          ================================================== */}

          <div className="lg:col-span-2">

            <h3 className="text-xs tracking-[0.12em] text-[#D4AF37] font-bold mb-6">
              Discover
            </h3>

            <ul className="space-y-4 text-sm text-[#96969F]">

              {[
                ['#talents', 'Featured Talents'],
                ['#stories', 'Creator Stories'],
                ['#events', 'Upcoming Events'],
                ['#submit', 'Submit Your Talent'],
              ].map(([href, label]) => (
                <li key={label}>

                  <a
                    href={href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >

                    <span
                      className="
                        w-0
                        h-px
                        bg-[#D4AF37]
                        group-hover:w-4
                        transition-all
                        duration-300
                      "
                    />

                    {label}

                  </a>

                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              CONTACT + SOCIAL
          ================================================== */}

          <div className="lg:col-span-3">

            <h3 className="text-xs tracking-[0.12em] text-[#D4AF37] font-bold mb-6">
              Connect
            </h3>

            {/* Email */}

            <a
              href={`mailto:${COMMUNITY_LINKS.contactEmail}`}
              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                text-[#96969F]
                hover:text-white
                transition-colors
                duration-300
              "
            >

              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  rounded-xl
                  border
                  border-white/10
                  text-[#D4AF37]
                  group-hover:border-[#D4AF37]/50
                  group-hover:bg-[#D4AF37]/10
                  transition-all
                  duration-300
                "
              >
                <Mail className="w-4 h-4" />
              </span>

              <span>
                {COMMUNITY_LINKS.contactEmail}
              </span>

            </a>

            {/* Description */}

            <p className="mt-5 max-w-xs text-xs text-[#666670] leading-6">
              For youth inquiries, talent submissions, collaborations,
              partnerships, and editorial opportunities.
            </p>

            {/* =================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="mt-7">

              <p className="text-xs tracking-[0.12em] text-[#777781] mb-3">
                Follow Fikr-e-Nau
              </p>

              <div className="flex items-center gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`
                        group
                        relative
                        flex
                        items-center
                        justify-center
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-white/10
                        text-[#8A8A94]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        ${social.hover}
                      `}
                    >

                      <Icon
                        className="
                          w-[17px]
                          h-[17px]
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />

                      {/* Tooltip */}

                      <span
                        className="
                          absolute
                          -top-9
                          left-1/2
                          -translate-x-1/2
                          whitespace-nowrap
                          px-2
                          py-1
                          rounded-md
                          bg-[#151519]
                          border
                          border-white/10
                          text-[10px]
                          text-white
                          opacity-0
                          translate-y-1
                          pointer-events-none
                          group-hover:opacity-100
                          group-hover:translate-y-0
                          transition-all
                          duration-200
                        "
                      >
                        {social.name}
                      </span>

                    </a>
                  );
                })}

              </div>

            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================== */}

        <div className="relative py-7 border-t border-white/[0.08]">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Copyright */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                md:justify-start
                gap-x-3
                gap-y-2
                text-xs
                text-[#666670]
              "
            >

              <span>
                © {currentYear} Fikr-e-Nau
              </span>

              <span className="text-[#D4AF37]/50">
                •
              </span>

              <span className="text-[#D4AF37]/70">
                Youth Innovation Platform
              </span>

            </div>

            {/* Legal */}

            <div className="flex items-center gap-6 text-xs text-[#666670]">

              <a
                href="#privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </a>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
