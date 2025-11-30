"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoGallery } from "@/components/photo-gallery";
import { Camera } from "lucide-react";

export function ProfileImageSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <div className="relative shrink-0 order-1 md:order-2 w-full md:w-auto flex justify-center group">
        <div 
          onClick={() => setIsGalleryOpen(true)}
          className="relative w-64 h-80 md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 cursor-pointer"
        >
           <Image 
             src="/projects/profile-picture.jpeg" 
             alt="Prashanth Duggirala" 
             fill
             className="object-cover transition-transform duration-700 group-hover:scale-105"
             priority
           />
           
           {/* Overlay Hint */}
           <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-white font-medium border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <Camera size={20} />
               <span>View Gallery</span>
             </div>
           </div>
        </div>
        {/* Decorative element behind */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl -z-10 blur-xl opacity-50 transform rotate-6 scale-95 md:scale-105 group-hover:rotate-3 transition-transform duration-500" />
      </div>

      <PhotoGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </>
  );
}
