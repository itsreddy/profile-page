"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { PHOTOS } from "@/data/photos";


interface PhotoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoGallery({ isOpen, onClose }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0); 
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <X size={32} />
      </button>

      {/* Content Container */}
      <div 
        className="relative w-full max-w-5xl mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image Area */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] max-h-[70vh] rounded-xl overflow-hidden shadow-2xl bg-black/50 border border-white/10">
           <Image
             src={PHOTOS[currentIndex].src}
             alt={PHOTOS[currentIndex].title}
             fill
             className="object-contain"
             priority
           />
           
           {/* Navigation Buttons */}
           <button 
             onClick={prevPhoto}
             className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md border border-white/10"
           >
             <ChevronLeft size={24} />
           </button>
           
           <button 
             onClick={nextPhoto}
             className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md border border-white/10"
           >
             <ChevronRight size={24} />
           </button>
        </div>

        {/* Caption Area */}
        <div className="mt-8 text-center max-w-2xl px-4">
          <h3 className="text-2xl font-bold text-white mb-3">{PHOTOS[currentIndex].title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{PHOTOS[currentIndex].caption}</p>
        </div>

        {/* Indicators */}
        <div className="flex gap-3 mt-8">
          {PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-white w-8" : "bg-white/30 w-2 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
