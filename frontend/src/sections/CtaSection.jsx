import React, { useState } from 'react';
import { Sparkles, ArrowRight, Compass, Check, X, Upload } from 'lucide-react';

export const CtaSection = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: 'Art',
    portfolioUrl: '',
    statement: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsSubmitModalOpen(false);
      setFormData({
        fullName: '',
        email: '',
        category: 'Art',
        portfolioUrl: '',
        statement: '',
      });
    }, 2200);
  };

  return (
    <section id="submit" className="relative py-24 sm:py-32 bg-transparent border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background Decorative Gold Ambient Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_65%)] blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 md:p-16 bg-[#131319]/85 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.12)] text-center relative overflow-hidden">
          
          {/* Subtle Top Golden Rim Accent */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#E5C378] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Open Call For Creators</span>
          </div>

          {/* Main Message as specified */}
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Have a talent worth <br className="hidden sm:block" />
            <span className="text-gold-gradient italic font-normal">
              discovering?
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#C5C5D0] max-w-xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Step onto a platform built solely to celebrate your craft. Free submissions, dedicated editorial curation, and connection to opportunities.
          </p>

          {/* Dual Action Buttons as requested */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#09090B] bg-gradient-to-r from-[#E6C25B] via-[#D4AF37] to-[#B88E28] hover:from-[#F0D070] hover:to-[#C49832] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#09090B]" />
              <span>Showcase Your Talent</span>
            </button>

            <a
              href="#talents"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-[#F3E5AB] bg-[#121217] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#1A1A22] transition-all duration-300 active:scale-95"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Creators</span>
            </a>
          </div>

          <p className="mt-6 text-xs text-[#7E7E88]">
            Zero application fees &middot; All creative, technical, and literary disciplines welcome &middot; 100% youth-centered
          </p>
        </div>
      </div>

      {/* Showcase Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#111116] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Talent Intake Application</span>
            </div>

            <h3 className="font-serif-heading text-2xl font-bold text-white mb-2">
              Submit Your Craft to Fikr-e-Nau
            </h3>
            <p className="text-xs text-[#8E8E93] mb-6">
              Our editorial committee reviews every portfolio with great care.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 text-center">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-lg">Application Received!</h4>
                <p className="text-xs text-[#A0F5BE] mt-1">
                  Thank you for sharing your work. Our editorial team will contact you within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-[#D1D1D6] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Zainab Qureshi"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D1D6] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="zainab@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09090B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D1D1D6] mb-1">
                      Discipline / Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09090B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Art">Art & Design</option>
                      <option value="Technology">Technology & Software</option>
                      <option value="Writing">Literature & Writing</option>
                      <option value="Photography">Photography & Film</option>
                      <option value="Music">Music & Sound</option>
                      <option value="Entrepreneurship">Social Innovation & Tech</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D1D1D6] mb-1">
                    Portfolio / Github / Instagram / Drive Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://behance.net/yourprofile or https://github.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D1D1D6] mb-1">
                    Brief Statement About Your Craft & Journey *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Tell us about the ideas you are exploring and what drives your work..."
                    className="w-full px-4 py-2 rounded-xl bg-[#09090B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#E6C25B] to-[#D4AF37] hover:from-[#F0D070] transition-all cursor-pointer shadow-lg"
                  >
                    Submit Application for Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CtaSection;
