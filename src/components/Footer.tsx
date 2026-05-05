import React from 'react';

export default function Footer() {
  return (
    <footer className="px-6 md:px-15 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-muted max-w-7xl mx-auto">
      <div className="font-bold">
        © {new Date().getFullYear()} Mubashir Khan. All rights reserved.
      </div>
      <div className="flex gap-8">
        <a href="https://twitter.com" className="hover:text-accent transition-colors">Twitter</a>
        <a href="https://linkedin.com" className="hover:text-accent transition-colors">LinkedIn</a>
        <a href="https://github.com" className="hover:text-accent transition-colors">GitHub</a>
      </div>
      <div className="font-bold">
        Made with <span className="text-accent">♥</span>
      </div>
    </footer>
  );
}
