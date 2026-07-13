import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const VIDEO_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const Footer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // HLS Setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_SRC;
    }
  }, []);

  // GSAP Marquee
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer id="resume" className="relative bg-bg pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden">
      {/* Background Video Flipped */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-6">
        
        {/* Marquee */}
        <div className="w-full overflow-hidden mb-16 flex whitespace-nowrap">
          <div ref={marqueeRef} className="flex whitespace-nowrap text-6xl md:text-8xl lg:text-9xl font-display italic text-text-primary/10 tracking-tight">
            {/* Repeated text (10x "BUILDING THE FUTURE • ") duplicated to allow seamless looping */}
            <div className="flex">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={`1-${i}`} className="mx-4">BUILDING THE FUTURE •</span>
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={`2-${i}`} className="mx-4">BUILDING THE FUTURE •</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl text-text-primary mb-8 tracking-tight">
            Let's create something <span className="font-display italic">extraordinary.</span>
          </h2>
          <a href="mailto:hello@michaelsmith.com" className="group relative inline-flex items-center justify-center rounded-full text-base md:text-lg px-8 py-4 transition-transform hover:scale-105 bg-text-primary text-bg hover:text-text-primary">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-[2px] bg-bg rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              hello@michaelsmith.com <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
          <div className="flex items-center gap-3 bg-surface/50 backdrop-blur border border-stroke px-4 py-2 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs text-text-primary">Available for projects</span>
          </div>

          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-sm text-muted hover:text-text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>

          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Michael Smith.
          </div>
        </div>

      </div>
    </footer>
  );
};
