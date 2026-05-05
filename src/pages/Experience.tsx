import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Header reveal
    tl.from('.reveal-header', {
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power3.out',
      clearProps: 'all'
    });

    // Experience stagger
    tl.from('.exp-reveal', {
      y: 30,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'back.out(1.2)',
      clearProps: 'all'
    }, "-=0.4");
  }, { scope: containerRef });

  const experiences = [
    {
      year: '2026 — Present',
      role: 'Junior Frontend Developer',
      company: 'Startup · Full-Time',
      desc: 'Active member of the frontend team in building scalable web applications with a focus on performance and aesthetic excellence.',
      type: 'Full-Time'
    },
    {
      year: '2025 — Present',
      role: 'UI/UX Designer',
      company: 'Design Studio · Full-Time',
      desc: 'Designed end-to-end digital products across fintech, healthcare, and e-commerce.',
      type: 'Full-Time'
    },
    {
      year: '2025 — Present',
      role: 'Backend Developer',
      company: 'Freelance',
      desc: 'Worked with startups and agencies to create unique digital experiences that stood out from the ordinary.',
      type: 'Freelance'
    },
    {
      year: '2024 — 2025',
      role: 'React Interaction Developer',
      company: 'Digital Agency',
      desc: 'Specialized in creating micro-interactions and high-performance UI components for high-traffic web apps.',
      type: 'Contract'
    },
    {
      year: '2024',
      role: 'Project Lead',
      company: 'Digital 3D Website',
      desc: 'Engineered a fully immersive 3D environment using Three.js and GSAP, achieving 90+ lighthouse scores.',
      type: 'Project'
    },
    {
      year: '2023 — 2024',
      role: 'Web Game Developer',
      company: 'Independent Release',
      desc: 'Designed and developed a browser-based arcade game with custom physics and real-time state management.',
      type: 'Project'
    },
    {
      year: '2023',
      role: 'Systems Architect',
      company: 'Backend Design Challenge',
      desc: 'Architected a scalable microservices backend for a distributed system, focusing on data integrity and speed.',
      type: 'Project'
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-15 min-h-screen max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Header Block */}
        <div className="reveal-header md:col-span-4 bento-card p-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 overflow-hidden relative bg-bg-tertiary">
          <div className="absolute -top-10 -right-10 text-white/[0.02] text-[15vw] font-black select-none pointer-events-none font-display uppercase tracking-widest leading-none">Work</div>
          <div className="relative z-10">
            <div className="font-mono text-[11px] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-2 font-bold">
              <span className="w-6 h-px bg-accent opacity-50"></span> Professional Path
            </div>
            <h1 className="font-display text-5xl md:text-8xl tracking-tight uppercase leading-none">EXPERIENCE <span className="text-white/20">TIMELINE</span></h1>
          </div>
          <div className="text-right z-10">
            <div className="text-5xl font-display text-accent tracking-widest leading-none">03+</div>
            <div className="text-[10px] uppercase tracking-widest text-muted font-mono font-bold">Years Industry Presence</div>
          </div>
        </div>

        {/* Experience List - Bento Cards */}
        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className="exp-reveal bento-card p-10 flex flex-col justify-between group transition-all duration-300 hover:border-accent/40 bg-bg-tertiary md:col-span-2 min-h-[350px]"
          >
             <div className="flex justify-between items-start mb-12">
               <div className="font-mono text-[10px] text-accent tracking-[1px] font-bold uppercase">{exp.year}</div>
               <div className="bg-white/5 border border-white/10 px-4 py-1.5 font-mono text-[9px] tracking-[1px] text-white uppercase">
                 {exp.type}
               </div>
             </div>
             <div>
               <h3 className="font-display text-3xl md:text-5xl tracking-widest group-hover:text-accent transition-colors mb-4 uppercase leading-tight">{exp.role}</h3>
               <div className="text-muted text-xs md:text-sm font-bold uppercase tracking-widest mb-6 font-sans">{exp.company}</div>
               <p className="text-muted text-sm leading-relaxed max-w-md font-sans">{exp.desc}</p>
             </div>
          </div>
        ))}

        {/* Skill Highlight Block */}
        <div className="exp-reveal md:col-span-4 bento-card p-12 bg-accent text-white flex flex-col justify-center items-center text-center group min-h-[300px]">
          <h3 className="text-3xl md:text-5xl font-display font-black mb-6 group-hover:scale-105 transition-transform uppercase tracking-widest text-white">Always Learning.</h3>
          <p className="text-white/80 text-sm md:text-base max-w-xl font-bold uppercase tracking-wider font-sans leading-relaxed">Currently diving deep into WebGL and Advanced Interaction Design to push the boundaries of what's possible on the web and architecture design.</p>
        </div>
      </div>
    </div>
  );
}
