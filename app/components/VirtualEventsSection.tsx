'use client';
import React from 'react';
import { Mic, BookOpen, ArrowUp } from 'lucide-react';

const DottedGrid: React.FC = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" className="absolute top-1/2 right-20 opacity-20 -translate-y-1/2 hidden lg:block">
    <defs>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="2" fill="orange" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#smallGrid)" />
  </svg>
);


const WavyLine: React.FC = () => (
    <svg width="150" height="100" viewBox="0 0 200 100" className="absolute top-0 right-0 -mt-8 -mr-4 hidden lg:block">
        <path d="M 10 80 Q 50 10, 90 60 T 170 20" stroke="white" fill="transparent" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M 20 90 Q 60 20, 100 70 T 180 30" stroke="#FF5733" fill="transparent" strokeWidth="3" />
    </svg>
);


const VirtualEventsSection: React.FC = () => {
  return (
    <section className="bg-black py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-[500px]">
          <div className="col-span-1 row-span-1 bg-gradient-to-br from-orange-500 to-red-600 p-6 md:p-8 flex flex-col justify-between rounded-lg">
            <div>
              <p className="font-semibold tracking-widest text-sm uppercase">Stay Connected</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Dive into the interactive world of online forums</h3>
            </div>
          </div>
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
              alt="Woman in a video conference" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" 
              alt="Man working on a laptop" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="relative z-10">
          <WavyLine />
          <DottedGrid />
          <div>
            <p className="font-semibold tracking-widest text-sm uppercase text-gray-400">Online</p>
            <h2 className="text-4xl md:text-5xl font-extrabold my-4 leading-tight">Where creativity meets virtual events</h2>
            <p className="text-gray-400 max-w-lg mb-12">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-900/50 border border-orange-700/50 rounded-md">
                  <Mic className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Expert speakers</h4>
                  <p className="text-gray-400 max-w-md mt-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-900/50 border border-orange-700/50 rounded-md">
                  <BookOpen className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Education programs</h4>
                  <p className="text-gray-400 max-w-md mt-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 p-3 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </section>
  );
};

export default VirtualEventsSection;
