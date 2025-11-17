'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const text = textRef.current;
    const grid = gridRef.current;

    // If no preloader element, finish immediately
    if (!preloader || !text || !grid) {
      console.warn('Preloader elements not found');
      setTimeout(onFinish, 100);
      return;
    }

    const blocks = preloader.querySelectorAll('.building-block');
    
    // Create GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset all elements to initial state
      gsap.set([grid, blocks, text], { 
        opacity: 0,
        y: 0 
      });

      // Set initial grid state
      gsap.set(grid, {
        rotationX: 75,
        scale: 1.5,
        x: 100,
        y: 180,
        transformOrigin: "center center",
        opacity: 1
      });

      // Animation sequence
      tl.to(grid, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      })
      .to(blocks, {
        y: 0,
        opacity: 0.8,
        scaleY: 1,
        transformOrigin: 'bottom',
        duration: 1.5,
        stagger: {
          each: 0.08, // Increased stagger time for better visibility
          from: 'start',
        },
        ease: 'elastic.out(1, 0.5)',
      }, "-=0.5")
      .to(text, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=1")
      .to(preloader, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: onFinish,
      }, "+=1.5"); // Added delay before fade out

    }, preloader); // Scope to preloader element

    // Cleanup function
    return () => {
      ctx.revert(); // Properly cleanup all GSAP animations
    };
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col justify-center items-center"
      aria-label="Loading animation"
      role="status"
    >
      <div className="w-64 h-64 flex justify-center items-center" style={{ perspective: '1000px' }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          className="overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="blockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F99945" />
              <stop offset="100%" stopColor="#FF5733" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Perspective Grid */}
          <g ref={gridRef} className="grid" aria-hidden="true">
            <path 
              d="M-80,0 L80,0 M-70,-10 L70,-10 M-60,-20 L60,-20 M-50,-30 L50,-30 M-40,-40 L40,-40 M-30,-50 L30,-50 M-20,-60 L20,-60 M-10,-70 L10,-70" 
              stroke="rgba(255, 87, 51, 0.2)" 
              strokeWidth="1" 
            />
            <path 
              d="M0,-80 L0,0 M-10,-70 L-10,0 M10,-70 L10,0 M-20,-60 L-20,0 M20,-60 L20,0 M-30,-50 L-30,0 M30,-50 L30,0 M-40,-40 L-40,0 M40,-40 L40,0 M-50,-30 L-50,0 M50,-30 L50,0 M-60,-20 L-60,0 M60,-20 L60,0 M-70,-10 L-70,0 M70,-10 L70,0" 
              stroke="rgba(255, 87, 51, 0.2)" 
              strokeWidth="1" 
            />
          </g>

          {/* Building Blocks */}
          <g style={{ filter: 'url(#glow)' }} aria-hidden="true">
            <rect className="building-block" x="80" y="160" width="40" height="20" fill="url(#blockGradient)" />
            <rect className="building-block" x="75" y="140" width="50" height="20" fill="url(#blockGradient)" />
            <rect className="building-block" x="70" y="120" width="60" height="20" fill="url(#blockGradient)" />
            <rect className="building-block" x="65" y="100" width="70" height="20" fill="url(#blockGradient)" />
            <rect className="building-block" x="70" y="80" width="60" height="20" fill="url(#blockGradient)" />
            <rect className="building-block" x="75" y="60" width="50" height="20" fill="url(#blockGradient)" />
            <rect className="building-block" x="85" y="40" width="30" height="20" fill="url(#blockGradient)" />
            <rect className="building-block" x="90" y="20" width="20" height="20" fill="url(#blockGradient)" />
          </g>
        </svg>
      </div>
      <p ref={textRef} className="text-xl md:text-2xl font-semibold text-gray-300 mt-8 tracking-widest">
        BUILDING THE FUTURE...
      </p>
    </div>
  );
};

export default Preloader;