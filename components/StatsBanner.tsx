// components/StatsBanner.tsx

import React from "react";

const stats = [
  { number: "25+", text: "Years of Excellence" },
  { number: "2000+", text: "Pre-Schools Across India" },
  { number: "100+", text: "Awards Won" },
  { number: "550+", text: "Cities Nationwide" },
];

export default function StatsBanner() {
  return (
    <section className="w-full bg-[#1352a1] py-8 md:py-12 border-y border-[#0f4386]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-6 px-2 sm:px-4 text-center border-white/20 hover:scale-105 transition-transform duration-300
                ${index === 0 ? "border-b border-r md:border-b-0" : ""}
                ${index === 1 ? "border-b md:border-b-0 md:border-r" : ""}
                ${index === 2 ? "border-r" : ""}
              `}
            >
              <h3 className="text-[#ffde00] text-4xl sm:text-5xl lg:text-[56px] font-black mb-2 drop-shadow-md tracking-tight">
                {stat.number}
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg font-semibold tracking-wide">
                {stat.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}