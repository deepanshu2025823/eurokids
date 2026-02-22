// components/CtaBanner.tsx

"use client";
import React from "react";
import { useModal } from "./ModalContext";

export default function CtaBanner() {
  const { openModal } = useModal();

  return (
    <section className="w-full py-10 md:py-16 bg-white px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative bg-[#185bc3] rounded-[32px] px-6 py-12 md:py-16 text-center overflow-hidden shadow-xl">
          
          <div className="absolute -top-32 -right-20 w-80 h-80 bg-white/10 rounded-full blur-sm pointer-events-none"></div>
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-sm pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
              Give Your Child the <span className="text-[#ffde00]">Best Start in Faridabad</span>
            </h2>
            
            <p className="text-white/95 text-[15px] md:text-lg max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium">
              Admissions open for Playgroup, Nursery, KG, Full-Day Daycare & After-School <br className="hidden md:block" />
              Care. Sessions from April 2026 — limited seats, early enquiry recommended.
            </p>
            
            <button 
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fdfaf2] text-[#185bc3] font-extrabold text-base md:text-[17px] px-8 py-3.5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 text-[#ea4b8b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Enquire Now
            </button>
          </div>
          
        </div>

      </div>
    </section>
  );
}