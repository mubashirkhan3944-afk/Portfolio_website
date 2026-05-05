import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Work() {
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

    // Projects stagger
    tl.from('.project-reveal', {
      y: 30,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'back.out(1.2)',
      clearProps: 'all'
    }, "-=0.4");
  }, { scope: containerRef });

  const projects = [
    { id: '01', name: 'Digital 3D Website', tags: ['Three.js', 'GSAP', 'Lenis'] },
    { id: '02', name: 'Game Using JS', tags: ['Tailwind CSS', 'JS', 'UI/UX'] },
    { id: '03', name: 'Backend System Design', tags: ['Figma', 'Node.js', 'Express.js'] },
    { id: '04', name: 'E-commerce Platform', tags: ['React', 'Stripe', 'Redux'] },
    { id: '05', name: 'Real-time Chat App', tags: ['Socket.io', 'Node', 'React'] },
    { id: '06', name: 'Creative Portfolio', tags: ['Motion', 'Framer', 'GSAP'] },
    { id: '07', name: 'Smart Home Dashboard', tags: ['IoT', 'Next.js', 'Tailwind'] },
    { id: '08', name: 'VR Art Gallery', tags: ['A-Frame', '3D', 'WebGL'] },
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-15 min-h-screen max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Header Block */}
        <div className="reveal-header md:col-span-4 bento-card p-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 overflow-hidden relative bg-bg-tertiary">
          <div className="absolute -top-10 -right-10 text-white/[0.02] text-[15vw] font-black select-none pointer-events-none font-display uppercase tracking-widest leading-none">Craft</div>
          <div className="relative z-10">
            <div className="font-mono text-[11px] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-2 font-bold">
              <span className="w-6 h-px bg-accent opacity-50"></span> Selected Work
            </div>
            <h1 className="font-display text-5xl md:text-8xl tracking-tight uppercase leading-none">Featured <span className="text-white/20">Projects</span></h1>
          </div>
          <div className="text-right z-10 hidden md:block">
            <div className="text-[10px] text-muted uppercase tracking-widest font-mono leading-loose">Curated projects based on <br /> digital innovation and craftsmanship.</div>
          </div>
        </div>

        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className={`project-reveal bento-card p-10 flex flex-col justify-end group transition-all duration-300 hover:border-accent/40 bg-bg-tertiary md:col-span-2 min-h-[350px] relative overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-white/[0.02] flex items-center justify-center font-display text-white/[0.03] tracking-widest pointer-events-none transition-colors group-hover:text-accent/5
              ${i === 0 ? 'text-[200px]' : 'text-9xl'}
            `}>
              {project.id}
            </div>
            
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="absolute top-6 right-6 w-9 h-9 border border-white/10 rounded-full flex items-center justify-center font-bold opacity-40 group-hover:opacity-100 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </div>

            <div className="relative z-10">
               <div className="font-mono text-[9px] text-accent tracking-[2px] mb-2 font-bold uppercase">{project.id} / WEB</div>
               <h3 className="font-display text-3xl md:text-4xl mb-4 leading-none tracking-widest group-hover:text-accent transition-colors uppercase">{project.name}</h3>
               <div className="flex gap-2 flex-wrap">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[9px] tracking-wider text-muted group-hover:text-[#f0ede6] transition-colors uppercase">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
