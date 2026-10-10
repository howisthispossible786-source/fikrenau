import React from 'react';
import { MessageCircle, Bell, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbCtv6Z7z4kfk8PzRj2A";

export const WhatsAppCommunityCTA = ({
  variant = "banner",
  className = "",
  title = "Join the Fikr-e-Nau Community",
  subtitle = "Stay connected with Fikr-e-Nau on WhatsApp for live creator spotlights, open submission calls, and exhibition invitations."
}) => {
  if (variant === "card") {
    return (
      <div className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#121218] via-[#0E1512] to-[#121218] border border-[#25D366]/25 hover:border-[#25D366]/50 shadow-[0_12px_32px_rgba(0,0,0,0.8),0_0_24px_rgba(37,211,102,0.08)] transition-all duration-300 ${className}`}>
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#25D366]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-start justify-between h-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold uppercase tracking-wider mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Official WhatsApp Channel</span>
            </div>

            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white leading-snug">
              {title}
            </h3>

            <p className="mt-2 text-sm text-[#A0A0AA] leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="mt-6 w-full">
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_28px_rgba(37,211,102,0.5)] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Stay Connected with Fikr-e-Nau</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
            <p className="mt-2 text-center text-[11px] text-gray-500">
              One-way broadcast &middot; No spam &middot; Instant alerts
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default Banner Variant
  return (
    <section className={`relative my-12 sm:my-16 overflow-hidden rounded-3xl bg-gradient-to-r from-[#101311] via-[#141A15] to-[#101311] border border-[#25D366]/25 shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(37,211,102,0.1)] p-8 sm:p-12 ${className}`}>
      {/* Decorative emerald & gold light glow */}
      <div className="absolute top-0 right-1/4 w-96 h-40 bg-[#25D366]/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-40 bg-[#D4AF37]/10 blur-[90px] pointer-events-none" />

      {/* Top green edge highlight */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#25D366]/50 to-transparent" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/35 text-[#25D366] text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
            <span>Official Community Channel</span>
          </div>

          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#B0B8B2] leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Weekly creator highlights
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5 text-[#25D366]" />
              Direct open call deadlines
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              Community masterclasses
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Join WhatsApp Channel</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCommunityCTA;
