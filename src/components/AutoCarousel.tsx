import React, { useState, useEffect } from 'react';

export default function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://i.postimg.cc/3Jystd0y/b01-pag-7.png",
    "https://i.postimg.cc/4NKDWmHm/b04-pag-6.png",
    "https://i.postimg.cc/c4VV20fx/kit-pag-105.png",
    "https://i.postimg.cc/3Jystd04/b05-pag-4.png",
    "https://i.postimg.cc/pXgg4RKX/resumo-passo-7.png",
    "https://i.postimg.cc/bNG7msSZ/b06-pag-7.png",
    "https://i.postimg.cc/4Nrrqsp4/resumo-passo-9.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[calc(100%+2rem)] -mx-4 md:w-full md:max-w-4xl md:mx-auto overflow-hidden md:rounded-2xl relative md:shadow-lg bg-white/50">
      <div 
        className="flex transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img 
              src={img} 
              alt={`Exemplo do Kit ${idx + 1}`} 
              loading="lazy"
              className="w-full h-auto object-contain max-h-[70vh] md:max-h-[600px]" 
            />
          </div>
        ))}
      </div>
      
      {/* Pagination indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-amber-500 w-6' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
