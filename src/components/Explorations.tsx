import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1507238692062-711155ebe112?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=600",
];

export const Explorations: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.fromTo(col1Ref.current,
        { y: '0%' },
        {
          y: '-50%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );

      gsap.fromTo(col2Ref.current,
        { y: '30%' },
        {
          y: '-80%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-bg min-h-[300vh] overflow-hidden">
      
      {/* Layer 1: Pinned Center */}
      <div ref={contentRef} className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center pointer-events-none z-10 px-6 text-center">
        <div className="w-8 h-px bg-stroke mb-6" />
        <span className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Explorations</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="text-muted text-sm md:text-base max-w-md mx-auto mb-8">
          A collection of experiments, motion concepts, and unfinished ideas.
        </p>
        <div className="pointer-events-auto">
          <a href="#" className="group relative inline-flex items-center justify-center rounded-full text-sm px-7 py-3.5 transition-transform hover:scale-105 bg-surface border border-stroke text-text-primary hover:border-transparent">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-[2px] bg-bg rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">Follow on Dribbble</span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-hidden flex justify-center">
        <div className="w-full max-w-[1400px] h-full grid grid-cols-2 gap-12 md:gap-40 px-4 md:px-20 pt-[100vh]">
          
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-12 md:gap-32 items-end pt-32">
            {ITEMS.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ rotate: Math.random() > 0.5 ? 2 : -2, scale: 1.05 }}
                className="pointer-events-auto aspect-square w-full max-w-[320px] rounded-2xl overflow-hidden bg-surface border border-stroke shadow-2xl p-2"
              >
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src={item} alt="Exploration" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-12 md:gap-32 items-start mt-48">
            {ITEMS.slice(3, 6).map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ rotate: Math.random() > 0.5 ? -2 : 2, scale: 1.05 }}
                className="pointer-events-auto aspect-square w-full max-w-[320px] rounded-2xl overflow-hidden bg-surface border border-stroke shadow-2xl p-2"
              >
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src={item} alt="Exploration" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
};
