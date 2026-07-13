import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ["Design", "Create", "Inspire"];
const DURATION_MS = 2700;

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(Math.floor((progress / DURATION_MS) * 100), 100);
      
      setCount(percentage);

      // 3 words over DURATION_MS (e.g. 2700ms)
      const wordProgress = Math.floor(progress / (DURATION_MS / 3));
      if (wordProgress < 3 && wordProgress !== wordIndex) {
        setWordIndex(wordProgress);
      }

      if (percentage < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]); // Excluded wordIndex intentionally to avoid re-triggering

  useEffect(() => {
    // Also manage word change separately if rAF approach falls short on precise timing,
    // but the rAF approach above works fine.
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-10">
      {/* Top Left */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Center Words */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden h-24 md:h-32 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {WORDS[wordIndex] || WORDS[2]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Layout */}
      <div className="flex flex-col gap-4 mt-auto">
        {/* Bottom Right Counter */}
        <div className="flex justify-end w-full">
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-[3px] bg-stroke/50 w-full overflow-hidden">
          <div
            className="h-full accent-gradient origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
