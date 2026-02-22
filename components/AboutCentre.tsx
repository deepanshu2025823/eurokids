// components/AboutCentre.tsx

import Image from "next/image";
import React from "react";

const features = [
  {
    name: "CCTV Monitored",
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: "bg-gray-200/50"
  },
  {
    name: "Trained Staff",
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    bgColor: "bg-green-100/50"
  },
  {
    name: "Daily Sanitisation",
    icon: (
      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    bgColor: "bg-pink-100/50"
  },
  {
    name: "Heureka Curriculum",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    bgColor: "bg-blue-100/50"
  },
  {
    name: "School Bus Service",
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    bgColor: "bg-orange-100/50"
  },
  {
    name: "Nutritious Meals Daily",
    icon: (
      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
    ),
    bgColor: "bg-purple-100/50"
  }
];

export default function AboutCentre() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 px-6 sm:px-10 lg:px-0">
            <div className="relative w-full aspect-square max-w-[900px] mx-auto rounded-[32px] overflow-hidden shadow-2xl">
              <Image 
                src="https://www.feesback.org/img/PreSchool/2902f464-6307-4eb1-bdfd-4395c2f860e8.jpg" 
                alt="EuroKids Sector 86 Faridabad Toys and Activities"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            <div className="absolute -top-6 right-0 sm:right-4 lg:-right-6 bg-[#ffb600] text-[#183385] w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center text-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="font-extrabold text-xl leading-none">100+</span>
              <span className="font-semibold text-[10px] uppercase tracking-wider mt-1">National<br/>Awards</span>
            </div>

            <div className="absolute -bottom-8 left-0 sm:left-4 lg:-left-8 bg-white p-4 md:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 border border-gray-50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h4 className="text-[#183385] font-extrabold text-xl leading-none mb-1">25+</h4>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Years of Trusted<br/>Early Education</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-[#eaf2fd] text-[#1d6ade] font-bold text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
              <span className="text-[#ec008c]">📍</span> ABOUT OUR CENTRE
            </div>

            <h2 className="text-[#183385] text-[24px] sm:text-4xl lg:text-[42px] font-extrabold mb-6 leading-[1.15] tracking-tight">
              Faridabad's Most Trusted <span className="text-[#1d6ade]">Preschool, Daycare & Activity Center</span>
            </h2>

            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-4 font-medium">
              Welcome to <strong>EuroKids Preschool, Daycare & Activity Center, Sector 86, Faridabad</strong> — located in Summer Palm Society, near Amolik Chowk. We bring 25 years of EuroKids' award-winning early childhood education right to your doorstep, offering Preschool, Full-Day Daycare, and After-School Care under one trusted roof.
            </p>

            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-10 font-medium">
              We go beyond traditional learning with <strong>Heureka</strong> — a visible thinking curriculum inspired by Harvard's Project Zero. With CCTV surveillance, certified teachers, daily hygiene protocols, and an open-door parent policy, we are the most trusted childcare provider near Sector 86, Faridabad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-[14px] p-3 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.bgColor}`}>
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 font-bold text-sm">{feature.name}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}