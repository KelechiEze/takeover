import React from 'react';
import Image from 'next/image';

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

const FutureSection: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,87,51,0.2)_0%,_rgba(255,87,51,0)_60%)]"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          <PlusGrid />
          <div>
            <p className="font-semibold tracking-widest text-sm uppercase text-gray-400 mb-2">MODERN SOLUTIONS</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Building the future of events and conferences</h2>
          </div>
          <p className="text-gray-400 max-w-md">
            Inde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis.
          </p>
          <div className="w-full max-w-sm">
            <Image 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
              alt="Speaker at a conference"
              className="rounded-lg object-cover w-full h-auto"
              width={400}
              height={300}
              priority
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="h-[400px] lg:h-[600px] w-full relative">
            <Image 
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop"
                alt="People networking at an event"
                className="w-full h-full object-cover rounded-lg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>
      </div>
    </section>
  );
};

export default FutureSection;