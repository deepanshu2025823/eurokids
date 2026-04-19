// components/DaycareRoutine.tsx

import React from "react";

const routineSteps = [
  { 
    time: "9:30 – 10:30", 
    title: "Morning Circle & Energiser", 
    desc: "Welcome songs, weather board, attendance & day plan", 
    icon: "🌅" 
  },
  { 
    time: "10:30 – 11:30", 
    title: "Structured Learning", 
    desc: "Heureka: language, numeracy, sensory & STEM", 
    icon: "📚" 
  },
  { 
    time: "11:30 – 12:00", 
    title: "Nutritious Lunch", 
    desc: "Freshly prepared, age-appropriate balanced meal", 
    icon: "🍽️" 
  },
  { 
    time: "12:00 – 2:00", 
    title: "Naptime & Rest", 
    desc: "Supervised sleep in safe, clean, dedicated rest area", 
    icon: "🌙" 
  },
  { 
    time: "2:00 – 3:30", 
    title: "Creative Play & Art", 
    desc: "Art, music, drama, storytelling & outdoor time", 
    icon: "🎨" 
  },
  { 
    time: "3:30 – 5:00", 
    title: "Enrichment & Pickup", 
    desc: "Snack, free play, daily WhatsApp summary to parents", 
    icon: "👨‍👩‍👧‍👦" 
  }
];

export default function DaycareRoutine() {
  return (
    <section className="w-full py-5 md:py-10 relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/50" id="Daycare">
      
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#f4f8fccb] -skew-x-12 transform origin-top hidden lg:block z-0"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 lg:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#eef2f6] text-[#183385] font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full mb-4">
            WHAT DOES A DAY LOOK LIKE?
          </div>
          <h2 className="text-[#183385] text-3xl md:text-4xl lg:text-[40px] font-extrabold mb-4 leading-tight">
            A Perfectly Structured Day for Your Little One
          </h2>
          <p className="text-gray-500 text-[15px] md:text-lg font-medium max-w-3xl mx-auto">
            Every day at EuroKids Daycare follows a thoughtful rhythm — balancing learning, play, meals, and rest.
          </p>
        </div>

        <div className="hidden lg:block relative mt-10">
          <div className="absolute top-[11px] left-[8%] right-[8%] h-[2px] bg-[#183385] z-0 opacity-80"></div>

          <div className="grid grid-cols-6 gap-4 xl:gap-6 relative z-10">
            {routineSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                <div className="w-6 h-6 rounded-full border-[4px] border-[#183385] bg-white z-10 mb-4 shadow-sm group-hover:scale-125 group-hover:border-[#ffb600] transition-all duration-300"></div>
                
                <div className="bg-[#183385] text-white text-xs xl:text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-md whitespace-nowrap group-hover:-translate-y-1 transition-transform duration-300">
                  {step.time}
                </div>
                
                <div className="bg-white w-full rounded-2xl p-4 xl:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex-1 flex flex-col items-center group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl xl:text-4xl mb-3 drop-shadow-sm">{step.icon}</div>
                  <h4 className="text-[#183385] font-bold text-[13px] xl:text-[15px] leading-snug mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-[11px] xl:text-xs leading-relaxed">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="block lg:hidden relative pl-6 mt-8">
          <div className="absolute top-2 bottom-2 left-[11px] w-[2px] bg-[#183385] opacity-50"></div>

          <div className="flex flex-col gap-8">
            {routineSteps.map((step, index) => (
              <div key={index} className="relative pl-6 group">
                
                <div className="absolute top-2 -left-[18px] w-4 h-4 rounded-full border-[3px] border-[#183385] bg-white z-10 group-hover:scale-125 group-hover:border-[#ffb600] transition-all duration-300"></div>
                
                <div className="inline-block bg-[#183385] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
                  {step.time}
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-50 flex items-start gap-4 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
                  <div className="text-3xl bg-blue-50/50 p-2 rounded-xl">{step.icon}</div>
                  <div>
                    <h4 className="text-[#183385] font-bold text-[15px] mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}