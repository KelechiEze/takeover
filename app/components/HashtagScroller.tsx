import React from 'react';

const hashtags = [
  '#Venue',
  '#Speakers',
  '#Tickets',
  '#Conference',
  '#Online',
  '#Expert',
  '#Creative',
  '#Event',
  '#Networking',
  '#Innovation',
  '#Startup',
  '#Growth'
];

const HashtagScroller: React.FC = () => {
  const extendedHashtags = [...hashtags, ...hashtags];

  return (
    <div className="bg-[#FF5733] py-4 md:py-6 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll">
        {extendedHashtags.map((tag, index) => (
          <span
            key={index}
            className="text-white text-xl md:text-3xl font-bold mx-4 md:mx-8"
          >
            {tag}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HashtagScroller;