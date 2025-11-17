import React, { useState, useEffect } from 'react';

const CountdownSection: React.FC = () => {
    // Set a target date far in the future.
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 99);
    targetDate.setHours(targetDate.getHours() + 23);
    targetDate.setMinutes(targetDate.getMinutes() + 59);
    targetDate.setSeconds(targetDate.getSeconds() + 30);

    // FIX: Refactored function to ensure it always returns an object with the correct shape, fixing a TypeScript type error.
    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();

        if (difference > 0) {
            return {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60),
                Seconds: Math.floor((difference / 1000) % 60),
            };
        }
        
        return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
    };
    
    // Initialize with static values from the image for the initial render.
    const [timeLeft, setTimeLeft] = useState({ Days: 99, Hours: 23, Minutes: 59, Seconds: 27 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <section className="relative bg-gradient-to-r from-[#FF8C42] to-[#FF5733] text-white py-20 px-4 md:px-8 overflow-hidden">
            {/* Dotted Overlay */}
            <div 
                className="absolute inset-0" 
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '15px 15px'
                }}
            ></div>
            
            {/* Left Decorative Shape */}
            <div className="absolute top-0 left-0 h-full w-32 -translate-x-1/2 opacity-80 z-0 hidden lg:block">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-16 h-48 bg-white/80 skew-x-[-15deg]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-8 w-16 h-64 bg-white/60 skew-x-[-15deg]"></div>
            </div>
            
            {/* Right Decorative Shape */}
            <div className="absolute top-0 right-0 h-full w-48 translate-x-1/2 opacity-80 z-0 hidden lg:block">
                 <div className="absolute top-1/2 -translate-y-1/2 right-0 w-16 h-48 bg-white/80 skew-x-[15deg]"></div>
                 <div className="absolute top-1/2 -translate-y-1/2 right-8 w-16 h-64 bg-white/60 skew-x-[15deg]"></div>
                 <div className="absolute top-1/2 -translate-y-1/2 right-16 w-16 h-80 bg-red-400/50 skew-x-[15deg]"></div>
            </div>

            <div className="container mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="text-center lg:text-left">
                    <p className="font-semibold tracking-widest text-sm uppercase">Countdown</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold my-2 leading-tight max-w-lg">The most anticipated multi event is coming</h2>
                </div>

                <div className="flex items-start gap-3 sm:gap-6">
                    {Object.entries(timeLeft).map(([unit, value], index, arr) => (
                        <React.Fragment key={unit}>
                            <div className="text-center">
                                <span className="text-5xl sm:text-6xl font-bold pb-2 border-b-2 border-white/50">{String(value).padStart(2, '0')}</span>
                                <span className="block text-xs sm:text-sm uppercase tracking-wider mt-2">{unit}</span>
                            </div>
                            {index < arr.length - 1 && <span className="text-4xl sm:text-5xl font-bold mt-[-5px] sm:mt-[-5px]">:</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountdownSection;
