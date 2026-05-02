import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
}

export function ImageComparison({ beforeImage, afterImage }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: globalThis.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#102442] select-none group"
      onMouseDown={(e: ReactMouseEvent) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e: ReactTouchEvent) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Bottom/Right side) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={afterImage} 
          alt="Depois do tratamento capilar" 
          className="w-full h-full object-cover object-center"
          draggable="false"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 border border-[#c5a059]/30 backdrop-blur-md rounded-none text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-semibold">
          DEPOIS
        </div>
      </div>

      {/* Before Image (Top/Left side, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Antes do tratamento capilar" 
          className="w-full h-full object-cover object-center"
          draggable="false"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 border border-white/10 backdrop-blur-md rounded-none text-white text-[10px] uppercase tracking-[0.3em] font-light">
          ANTES
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-white/20 cursor-ew-resize flex items-center justify-center transition-transform duration-75"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div 
          className={`w-8 h-8 rounded-full border border-white/40 bg-[#0C1D36] flex items-center justify-center text-white transition-transform ${isDragging ? 'scale-110' : 'group-hover:scale-105'}`}
        >
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
