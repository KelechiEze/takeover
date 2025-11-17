'use client';
import React from 'react';
import { Ticket, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left-col">
          <div className="about-image-wrapper-1">
            <Image 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
              alt="People networking at a conference" 
              className="about-image-1" 
              width={500}
              height={600}
              priority
            />
          </div>
        </div>
        <div className="about-right-col">
          <div className="about-image-wrapper-2">
            <Image 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
              alt="Audience at a conference" 
              className="about-image-2" 
              width={500}
              height={400}
            />
            <div className="speakers-info-box">
              <div className="mic-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="#FF5733"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V24h2v-3.06A9 9 0 0 0 21 12v-2h-2z" fill="#FF5733"/>
                </svg>
              </div>
              <p><span>15</span> iconic Speakers</p>
            </div>
          </div>
          <div className="about-text-content">
            <p className="about-subtitle">
              ABOUT EVENT <ArrowRight size={16} style={{ display: 'inline-block', marginLeft: '4px' }}/>
            </p>
            <h2 className="about-title">Meet Web Development Talents Around World</h2>
            <p className="about-description">
              Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big and amazing marketing & branding minds from all over the world. Discussing the best techniques for branding to deep dive into consumers mind. Will try to spread best knowledge about marketing.
            </p>
            <div className="about-buttons">
              <button className="about-btn btn-ticket">
                <Ticket size={20} />
                BUY TICKET
              </button>
              <button className="about-btn btn-location">
                <MapPin size={20} />
                LOCATION
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative shapes */}
      <div className="deco-shape shape-1"></div>
      <div className="deco-shape shape-2"></div>
      <div className="deco-shape shape-3"></div>
      <div className="deco-shape shape-4"></div>
    </section>
  );
};

export default AboutSection;