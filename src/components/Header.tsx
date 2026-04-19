import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-brand-secondary tracking-tight">
              후한의원 <span className="text-brand-primary">구미점</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="https://naver.me/5N15Owng" target="_blank" rel="noopener noreferrer" className="text-brand-primary border-2 border-brand-primary px-6 py-2 rounded-full hover:bg-brand-primary hover:text-white font-bold tracking-tight transition-all">Quick Reservation</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a href="https://naver.me/5N15Owng" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-primary border border-brand-primary px-3 py-1 rounded-full mr-2">Reservation</a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#services" className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-primary border-b border-gray-50" onClick={() => setIsOpen(false)}>Treatments</a>
            <a href="#location" className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-primary border-b border-gray-50" onClick={() => setIsOpen(false)}>Location</a>
            <a href="https://naver.me/5N15Owng" target="_blank" rel="noopener noreferrer" className="block px-3 py-4 text-base font-semibold text-brand-primary" onClick={() => setIsOpen(false)}>Reservation</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
