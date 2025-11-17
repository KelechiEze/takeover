'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Menu,
  Twitter,
  Linkedin,
  Instagram,
  Search,
  Bell,
  X
} from 'lucide-react';
import NotificationModal from './NotificationModal';
import SearchModal from './SearchModal';
import Image from 'next/image';
import Link from 'next/link';

const backgroundImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
];

const BabyleeLogo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L27.0711 2.92893L30 10L27.0711 17.0711L20 20L12.9289 17.0711L10 10L12.9289 2.92893L20 0Z" fill="url(#paint0_linear_1_2)"/>
      <path d="M2.92893 12.9289L0 20L2.92893 27.0711L10 30L17.0711 27.0711L20 20L17.0711 12.9289L10 10L2.92893 12.9289Z" fill="url(#paint1_linear_1_2)"/>
      <path d="M22.9289 22.9289L20 20L22.9289 17.0711L30 20L37.0711 22.9289L40 30L37.0711 37.0711L30 40L22.9289 37.0711L20 30L22.9289 22.9289Z" fill="url(#paint2_linear_1_2)"/>
      <defs>
        <linearGradient id="paint0_linear_1_2" x1="20" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D4D"/>
          <stop offset="1" stopColor="#F99945"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_2" x1="10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D4D"/>
          <stop offset="1" stopColor="#F99945"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_2" x1="30" y1="17.071" x2="30" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D4D"/>
          <stop offset="1" stopColor="#F99945"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-2xl font-bold tracking-wider">Babylee Ent</span>
  </div>
);

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = heroContentRef.current;
    if (el) {
      gsap.fromTo(
        el.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }
  }, [currentImageIndex]);
  
  useEffect(() => {
    if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current, { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power3.out' });
    } else {
        gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [isMenuOpen])

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Images */}
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: 0,
            }}
          >
            <Image
              src={src}
              alt="Conference background"
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60 z-1"></div>
        
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-10 p-4 md:p-8">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <BabyleeLogo />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <div className="relative">
                <Bell className="h-6 w-6 cursor-pointer hover:text-orange-500 transition-colors" onClick={() => setIsNotificationsOpen(true)} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>
              <Search className="h-6 w-6 cursor-pointer hover:text-orange-500 transition-colors" onClick={() => setIsSearchOpen(true)} />
              <Menu className="h-8 w-8 cursor-pointer hover:text-orange-500 transition-colors" />
            </div>
            <div className="md:hidden">
              <Menu className="h-8 w-8 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-5 flex flex-col justify-center h-full text-left px-4 md:px-16 lg:px-24">
          <div ref={heroContentRef} className="max-w-2xl">
            <p className="text-lg md:text-xl font-semibold text-orange-400 tracking-wider">
              Start Registration: 22 July, 2026
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold my-4 leading-tight">
              Online conferences: new era unfolds
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-md hover:scale-105 transform transition-transform duration-300 w-full sm:w-auto">
                GET TICKETS
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        
        {/* Social Sidebar */}
        <aside className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-2 p-2 md:p-4 bg-black/30 backdrop-blur-sm rounded-l-lg">
            <a href="#" className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-sky-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-blue-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-pink-500 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
        </aside>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="fixed top-0 right-0 h-full w-full max-w-xs bg-black z-[101] shadow-lg p-8 transform translate-x-full md:hidden">
         <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-8 w-8" />
            </button>
         </div>
         <div className="flex flex-col gap-6 text-xl items-center">
            <Link href="/" className="font-semibold hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/speakers" className="font-semibold hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Speakers</Link>
            <Link href="/schedule" className="font-semibold hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Schedule</Link>
            <Link href="/tickets" className="font-semibold hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Tickets</Link>
            <hr className="border-gray-700 w-full my-4" />
             <div className="flex items-center gap-6">
                <div className="relative">
                    <Bell className="h-6 w-6 cursor-pointer hover:text-orange-500 transition-colors" onClick={() => { setIsNotificationsOpen(true); setIsMenuOpen(false); }} />
                </div>
                <Search className="h-6 w-6 cursor-pointer hover:text-orange-500 transition-colors" onClick={() => { setIsSearchOpen(true); setIsMenuOpen(false); }} />
            </div>
            <div className="flex gap-4 mt-8">
                <a href="#" className="p-3 bg-gray-800 rounded-md cursor-pointer hover:bg-sky-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-md cursor-pointer hover:bg-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-md cursor-pointer hover:bg-pink-500 transition-colors">
                    <Instagram className="h-5 w-5" />
                </a>
            </div>
         </div>
      </div>
      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-[100] md:hidden" onClick={() => setIsMenuOpen(false)} />}

      {/* Modals */}
      <NotificationModal isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default HeroSection;