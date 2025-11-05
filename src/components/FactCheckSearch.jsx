import React, { useMemo, useState } from 'react';
import { Search, Trash2 } from 'lucide-react';

const sources = ['Snopes', 'PolitiFact', 'FactCheck.org', 'AP Fact Check'];

const statuses = [
  { label: 'True', color: 'bg-green-500', text: 'text-green-300', badge: 'bg-green-500/15 border-green-500/30' },
  { label: 'False', color: 'bg-red-500', text: 'text-red-300', badge: 'bg-red-500/15 border-red-500/30' },
  { label: 'Partially True', color: 'bg-yellow-400', text: 'text-yellow-300', badge: 'bg-yellow-400/15 border-yellow-400/30' },
];

const FactCheckSearch = () => {
  const [query, setQuery] = useState('');
  const [touched, setTouched] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    // Create 1-3 mock results deterministically based on query length
    const count = Math.min(3, Math.max(1, (query.length % 3) + 1));
    return Array.from({ length: count }).map((_, i) => {
      const status = statuses[(query.charCodeAt(0) + i) % statuses.length];
      const source = sources[(query.length + i) % sources.length];
      const date = new Date(Date.now() - (i + 1) * 86400000).toLocaleDateString();
      return {
        id: i,
        title: `Fact check: ${query}`,
        source,
        date,
        status,
      };
    });
  }, [query]);

  return (
    <section id="fact-check" className="">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Fact Check Search</h2>
        <p className="text-gray-400 mt-1">Look up claims and see how major fact-checkers have rated them.</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-stretch gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Search keywords..."
            className="flex-1 px-4 py-2 rounded-md bg-black/60 border border-white/10 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white font-medium transition"
            onClick={() => setTouched(true)}
          >
            <Search size={18} />
            Search
          </button>
          {query && (
            <button
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white transition"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>

        {touched && query && (
          <div className="mt-5 space-y-3">
            {results.map((r) => (
              <div key={r.id} className="p-4 rounded-lg border border-white/10 bg-black/30">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-2.5 h-2.5 rounded-full ${r.status.color}`}></span>
                    <h4 className="text-gray-100 font-medium truncate">{r.title}</h4>
                  </div>
                  <span className={`shrink-0 px-2 py-1 rounded-full text-xs border ${r.status.badge} ${r.status.text} font-semibold`}>
                    {r.status.label}
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Source: <span className="text-gray-300">{r.source}</span> • {r.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FactCheckSearch;
