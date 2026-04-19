// components/PrincipalMessage.tsx

"use client";
import React from "react";

export default function PrincipalMessage() {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] relative overflow-hidden mb-10" id="principal-message">
      
      <div className="absolute top-0 right-0 w-100 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-[#183385] rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white aspect-video lg:aspect-[4/3]">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster="https://www.eurokidsfbd.com/_next/image?url=%2Fslider%2F01.jpeg&w=1080&q=75" 
              >
                <source src="/video/03.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#183385] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-lg z-10 flex items-center gap-2 pointer-events-none">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Watch Message
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-100 text-[#ec008c] text-xs font-bold tracking-widest mb-6 uppercase w-fit">
              MESSAGE FROM THE CENTRE HEAD
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Nurturing <span className="text-[#183385]">Every Child's</span> Unique Potential
            </h2>

            <div className="relative mb-8">
              <span className="absolute -top-6 -left-4 text-7xl text-gray-200 font-serif z-0 select-none">"</span>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed relative z-10 italic font-medium">
                Welcome to EuroKids Sector 86. Our mission is to provide a safe, nurturing, and highly engaging environment where your child can take their first steps toward a lifetime of learning. We believe in making every day a joyful adventure, blending a structured curriculum with the warmth of a second home.
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-gray-200 pt-6 mt-2">
              <div className="w-14 h-14 rounded-full bg-[#ffb600] flex items-center justify-center text-white text-2xl font-bold shadow-md">
                M
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Megha Goyel</h4>
                <p className="text-sm font-semibold text-[#ec008c]">Centre Head, EuroKids Sec 86</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}