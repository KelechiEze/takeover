'use client';
import React, { useState } from 'react';
import { Twitter, Linkedin, Mail, ChevronDown } from 'lucide-react';
import SpeakerModal from './SpeakerModal';
import Image from 'next/image';
import './SpeakersSection.css';

interface Speaker {
  name: string;
  title: string;
  img: string;
  social: { twitter: string; linkedin: string; mail: string };
  bio: string;
}

const speakers: Speaker[] = [
  {
    name: 'Andy Walker',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop', // Nathan Jones image
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'Andy Walker is a seasoned entrepreneur and tech visionary with over 20 years of experience in the software industry. He is passionate about building scalable solutions that solve real-world problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Diana Green',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop', // David Matthews image
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'Diana Green is a leading expert in digital marketing and brand strategy. Her innovative campaigns have helped numerous Fortune 500 companies achieve unprecedented growth. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
  },
  {
    name: 'Nathan Jones',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'Nathan Jones specializes in financial technology and blockchain. He is a frequent speaker at international conferences, sharing his insights on the future of finance. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    name: 'Natalie Carter',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop', // David Matthews image
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'Natalie Carter is a user experience design leader known for her human-centered approach. She believes that great design can change the world for the better. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.'
  },
  {
    name: 'Anna Smith',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop', // Nathan Jones image
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'Dr. Anna Smith is a research scientist in the field of Artificial Intelligence. Her work focuses on machine learning models and their applications in healthcare. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.'
  },
  {
    name: 'David Matthews',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'David Matthews is a venture capitalist who has funded some of the most successful startups of the last decade. He enjoys mentoring young entrepreneurs. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.'
  },
  {
    name: 'Linda Grant',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop', // Nathan Jones image
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'Linda Grant is an author and journalist covering technology and culture. Her articles have been featured in major publications worldwide. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.'
  },
  {
    name: 'Nick Lewis',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop', // David Matthews image
    social: { twitter: '#', linkedin: '#', mail: '#' },
    bio: 'Nick Lewis is a cybersecurity expert who helps organizations protect their digital assets. He is a strong advocate for online privacy and security. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.'
  },
];

const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <>
      <section className="speakers-section">
        <div className="speakers-container">
          <div className="speakers-header">
            <h2 className="speakers-title">Speakers</h2>
            <ChevronDown className="title-icon" />
          </div>
          <div className="speakers-grid">
            {speakers.map((speaker, index) => (
              <div key={index} className="speaker-card">
                <div className="speaker-image-wrapper">
                  <Image 
                    src={speaker.img} 
                    alt={speaker.name} 
                    className="speaker-image" 
                    width={300}
                    height={400}
                    quality={90}
                  />
                  <div className="social-overlay">
                    <div className="social-links-container">
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
                    <button 
                      className="read-bio-btn" 
                      onClick={() => setSelectedSpeaker(speaker)}
                      aria-label={`Read ${speaker.name}'s biography`}
                    >
                      Read Bio
                    </button>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4 className="speaker-name">{speaker.name}</h4>
                  <p className="speaker-title">{speaker.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
    </>
  );
};

export default SpeakersSection;