'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { X } from 'lucide-react';
import './GallerySection.css';

const topImages = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
];

const bottomImages = [
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop',
];

const GallerySection: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const topRowRef = useRef<HTMLDivElement>(null);
    const bottomRowRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const modalImageRef = useRef<HTMLImageElement>(null);
    const topTween = useRef<gsap.core.Tween | null>(null);
    const bottomTween = useRef<gsap.core.Tween | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const topRow = topRowRef.current;
        const bottomRow = bottomRowRef.current;
        const gallery = galleryRef.current;
        if (!topRow || !bottomRow || !gallery) return;

        // Set initial positions
        gsap.set(topRow, { xPercent: 0 });
        gsap.set(bottomRow, { xPercent: -50 });
        
        // Right to Left animation for top row
        topTween.current = gsap.to(topRow, {
            xPercent: -50,
            duration: 40,
            ease: 'none',
            repeat: -1,
        });

        // Left to Right animation for bottom row
        bottomTween.current = gsap.to(bottomRow, {
            xPercent: 0,
            duration: 40,
            ease: 'none',
            repeat: -1,
        });

        const handleMouseEnter = () => {
            topTween.current?.timeScale(0.1);
            bottomTween.current?.timeScale(0.1);
        };

        const handleMouseLeave = () => {
            topTween.current?.timeScale(1);
            bottomTween.current?.timeScale(1);
        };

        gallery.addEventListener('mouseenter', handleMouseEnter);
        gallery.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            gallery.removeEventListener('mouseenter', handleMouseEnter);
            gallery.removeEventListener('mouseleave', handleMouseLeave);
            topTween.current?.kill();
            bottomTween.current?.kill();
        };
    }, []);

    useEffect(() => {
        const modal = modalRef.current;
        const modalImage = modalImageRef.current;
        
        if (selectedImage && modal && modalImage) {
            // Pause scrolling animations
            topTween.current?.pause();
            bottomTween.current?.pause();

            // Show modal with animation
            gsap.to(modal, {
                autoAlpha: 1,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.fromTo(modalImage, 
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
            );
        } else if (modal) {
            // Hide modal with animation
            gsap.to(modal, {
                autoAlpha: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    // Resume scrolling animations
                    topTween.current?.play();
                    bottomTween.current?.play();
                }
            });
        }
    }, [selectedImage]);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === modalRef.current) {
            handleCloseModal();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleCloseModal();
        }
    };

    return (
        <>
            <section ref={galleryRef} className="gallery-section">
                <div className="gallery-row-wrapper">
                    <div ref={topRowRef} className="gallery-row">
                        {[...topImages, ...topImages].map((src, index) => (
                            <div key={`top-${index}`} className="gallery-image-container">
                                <Image 
                                    src={src} 
                                    alt={`Top gallery image ${index + 1}`} 
                                    className="gallery-image" 
                                    width={300}
                                    height={200}
                                    loading="lazy"
                                    onClick={() => handleImageClick(src)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-row-wrapper">
                    <div ref={bottomRowRef} className="gallery-row">
                        {[...bottomImages, ...bottomImages].map((src, index) => (
                            <div key={`bottom-${index}`} className="gallery-image-container">
                                <Image 
                                    src={src} 
                                    alt={`Bottom gallery image ${index + 1}`} 
                                    className="gallery-image" 
                                    width={300}
                                    height={200}
                                    loading="lazy"
                                    onClick={() => handleImageClick(src)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for enlarged image */}
            <div
                ref={modalRef}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 opacity-0 invisible"
                onClick={handleBackdropClick}
                onKeyDown={handleKeyDown}
                role="dialog"
                aria-modal="true"
                aria-label="Enlarged image view"
            >
                <button
                    className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
                    onClick={handleCloseModal}
                    aria-label="Close image"
                >
                    <X className="w-8 h-8" />
                </button>
                
                <div className="relative max-w-4xl max-h-full">
                    {selectedImage && (
                        <Image
                            ref={modalImageRef}
                            src={selectedImage}
                            alt="Enlarged gallery image"
                            className="max-w-full max-h-full object-contain"
                            width={1200}
                            height={800}
                            quality={95}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default GallerySection;