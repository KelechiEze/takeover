'use client';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const testimonialsData = [
  {
    name: 'Nick Carter',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    text: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Ben White',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop',
    text: 'Gnissimos ducimus qui blanditiis praesentium voluptatem deleniti atque corrupti quos dolores et quas molestias excepturi, sint occaecati gnissimos doloremque.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Paula Liberstein',
    location: 'Phoenix, AZ',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Nicole Brown',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    text: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Stacy Green',
    location: 'Atlanta, GA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    text: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Tonya Rowlands',
    location: 'Omaha, NE',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
    text: 'Ducimus qui blanditiis praesentium voluptatem deleniti atque corrupti quos dolores et quas molestias excepturi.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Andrew Walker',
    location: 'Omaha, NE',
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Peter Phillips',
    location: 'Marshfield, WI',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    text: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Feb 8, 2024',
  },
  {
    name: 'Jane Doe',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Feb 7, 2024',
  },
  {
    name: 'John Smith',
    location: 'Chicago, IL',
    avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1976&auto=format&fit=crop',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    date: 'Feb 7, 2024',
  },
];

const PlusGrid: React.FC = () => (
  <div className="grid grid-cols-5 gap-2 w-fit">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="relative w-2 h-2">
        <div className="absolute w-full h-[2px] bg-orange-500 top-1/2 -translate-y-1/2" />
        <div className="absolute h-full w-[2px] bg-orange-500 left-1/2 -translate-x-1/2" />
      </div>
    ))}
  </div>
);

const TestimonialsSection: React.FC = () => {
  const initialCount = 8;
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedTestimonials, setDisplayedTestimonials] = useState(testimonialsData.slice(0, initialCount));
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Animate-in logic
    if (isExpanded && displayedTestimonials.length > initialCount) {
      const newItems = Array.from(gridRef.current!.children).slice(initialCount);
      if (newItems.length > 0) {
        gsap.fromTo(newItems, 
          { autoAlpha: 0, y: 40 }, 
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out' }
        );
      }
    }
  }, [isExpanded, displayedTestimonials.length]);

  const handleToggle = () => {
    if (isExpanded) {
      // Animate-out and collapse
      const itemsToHide = Array.from(gridRef.current!.children).slice(initialCount);
      gsap.to(itemsToHide, {
        autoAlpha: 0,
        y: 40,
        duration: 0.5,
        stagger: {
          each: 0.07,
          from: "end"
        },
        ease: 'power2.in',
        onComplete: () => {
          setIsExpanded(false);
          setDisplayedTestimonials(testimonialsData.slice(0, initialCount));
        }
      });
    } else {
      // Expand
      setIsExpanded(true);
      setDisplayedTestimonials(testimonialsData);
    }
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-end mb-4">
          <PlusGrid />
        </div>
        <div className="text-center mb-16">
          <p className="font-semibold tracking-widest text-sm uppercase text-gray-400 mb-2">FEEDBACK</p>
          <h2 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">What our customers are saying about the latest events</h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="border border-gray-800 rounded-lg p-6 flex flex-col gap-4 bg-[#111111]/50 h-full">
              <div className="flex items-center gap-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover" 
                  width={48}
                  height={48}
                  quality={85}
                />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm flex-grow">{testimonial.text}</p>
              <p className="text-xs text-gray-500 mt-auto pt-4">{testimonial.date}</p>
            </div>
          ))}
        </div>
        {testimonialsData.length > initialCount && (
          <div className="text-center mt-12">
            <button 
              onClick={handleToggle}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-md hover:scale-105 transform transition-transform duration-300"
              aria-expanded={isExpanded}
              aria-controls="testimonials-grid"
            >
              {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;