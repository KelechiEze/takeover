'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const videoUrl = 'https://www.youtube.com/embed/f3A8s-SAIuY?autoplay=1&rel=0';

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const modal = modalRef.current;
    const content = contentRef.current;
    if (modal && content) {
      if (isOpen) {
        setVideoSrc(videoUrl);
        gsap.to(modal, { autoAlpha: 1, duration: 0.3 });
        gsap.fromTo(
          content,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        gsap.to(content, {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => setVideoSrc(''),
        });
        gsap.to(modal, { autoAlpha: 0, duration: 0.4, delay: 0.1 });
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  if (!isOpen && modalRef.current?.style.visibility === 'hidden') return null;

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black/80 z-[101] invisible flex justify-center items-center p-4"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div 
        ref={contentRef} 
        className="relative w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors"
          aria-label="Close video player"
        >
          <X className="h-8 w-8" />
        </button>
        {videoSrc && (
          <iframe
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-2xl"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
