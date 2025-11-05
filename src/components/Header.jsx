import React from 'react';
import { Shield, Image as ImageIcon, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-black/80 border-b border-white/10 sticky top-0 z-20 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
            <Shield size={22} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">FakeOut</h1>
            <p className="text-xs sm:text-sm text-gray-400">AI Image Detector & Fact-Check Platform</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-3 text-xs">
          <a href="#image-detection" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition text-gray-200">
            <ImageIcon size={16} />
            AI Image Detection
          </a>
          <a href="#fact-check" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition text-gray-200">
            <Search size={16} />
            Fact Check Search
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
