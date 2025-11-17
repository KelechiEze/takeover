import React from 'react';
import { Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import Link from 'next/link';

const BabyleeLogo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L27.0711 2.92893L30 10L27.0711 17.0711L20 20L12.9289 17.0711L10 10L12.9289 2.92893L20 0Z" fill="url(#paint0_linear_footer)"/>
      <path d="M2.92893 12.9289L0 20L2.92893 27.0711L10 30L17.0711 27.0711L20 20L17.0711 12.9289L10 10L2.92893 12.9289Z" fill="url(#paint1_linear_footer)"/>
      <path d="M22.9289 22.9289L20 20L22.9289 17.0711L30 20L37.0711 22.9289L40 30L37.0711 37.0711L30 40L22.9289 37.0711L20 30L22.9289 22.9289Z" fill="url(#paint2_linear_footer)"/>
      <defs>
        <linearGradient id="paint0_linear_footer" x1="20" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D4D"/>
          <stop offset="1" stopColor="#F99945"/>
        </linearGradient>
        <linearGradient id="paint1_linear_footer" x1="10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D4D"/>
          <stop offset="1" stopColor="#F99945"/>
        </linearGradient>
        <linearGradient id="paint2_linear_footer" x1="30" y1="17.071" x2="30" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D4D"/>
          <stop offset="1" stopColor="#F99945"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-2xl font-bold tracking-wider text-white">Babylee Ent</span>
  </div>
);

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription');
  };

  return (
    <footer className="bg-[#111111] text-gray-400 py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <BabyleeLogo />
            <p className="mt-4 text-sm leading-relaxed">
              Empowering the next generation of entrepreneurs through cutting-edge conferences, networking, and invaluable resources.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/speakers" className="hover:text-orange-500 transition-colors">Speakers</Link></li>
              <li><Link href="/schedule" className="hover:text-orange-500 transition-colors">Schedule</Link></li>
              <li><Link href="/tickets" className="hover:text-orange-500 transition-colors">Get Tickets</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4 tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
               <a href="#" aria-label="Twitter" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                 <Twitter className="h-5 w-5" />
               </a>
               <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="#" aria-label="Instagram" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                 <Instagram className="h-5 w-5" />
               </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4 tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest news and events.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Email for newsletter"
                required
              />
              <button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity" aria-label="Subscribe to newsletter">
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Babylee Ent. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;