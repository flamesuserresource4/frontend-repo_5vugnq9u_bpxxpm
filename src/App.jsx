import React from 'react';
import Header from './components/Header';
import ImageDetection from './components/ImageDetection';
import FactCheckSearch from './components/FactCheckSearch';
import HuggingFaceEmbed from './components/HuggingFaceEmbed';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero */}
        <section className="mb-10">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Detect AI Images. Verify Claims. Trust with Confidence.</h2>
            <p className="mt-3 text-gray-300 max-w-2xl">FakeOut helps you identify AI-generated images and quickly fact-check trending narratives using a clean, modern interface.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 border border-green-500/30">Authenticity</span>
              <span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 border border-red-500/30">AI Detection</span>
              <span className="px-2.5 py-1 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-400/30">Signals</span>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">Insights</span>
            </div>
          </div>
        </section>

        <ImageDetection />

        <HuggingFaceEmbed />

        <div className="h-px w-full my-10 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <FactCheckSearch />
      </main>

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-400">
          Built with a privacy-first mindset. This demo simulates analysis for quick feedback and embeds a public model for exploration.
        </div>
      </footer>
    </div>
  );
}

export default App;
