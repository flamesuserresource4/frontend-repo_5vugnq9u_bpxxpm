import React, { useEffect, useState } from 'react';

// Embeds the Gradio app for the requested model
// Loads the script once and shows the custom element when ready
const HuggingFaceEmbed = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // If the script is already present, just mark ready
    const existing = document.querySelector('script[data-gradio-script]');
    if (existing) {
      setReady(true);
      return;
    }
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://gradio.s3-us-west-2.amazonaws.com/5.49.1/gradio.js';
    script.async = true;
    script.setAttribute('data-gradio-script', 'true');
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, []);

  return (
    <section className="mt-10">
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-200">Powered Model</h3>
          <span className="text-xs text-gray-400">Hugging Face Gradio</span>
        </div>
        <div className="rounded-lg overflow-hidden bg-black/40">
          {ready ? (
            // eslint-disable-next-line react/no-unknown-property
            <gradio-app src="https://thrimurthi2025-unrealeye.hf.space"></gradio-app>
          ) : (
            <div className="p-8 flex items-center justify-center text-gray-400 text-sm">Loading model…</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HuggingFaceEmbed;
