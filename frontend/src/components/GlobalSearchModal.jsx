import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Sparkles, BookOpen, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import api from '../lib/api';

export const GlobalSearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({ talents: [], stories: [], events: [], total: 0 });
  const [searched, setSearched] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchTerm('');
      setResults({ talents: [], stories: [], events: [], total: 0 });
      setSearched(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Debounced search (300ms)
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults({ talents: [], stories: [], events: [], total: 0 });
      setLoading(false);
      setSearched(false);
      return;
    }

    setLoading(true);
    const handler = setTimeout(async () => {
      try {
        const data = await api.globalSearch(searchTerm.trim(), 5);
        setResults(data);
        setSearched(true);
      } catch (err) {
        console.error('Global search error:', err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  if (!isOpen) return null;

  const handleSelect = (url) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#111116] border border-[#D4AF37]/35 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden z-10 flex flex-col max-h-[85vh]">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center px-5 sm:px-6 py-4 border-b border-white/10 bg-[#14141C]">
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search talents, editorial stories, summits & workshops..."
            className="w-full bg-transparent px-3.5 py-2 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none"
          />
          {loading ? (
            <Loader2 className="w-5 h-5 text-[#D4AF37] animate-spin shrink-0" />
          ) : searchTerm ? (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-full text-gray-400 hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded bg-white/10 text-gray-400 font-mono">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          {!searched && !searchTerm.trim() && (
            <div className="text-center py-10 text-gray-400">
              <Search className="w-8 h-8 text-[#D4AF37]/50 mx-auto mb-3" />
              <p className="text-sm">Search by creator name, discipline, story topic, or event city</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Zainab', 'AI & Technology', 'Miniature', 'Writing', 'Summit', 'Lahore'].map((sug) => (
                  <button
                    key={sug}
                    onClick={() => setSearchTerm(sug)}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-[#D4AF37]/15 text-gray-300 hover:text-[#F3E5AB] border border-white/10 transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searched && results.total === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-base text-white font-medium">No results found for &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-xs text-gray-500 mt-1">Try a different keyword or browse all sections</p>
            </div>
          )}

          {/* Talents Section */}
          {results.talents && results.talents.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3 px-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Talents ({results.talents.length})</span>
              </div>
              <div className="space-y-2">
                {results.talents.map((talent) => (
                  <button
                    key={talent.id}
                    onClick={() => handleSelect(`/talent/${talent.id}`)}
                    className="w-full flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-[#D4AF37]/30 transition-all text-left group cursor-pointer"
                  >
                    <img
                      src={talent.profile_image || talent.imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                      alt={talent.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/30 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white group-hover:text-[#F3E5AB] transition-colors truncate">
                          {talent.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#E5C378] shrink-0 font-medium">
                          {talent.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 truncate mt-0.5">
                        {talent.headline || talent.title} &middot; {talent.location}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stories Section */}
          {results.stories && results.stories.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3 px-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Editorial Stories ({results.stories.length})</span>
              </div>
              <div className="space-y-2">
                {results.stories.map((story) => (
                  <button
                    key={story.id}
                    onClick={() => handleSelect(`/stories/${story.id}`)}
                    className="w-full flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-[#D4AF37]/30 transition-all text-left group cursor-pointer"
                  >
                    <img
                      src={story.cover_image || story.coverImage}
                      alt={story.title}
                      className="w-14 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-[#F3E5AB] transition-colors truncate">
                          {story.title}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 truncate mt-0.5">
                        {story.category} &middot; By {story.author}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Events Section */}
          {results.events && results.events.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3 px-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Events & Workshops ({results.events.length})</span>
              </div>
              <div className="space-y-2">
                {results.events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => handleSelect(`/events/${event.id}`)}
                    className="w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-[#D4AF37]/30 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex-1 min-w-0 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-[#F3E5AB] transition-colors truncate">
                          {event.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#E5C378] shrink-0">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 truncate mt-0.5">
                        {event.date} &middot; {event.location}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="px-5 py-3 bg-[#0D0D11] border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
          <span>Press ESC to exit</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSelect('/discover')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Browse All Talents
            </button>
            <span>&bull;</span>
            <button
              onClick={() => handleSelect('/stories')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              All Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchModal;
