import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Header reveal
    tl.from('.reveal', {
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all'
    });

    // Bento cards stagger
    tl.from('.bento-reveal', {
      y: 30,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.2)',
      clearProps: 'all'
    }, "-=0.4");

    // Skill items reveal
    gsap.from('.skill-item', {
      y: 20,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skill-item',
        start: 'top 90%'
      },
      clearProps: 'all'
    });
  }, { scope: containerRef });

  const skills = [
    { name: 'React.js', level: 'Advanced' },
    { name: 'UI/UX Design', level: 'Advanced' },
    { name: 'Figma', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Three.js', level: 'Intermediate' },
    { name: 'GSAP & Lenis', level: 'Advanced' },
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-15 min-h-screen max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Main Header Block */}
        <div className="bento-reveal md:col-span-2 md:row-span-2 bento-card p-10 flex flex-col justify-end relative overflow-hidden bg-bg-tertiary">
          <div className="absolute top-10 right-10 text-white/5 text-8xl font-black select-none pointer-events-none uppercase font-display">Who I Am</div>
          <div className="relative z-10">
            <div className="font-mono text-[10px] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-accent opacity-50"></span> Introduction
            </div>
            <h1 className="reveal font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] mb-4 tracking-tight uppercase">
              CRAFTING DIGITAL<br />
              <span className="text-accent underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 decoration-accent/30">EXPERIENCES</span>
            </h1>
          </div>
        </div>

        {/* Bio Block */}
        <div className="bento-reveal md:col-span-2 bento-card p-10 flex flex-col justify-center bg-[#111] group relative overflow-hidden">
          <div className="absolute -top-10 -right-10 text-white/5 text-9xl font-black select-none group-hover:text-accent/10 transition-colors uppercase font-display">BIO</div>
          <div className="reveal space-y-6 text-sm md:text-base leading-relaxed relative z-10 text-muted">
            <p>
              <strong className="text-white font-bold">I'm a creative developer & designer</strong> based in Haripur, Pakistan. I build things for the web with an obsessive eye for detail and a love for minimal, purposeful design.
            </p>
            <p>
              My process starts with understanding — who's it for, what should it feel — and ends only when the result is something I'm genuinely proud of. No shortcuts, no templates.
            </p>
            <p>
              When I'm not building, I'm studying aesthetics, photography, and the intersection of art and technology.
            </p>
          </div>
        </div>

        {/* Vision Block */}
        <div className="bento-reveal md:col-span-1 bento-card p-8 flex flex-col justify-between bg-accent text-white group">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60">Philosophy</h3>
          <p className="text-xl font-display uppercase tracking-widest leading-none mt-4 transition-transform group-hover:translate-x-2 italic text-white">"Less, but better."</p>
        </div>

        {/* Status Block */}
        <div className="bento-reveal md:col-span-1 bento-card p-8 flex flex-col justify-between overflow-hidden relative bg-[#111]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-accent font-mono">Exploring 3D</span>
          </div>
          <div>
            <div className="text-[10px] text-muted uppercase font-mono tracking-widest mb-1">Current Focus</div>
            <div className="text-xl font-display uppercase tracking-widest">Digital Art</div>
          </div>
        </div>

        {/* Education Block */}
        <div className="bento-reveal md:col-span-1 bento-card p-8 flex flex-col justify-between bg-bg-tertiary">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted">Education</h3>
          <div>
            <div className="text-sm font-bold text-white mb-1">BS Software Engineering</div>
            <div className="text-[10px] text-accent font-mono uppercase tracking-widest">2022 — 2026</div>
          </div>
        </div>

        {/* Skills Block */}
        <div className="bento-reveal md:col-span-4 bento-card p-10 bg-bg-secondary">
          <div className="flex flex-col md:row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted mb-2">Technical Proficiency</h3>
              <p className="text-muted text-sm font-sans">A blend of design and engineering tools I use daily.</p>
            </div>
            <div className="w-12 h-12 border border-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item bg-white/5 border border-white/10 p-6 transition-all hover:bg-accent group relative overflow-hidden">
                 <div className="relative z-10">
                   <div className="text-[12px] font-bold group-hover:text-white transition-colors font-sans">{skill.name}</div>
                   <div className="font-mono text-[9px] text-accent group-hover:text-white/60 tracking-[1px] mt-1 transition-colors uppercase">{skill.level}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
