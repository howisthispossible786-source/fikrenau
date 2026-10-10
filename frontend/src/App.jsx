import { useEffect } from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StartLoader from './components/StartLoader';
import AboutSection from './pages/AboutSection'
import FeaturedTalentSection from './pages/FeaturedTalentSection';
import FeaturedStoriesSection from './pages/FeaturedStoriesSection';
import EventsSection from './pages/EventsSection'
import WhatsAppButton from './components/WhatsappButton';

// Helper component to smoothly scroll to anchor links or top on route change
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow slight delay for DOM to settle
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timeoutId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export const App = () => {
  return (
<>
      <StartLoader />
      <ScrollManager />
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/featuredtalents" element={<FeaturedTalentSection />} />
          <Route path="/stories" element={<FeaturedStoriesSection />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>

      <WhatsAppButton />
</>
  );
};

export default App;