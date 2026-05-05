import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Header items reveal together
    tl.from('.reveal', {
      y: 40,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all'
    });

    // Social boxes reveal one by one
    tl.from('.social-reveal', {
      y: 40,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'back.out(1.2)',
      clearProps: 'all'
    }, "-=0.3"); // Overlap with header animation
  }, { scope: containerRef });

  const socials = [
    { name: 'Whatsapp', link: 'https://wa.me/923001234567' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mubashir-khan-a1bb75388/' },
    { name: 'GitHub', link: 'https://github.com/mubashirkhan3944-afk' },
    { name: 'Instagram', link: 'https://www.instagram.com/portfolio_design3r/' },
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-15 min-h-screen max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Main Connect Block */}
        <div className="md:col-span-3 md:row-span-2 bento-card p-8 md:p-12 lg:p-20 flex flex-col justify-center items-center text-center overflow-hidden relative group bg-bg-tertiary">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-white/[0.01] tracking-[30px] pointer-events-none whitespace-nowrap uppercase select-none leading-none">
            hello
          </div>
          
          <div className="relative z-10 w-full max-w-full overflow-hidden">
            <div className="reveal font-mono text-[10px] tracking-[4px] text-accent uppercase mb-6 font-bold flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-accent opacity-50"></span> Available for new projects
            </div>
            
            <h2 className="reveal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight mb-8 uppercase leading-tight md:leading-[1.1]">
              Let's craft the <br />
              <span className="text-accent underline underline-offset-4 decoration-accent/30 decoration-2 md:decoration-4 lg:decoration-8">extraordinary.</span>
            </h2>
            
            <a 
              href="mailto:mubashirkhan3944@gmail.com" 
              className="reveal relative font-display text-sm md:text-2xl lg:text-4xl group transition-all hover:text-accent flex items-center justify-center gap-2 md:gap-4 bg-white/5 border border-white/10 px-4 py-3 md:px-8 md:py-5 rounded-2xl md:rounded-3xl break-all"
            >
              mubashirkhan3944@gmail.com
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>
        </div>

        {/* Social Blocks */}
        {socials.map((social, i) => (
          <a 
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-reveal bento-card p-8 flex flex-col justify-between items-center group transition-all duration-300 hover:scale-[1.02] bg-bg-tertiary text-white"
          >
             <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-muted">Social</div>
             <div className="text-xl font-display uppercase tracking-widest group-hover:scale-110 group-hover:text-accent transition-all duration-300">{social.name}</div>
             <div className="w-9 h-9 rounded-full border border-white/10 text-accent flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-bg group-hover:border-accent">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
             </div>
          </a>
        ))}

        {/* Status Block */}
        <div className="md:col-span-1 bento-card p-6 flex items-center justify-center gap-4 bg-bg-tertiary">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted">Remote Ready</span>
        </div>
      </div>
    </div>
  );
}
