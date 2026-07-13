import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Satisfied Clients" },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-stroke/50">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center justify-center text-center ${i !== 0 ? 'pt-12 md:pt-0' : ''}`}
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
