import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ENTRIES = [
  {
    title: "The evolution of digital spaces",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200",
    date: "Oct 12, 2025",
    readTime: "4 min read",
  },
  {
    title: "Typography in modern web design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=200",
    date: "Sep 28, 2025",
    readTime: "6 min read",
  },
  {
    title: "Building scalable design systems",
    image: "https://images.unsplash.com/photo-1507238692062-711155ebe112?auto=format&fit=crop&q=80&w=200",
    date: "Aug 15, 2025",
    readTime: "8 min read",
  },
  {
    title: "Motion and emotion in interfaces",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200",
    date: "Jul 03, 2025",
    readTime: "5 min read",
  }
];

export const Journal: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-md">
              Musings on design, technology, and everything in between.
            </p>
          </div>

          <a href="#journal" className="group hidden md:inline-flex relative items-center justify-center rounded-full text-sm px-6 py-3 transition-transform hover:scale-105 border border-stroke bg-surface text-text-primary hover:border-transparent">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-[2px] bg-bg rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>

        {/* Entries List */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, i) => (
            <motion.a
              key={entry.title}
              href="#journal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col sm:flex-row items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors duration-300"
            >
              <div className="w-full sm:w-24 h-48 sm:h-24 rounded-[28px] sm:rounded-full overflow-hidden shrink-0">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="flex-1 flex flex-col gap-2 w-full sm:px-4 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl text-text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                  {entry.title}
                </h3>
                <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-muted">
                  <span>{entry.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{entry.readTime}</span>
                </div>
              </div>

              <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-full border border-stroke items-center justify-center mr-2 group-hover:bg-text-primary group-hover:text-bg transition-colors duration-300">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <a href="#journal" className="group relative inline-flex items-center justify-center rounded-full text-sm px-6 py-3 border border-stroke bg-surface text-text-primary">
            <span className="relative z-10 flex items-center gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
