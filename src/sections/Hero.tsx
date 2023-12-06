"use client"

import React, { useEffect, useState } from 'react';

const HeroSection = () => {
    const [imageSize, setImageSize] = useState(100); // 100% initial size

    const handleScroll = () => {
        const newSize = Math.max(50, 100 - window.scrollY / 10); // Decrease size on scroll, min 50%
        setImageSize(newSize);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`h-screen bg-cover bg-center transition-all duration-300`} 
             style={{ 
                 backgroundImage: 'url("/hero_bg.svg")', 
                 backgroundSize: `${imageSize}% ${imageSize}%`
             }}>
            {/* Content of your hero section */}
        </div>
    );
};

export default HeroSection;
