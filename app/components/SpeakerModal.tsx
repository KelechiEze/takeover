'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Twitter, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import './SpeakerModal.css';

interface Speaker {
    name: string;
    title: string;
    img: string;
    social: { twitter: string; linkedin: string; mail: string };
    bio: string;
}

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const panel = panelRef.current;
    if (modal && panel) {
      if (speaker) {
        // Disable body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        gsap.to(modal, { autoAlpha: 1, duration: 0.3 });
        gsap.fromTo(
          panel,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        // Re-enable body scroll when modal closes
        document.body.style.overflow = 'unset';
        
        gsap.to(panel, {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
        gsap.to(modal, { autoAlpha: 0, duration: 0.4, delay: 0.1 });
      }
    }

    // Cleanup function to re-enable scroll
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [speaker]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!speaker) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      className="speaker-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="speaker-modal-title"
      aria-describedby="speaker-modal-bio"
    >
      <div
        ref={panelRef}
        className="speaker-modal-panel"
      >
        <button
          onClick={onClose}
          className="speaker-modal-close-btn"
          aria-label="Close speaker details"
        >
          <X className="icon" />
        </button>
        <div className="speaker-modal-content">
            <div className="speaker-modal-image-container">
                <Image 
                  src={speaker.img} 
                  alt={speaker.name} 
                  className="speaker-modal-image" 
                  width={300}
                  height={400}
                  quality={90}
                />
            </div>
            <div className="speaker-modal-details">
                <h2 id="speaker-modal-title" className="speaker-modal-name">{speaker.name}</h2>
                <p className="speaker-modal-title">{speaker.title}</p>
                <div className="speaker-modal-socials">
                    <a 
                      href={speaker.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${speaker.name}'s Twitter`} 
                      className="social-link"
                    >
                        <Twitter className="icon" />
                    </a>
                    <a 
                      href={speaker.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${speaker.name}'s LinkedIn`} 
                      className="social-link"
                    >
                        <Linkedin className="icon" />
                    </a>
                    <a 
                      href={`mailto:${speaker.social.mail}`} 
                      aria-label={`Email ${speaker.name}`} 
                      className="social-link"
                    >
                        <Mail className="icon" />
                    </a>
                </div>
                <p id="speaker-modal-bio" className="speaker-modal-bio">{speaker.bio}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;