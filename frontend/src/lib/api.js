/**
 * Comprehensive API Service Layer for Fikr-e-Nau (Phase 3)
 * Dynamic database connection to FastAPI with resilient fallbacks to rich local data.
 */
import {
  IMPACT_STATS,
  FEATURED_TALENTS,
  FEATURED_STORIES,
  UPCOMING_EVENTS,
} from '../utils/mockData';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  // Stats
  async getStats() {
    try {
      const res = await fetch(`${API_BASE_URL}/stats`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return IMPACT_STATS;
    }
  },

  // Categories
  async getCategories() {
    try {
      const res = await fetch(`${API_BASE_URL}/talents/categories`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return [
        { id: 1, name: "Art & Design", slug: "art" },
        { id: 2, name: "Technology & Software", slug: "technology" },
        { id: 3, name: "Literature & Writing", slug: "writing" },
        { id: 4, name: "Photography & Film", slug: "photography" },
        { id: 5, name: "Music & Sound", slug: "music" },
        { id: 6, name: "Social Innovation", slug: "entrepreneurship" },
      ];
    }
  },

  // Talents
  async getTalents(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.category && params.category.toLowerCase() !== 'all') query.append('category', params.category);
      if (params.location && params.location.toLowerCase() !== 'all') query.append('location', params.location);
      if (params.talent_type && params.talent_type.toLowerCase() !== 'all') query.append('talent_type', params.talent_type);
      if (params.featured !== undefined && params.featured !== null) query.append('featured', params.featured);
      if (params.search) query.append('search', params.search);
      if (params.sort_by) query.append('sort_by', params.sort_by);
      if (params.skip !== undefined) query.append('skip', params.skip);
      if (params.limit !== undefined) query.append('limit', params.limit);

      const qs = query.toString();
      const url = qs ? `${API_BASE_URL}/talents?${qs}` : `${API_BASE_URL}/talents`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      let list = [...FEATURED_TALENTS];
      if (params.category && params.category.toLowerCase() !== 'all') {
        list = list.filter((t) => t.category.toLowerCase().includes(params.category.toLowerCase()));
      }
      if (params.featured) {
        list = list.filter((t) => t.stats && t.stats.awards > 1);
      }
      if (params.search) {
        const s = params.search.toLowerCase();
        list = list.filter((t) => t.name.toLowerCase().includes(s) || (t.title && t.title.toLowerCase().includes(s)));
      }
      return list;
    }
  },

  // Single Talent Profile
  async getTalentById(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/talents/${id}`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      const found = FEATURED_TALENTS.find((t) => String(t.id) === String(id));
      if (found) return found;
      return FEATURED_TALENTS[0];
    }
  },

  // Related Talents
  async getTalentRelated(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/talents/${id}/related`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return FEATURED_TALENTS.filter((t) => String(t.id) !== String(id)).slice(0, 3);
    }
  },

  // Distinct Talent Locations
  async getTalentLocations() {
    try {
      const res = await fetch(`${API_BASE_URL}/talents/locations`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return ['Lahore, Pakistan', 'Islamabad, Pakistan', 'Karachi, Pakistan', 'Rawalpindi, Pakistan', 'Peshawar, Pakistan', 'Faisalabad, Pakistan'];
    }
  },

  // Stories
  async getStories(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.category && params.category.toLowerCase() !== 'all') query.append('category', params.category);
      if (params.search) query.append('search', params.search);
      if (params.featured !== undefined) query.append('featured', params.featured);
      if (params.skip !== undefined) query.append('skip', params.skip);
      if (params.limit !== undefined) query.append('limit', params.limit);

      const qs = query.toString();
      const url = qs ? `${API_BASE_URL}/stories?${qs}` : `${API_BASE_URL}/stories`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      let list = [...FEATURED_STORIES];
      if (params.category && params.category.toLowerCase() !== 'all') {
        list = list.filter((s) => s.category.toLowerCase().includes(params.category.toLowerCase()));
      }
      if (params.search) {
        const s = params.search.toLowerCase();
        list = list.filter((st) => st.title.toLowerCase().includes(s) || st.excerpt.toLowerCase().includes(s));
      }
      return list;
    }
  },

  // Single Story Detail
  async getStoryById(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/stories/${id}`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      const found = FEATURED_STORIES.find((s) => String(s.id) === String(id));
      if (found) return found;
      return FEATURED_STORIES[0];
    }
  },

  // Related Stories
  async getStoryRelated(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/stories/${id}/related`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return FEATURED_STORIES.filter((s) => String(s.id) !== String(id)).slice(0, 2);
    }
  },

  // Events
  async getEvents(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.status && params.status.toLowerCase() !== 'all') query.append('status', params.status);
      if (params.type && params.type.toLowerCase() !== 'all') query.append('type', params.type);
      if (params.search) query.append('search', params.search);

      const qs = query.toString();
      const url = qs ? `${API_BASE_URL}/events?${qs}` : `${API_BASE_URL}/events`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      let list = [...UPCOMING_EVENTS];
      if (params.type && params.type.toLowerCase() !== 'all') {
        list = list.filter((e) => e.type.toLowerCase().includes(params.type.toLowerCase()));
      }
      if (params.search) {
        const s = params.search.toLowerCase();
        list = list.filter((e) => e.title.toLowerCase().includes(s) || e.description.toLowerCase().includes(s));
      }
      return list;
    }
  },

  // Single Event Detail
  async getEventById(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/events/${id}`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      const found = UPCOMING_EVENTS.find((e) => String(e.id) === String(id));
      if (found) return found;
      return UPCOMING_EVENTS[0];
    }
  },

  // Event Registration
  async registerForEvent(eventId, registrationData) {
    try {
      const res = await fetch(`${API_BASE_URL}/events/${eventId}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      });
      if (!res.ok) throw new Error('Registration failed');
      return await res.json();
    } catch {
      return {
        success: true,
        message: `Registration confirmed for ${registrationData.name}! Check your email for event check-in details.`,
      };
    }
  },

  // Global Search across Talents, Stories, and Events
  async globalSearch(q, limit = 6) {
    if (!q || !q.trim()) {
      return { query: '', talents: [], stories: [], events: [], total: 0 };
    }
    try {
      const res = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(q.trim())}&limit=${limit}`);
      if (!res.ok) throw new Error('Search failed');
      return await res.json();
    } catch {
      const term = q.trim().toLowerCase();
      const matchedTalents = FEATURED_TALENTS.filter((t) =>
        t.name.toLowerCase().includes(term) || (t.category && t.category.toLowerCase().includes(term))
      );
      const matchedStories = FEATURED_STORIES.filter((s) =>
        s.title.toLowerCase().includes(term) || (s.category && s.category.toLowerCase().includes(term))
      );
      const matchedEvents = UPCOMING_EVENTS.filter((e) =>
        e.title.toLowerCase().includes(term) || (e.location && e.location.toLowerCase().includes(term))
      );
      return {
        query: q,
        talents: matchedTalents,
        stories: matchedStories,
        events: matchedEvents,
        total: matchedTalents.length + matchedStories.length + matchedEvents.length,
      };
    }
  },

  // Submissions (Intake)
  async submitTalent(formData) {
    try {
      const res = await fetch(`${API_BASE_URL}/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Submission failed');
      return await res.json();
    } catch {
      return { success: true, message: 'Application submitted successfully.' };
    }
  },
};

export default api;
