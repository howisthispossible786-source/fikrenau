import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const RootLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-[#EDEDED]">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
