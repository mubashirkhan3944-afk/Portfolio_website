import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-15 py-6 flex justify-between items-center bg-bg/80 backdrop-blur-xl border-b border-white/10">
      <Link to="/" className="font-display text-2xl tracking-tight text-white uppercase group">
        MUBASHIR<span className="text-accent underline decoration-2 underline-offset-4 decoration-accent/50 group-hover:decoration-accent transition-all">KHAN</span>
      </Link>
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`font-mono text-[11px] tracking-widest uppercase font-bold transition-colors duration-300 ${
                location.pathname === link.path ? 'text-accent' : 'text-muted hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="text-[11px] font-mono uppercase tracking-widest font-bold text-accent border border-accent/20 px-6 py-2 transition-all duration-200 hover:bg-accent hover:text-white"
      >
        Hire Me
      </Link>
    </nav>
  );
}
