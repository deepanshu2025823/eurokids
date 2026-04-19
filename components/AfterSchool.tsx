"use client";

import Link from "next/link";
import Image from "next/image";

export default function AfterSchool() {
  const activities = [
    { name: "Homework Help", icon: "📚" },
    { name: "Sports & Yoga", icon: "⚽" },
    { name: "Art & Craft", icon: "🎨" },
    { name: "Music", icon: "🎵" },
    { name: "Value Education", icon: "🌟" },
    { name: "Safe Pickup", icon: "🚸" },
    { name: "Daily Updates", icon: "📱" },
    { name: "Dance", icon: "𓀤" },
  ];

  return (
    <section id="after-school" className="py-20 bg-[#fff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          <div className="w-full lg:w-[45%] relative order-2 lg:order-1 mt-10 lg:mt-0">
            
            <div className="absolute -inset-4 bg-[#fdecd5] rounded-3xl -z-10 transform -rotate-3"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto lg:mr-auto">
              <Image 
                src="/slider/10.jpeg" 
                alt="After School Care Activities"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>

            <div className="absolute top-6 -right-4 sm:-right-8 bg-[#d97706] text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-bold z-10 hidden sm:block">
            After-School Care • Ages 6-12
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#eef1f5] p-5 rounded-2xl shadow-xl flex items-center gap-6 border border-white/50 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center border-r border-gray-300 pr-6">
                <span className="text-[#d97706] text-3xl font-extrabold leading-none">6-12</span>
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#d97706] text-lg font-bold">Mon-Sat</span>
                <span className="text-gray-600 text-sm font-medium">Till 6:00 PM</span>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-[55%] flex flex-col order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdecd5] text-[#d97706] text-xs font-bold tracking-widest mb-6 uppercase w-fit">
              AFTER-SCHOOL CARE
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              After-School That <br/>
              <span className="text-[#d97706]">Goes Beyond Homework</span>
            </h2>

            <div className="inline-flex items-center gap-2 bg-[#fdecd5] text-[#b45309] px-4 py-2 rounded-lg text-sm font-semibold mb-6 w-fit border border-[#d97706]/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Post-school till 6:00 PM • Monday to Saturday • Ages 6-12 years
            </div>

            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-xl">
              Our after-school program in Faridabad is a one-stop solution for primary school children. Supervised homework, enrichment activities, sports, art, music, and 21st-century skills — keeping your child safe, engaged, and growing every day after school.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {activities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:border-[#d97706] transition-colors duration-300"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-gray-800 text-sm font-semibold">{item.name}</span>
                </div>
              ))}
            </div>

            <div>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-3.5 rounded-lg font-bold transition-colors duration-300 shadow-lg shadow-orange-900/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"></path></svg>
                Enquire About After-School
              </Link>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}