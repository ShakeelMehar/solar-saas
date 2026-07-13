import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Automotive Motion",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-7",
  },
  {
    title: "Urban Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-5",
  },
  {
    title: "Human Perspective",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-5",
  },
  {
    title: "Brand Identity",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-7",
  }
];

export const SelectedWorks: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-md">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>

          <a href="#work" className="group hidden md:inline-flex relative items-center justify-center rounded-full text-sm px-6 py-3 transition-transform hover:scale-105 border border-stroke bg-surface text-text-primary hover:border-transparent">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-[2px] bg-bg rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              View all work <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden min-h-[300px] md:min-h-[450px] cursor-pointer ${project.span}`}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Halftone Overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                  backgroundSize: '4px 4px',
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex items-center justify-center">
                {/* Hover Label */}
                <div className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift" />
                  <div className="absolute inset-[2px] bg-text-primary rounded-full" />
                  <span className="relative z-10 text-bg text-sm font-medium flex items-center gap-2">
                    View — <span className="font-display italic text-lg">{project.title}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <a href="#work" className="group relative inline-flex items-center justify-center rounded-full text-sm px-6 py-3 border border-stroke bg-surface text-text-primary">
            <span className="relative z-10 flex items-center gap-2">
              View all work <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
