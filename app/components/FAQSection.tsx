'use client';
import React, { useState } from 'react';
import { Play, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const faqData = [
  {
    question: 'Do you offer private event services?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    question: 'How much are the tickets?',
    answer: 'Ticket prices vary depending on the event and package. Please check the specific event page for detailed pricing information.',
  },
  {
    question: 'Do you hire event managers?',
    answer: 'We are always looking for talented individuals to join our team. Please visit our careers page for current openings.',
  },
];

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-6">
    <button
      className="w-full flex justify-between items-center text-left"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <h3 className={`text-lg font-semibold flex items-center gap-4 transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
        {isOpen ? <Minus className="w-5 h-5 text-gray-800 flex-shrink-0" /> : <Plus className="w-5 h-5 text-gray-800 flex-shrink-0" />}
        {question}
      </h3>
    </button>
    <div
      className="grid transition-all duration-500 ease-in-out"
      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
    >
        <div className="overflow-hidden">
            <div className="mt-4 pl-9">
                <p className="text-gray-600">{answer}</p>
            </div>
        </div>
    </div>
  </div>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-20 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: FAQ */}
        <div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 cursor-pointer">
            <Play className="w-8 h-8 text-black fill-current ml-1" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
            Answers to your event queries
          </h2>
          <div>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Image and Stats */}
        <div className="relative min-h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          <div className="w-full h-full max-w-[280px] sm:max-w-xs md:max-w-sm relative">
            <Image
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1887&auto=format&fit=crop"
              alt="Woman smiling"
              className="w-full h-[90%] object-cover object-top"
              width={400}
              height={600}
              priority
            />
            <div className="absolute bottom-12 left-2 sm:left-0 lg:-left-20 z-10 w-48 lg:w-64 p-4 lg:p-6 bg-[#F96D45] text-white rounded-lg shadow-2xl">
              <p className="font-semibold text-lg">Great events</p>
              <p className="text-5xl lg:text-6xl font-bold my-2">100+</p>
              <p className="text-sm">Adipiscing elit, do eiusm.</p>
            </div>
            <div className="absolute bottom-32 right-2 sm:right-0 lg:-right-20 w-48 lg:w-64 p-4 lg:p-6 bg-[#6381F2] text-white rounded-lg shadow-2xl">
              <p className="font-semibold text-lg">Programs</p>
              <p className="text-5xl lg:text-6xl font-bold my-2">16</p>
              <p className="text-sm">Adipiscing elit, do eiusm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;