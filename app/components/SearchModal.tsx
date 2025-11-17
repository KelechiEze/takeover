'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const content = contentRef.current;
    if (modal && content) {
      if (isOpen) {
        gsap.to(modal, { autoAlpha: 1, duration: 0.3 });
        gsap.fromTo(
          content,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out', onComplete: () => inputRef.current?.focus() }
        );
      } else {
        gsap.to(content, {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
        gsap.to(modal, { autoAlpha: 0, duration: 0.4, delay: 0.1 });
      }
    }
  }, [isOpen]);

  if (!isOpen && modalRef.current?.style.visibility === 'hidden') return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/80 z-50 invisible flex justify-center items-center p-4"
      style={{ backdropFilter: 'blur(8px)' }}
    >
        <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Close search"
        >
            <X className="h-8 w-8" />
        </button>
      <div ref={contentRef} className="w-full max-w-2xl">
        <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-500" />
            <input 
                ref={inputRef}
                type="text"
                placeholder="Search for speakers, topics, events..."
                className="w-full bg-gray-900/50 border border-gray-700 text-white text-xl rounded-full py-4 pl-16 pr-6 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
            />
        </div>
        <div className="text-center mt-6 text-gray-400">
            <p>
                Try: <span className="font-semibold text-gray-300">"AI in Startups"</span> or <span className="font-semibold text-gray-300">"Marketing Trends"</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
