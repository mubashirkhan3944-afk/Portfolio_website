import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import myPic from '../images/mypic.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero Animations
    tl.from('.hero-content > *', {
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all'
    });

    tl.from('.hero-image', {
      scale: 0.95,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'all'
    }, "-=0.4");

    // Staggered Bento Cards Reveal
    tl.from('.bento-reveal', {
      y: 30,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.2)',
      clearProps: 'all'
    }, "-=0.3");

    // Stat Cards Floating Animation
    gsap.to('.stat-card', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-20 min-h-screen px-6 md:px-15 max-w-7xl mx-auto font-sans">
      {/* BENTO HERO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Main Hero Block */}
        <div className="bento-reveal md:col-span-2 md:row-span-2 bento-card p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group min-h-[450px]">
          <div className="absolute top-8 left-8 md:top-12 md:left-12 text-white/5 text-7xl md:text-9xl font-black select-none pointer-events-none">MB.</div>
          <div className="relative z-10 hero-content">
            <div className="font-mono text-[11px] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-accent opacity-50"></span>
              Available for work
            </div>
            <h1 className="hero-name text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-6 tracking-tight uppercase">
              MUBASHIR<br />
              <span className="text-accent underline decoration-4 underline-offset-8 decoration-accent/30">KHAN</span>
            </h1>
            <p className="hero-desc text-muted max-w-sm text-sm md:text-base leading-relaxed mb-8">
              A creative developer & designer crafting digital experiences that merge aesthetics with performance. Serious about craft, obsessed with detail.
            </p>
            <div className="flex gap-4">
              <Link to="/work" className="bg-accent text-white px-8 py-3.5 font-mono text-[11px] tracking-[2px] uppercase font-bold transition-all hover:bg-accent-dark hover:-translate-y-1">
                View Work
              </Link>
            </div>
          </div>
        </div>

        {/* Image / Person Block */}
        <div className="bento-reveal md:col-span-2 md:row-span-2 bento-card bg-bg-tertiary flex items-center justify-center overflow-hidden relative group min-h-[400px] border-white/20">
          <div className="absolute inset-0 bg-accent/10 opacity-30 group-hover:opacity-100 transition-opacity duration-700 blur-[80px]"></div>
          <img 
            src={myPic}
            alt="Mubashir Khan" 
            className="hero-image w-[70%] h-[90%] object-contain relative z-10 drop-shadow-[0_0_40px_rgba(200,245,90,0.3)] transition-transform duration-700 group-hover:scale-105 -translate-x-10"
          />
          <div className="absolute bottom-8 right-8 flex flex-col gap-3">
             <div className="bg-bg/80 backdrop-blur-md border border-white/10 p-4 min-w-[100px] text-center">
                <div className="text-2xl font-display text-accent">03+</div>
                <div className="text-[8px] font-mono text-muted uppercase tracking-widest">Years Exp</div>
             </div>
             <div className="bg-bg/80 backdrop-blur-md border border-white/10 p-4 min-w-[100px] text-center">
                <div className="text-2xl font-display text-accent">20+</div>
                <div className="text-[8px] font-mono text-muted uppercase tracking-widest">Projects</div>
             </div>
          </div>
        </div>

        {/* Location Block */}
        <div className="bento-reveal md:col-span-1 bento-card p-6 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-accent/80 font-mono">Status: Active</span>
          </div>
          <div>
            <div className="text-[10px] text-muted uppercase tracking-widest font-mono mb-1">Based in</div>
            <div className="text-xl font-bold font-display tracking-widest">Haripur, PK</div>
          </div>
        </div>

        {/* Let's Talk Block */}
        <div className="bento-reveal md:col-span-1 bento-card p-6 bg-accent text-white flex flex-col justify-between group cursor-pointer" onClick={() => (window.location.href = 'mailto:mubashirkhan3944@gmail.com')}>
          <div className="text-3xl font-bold leading-none font-display uppercase tracking-widest">Connect <br />& Build.</div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Contact Me</div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="bento-reveal bento-card py-5 overflow-hidden bg-bg-secondary mb-4">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-15 whitespace-nowrap items-center">
              {['UI/UX Design', 'Web Development', 'Creative Direction', 'Brand Identity', 'Motion Design'].map((text, j) => (
                <div key={j} className="flex items-center gap-15">
                   <span className="font-display text-[18px] tracking-[4px] text-muted uppercase">{text}</span>
                   <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Core Stack Block */}
        <div className="bento-reveal md:col-span-2 bento-card p-8 flex flex-col justify-center">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Core Capabilities
          </h3>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'UI/UX Design', 'Figma', 'Node.js', 'Three.js', 'GSAP Motion'].map(skill => (
              <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/10 text-[11px] font-mono tracking-wide text-[#f0ede6] hover:bg-accent hover:text-white transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Big CTA Block */}
        <div className="bento-reveal md:col-span-2 bento-card p-8 bg-bg-secondary border border-accent/20 flex items-center justify-between group overflow-hidden relative">
          <div className="absolute -right-10 -bottom-10 text-white/[0.02] text-[150px] font-display font-black select-none group-hover:text-accent/5 transition-colors uppercase">WORK</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-2 tracking-widest text-accent uppercase">Let's create.</h2>
            <p className="text-muted text-xs mb-6 max-w-xs font-sans">Transforming complex ideas into seamless digital realities is what I do best.</p>
            <Link to="/contact" className="inline-flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors">
              Start Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-2 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
