// components/Programs.tsx

"use client";
import React, { useState } from "react";

const curriculumList = [
  "Language & Literacy Foundations",
  "Sensory Exploration",
  "Early Language & Literacy",
  "Music and Movement Sessions",
  "Creative Arts & Crafts",
  "Cultural Celebration Programs",
  "Critical Thinking Challenges",
  "Mathematical Thinking",
  "Social-Emotional Skills Building",
  "Age-Appropriate Learning Materials",
];

const programsData = [
  {
    title: "Playgroup",
    age: "2-3 Years",
    bgClass: "bg-[#183385]", 
    textClass: "text-[#183385]",
    borderClass: "border-[#183385]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
    points: [
      "Hands-on discovery and exploration with exclusive EuroKids kits",
      "Developing language skills",
      "Encouraging learning of new age skills",
      "Engaging children physically, emotionally and socially",
      "Shaping scientific thought in children",
    ],
  },
  {
    title: "Nursery",
    age: "3-4 Years",
    bgClass: "bg-[#583182]", 
    textClass: "text-[#583182]",
    borderClass: "border-[#583182]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"></path></svg>
    ),
    points: [
      "Imparts essential life skills",
      "Enhances learning and interaction through fun with exclusive EuroKids kits",
      "Developing language skills",
      "Cultivates creativity & Develop curiosity",
      "Improves imagination through Art and Music",
    ],
  },
  {
    title: "Euro Junior",
    age: "4-5 Years",
    bgClass: "bg-[#ec008c]", 
    textClass: "text-[#ec008c]",
    borderClass: "border-[#ec008c]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18"></path></svg>
    ),
    points: [
      "Special activities for developing language skills",
      "Age appropriate learning with exclusive EuroKids learning tools encourages children to express their ideas, thoughts and feelings",
      "Allows children to grow at their own pace",
    ],
  },
  {
    title: "Euro Senior",
    age: "5-6 Years",
    bgClass: "bg-[#0d9488]",
    textClass: "text-[#0d9488]",
    borderClass: "border-[#0d9488]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path></svg>
    ),
    points: [
      "Building & enhancing vocabulary",
      "Developing attention span",
      "Innovative methods to enhance reading & writing with exclusive EuroKids Kits",
      "Preparing children for primary school",
    ],
  },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-60"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply blur-2xl opacity-60"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        <div className="bg-white rounded-[2rem] p-8 lg:p-14 shadow-[0_10px_40px_-15px_rgba(24,51,133,0.1)] border border-gray-100 relative group transition-all duration-300">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#ffb600] text-black font-bold px-8 py-2.5 rounded-full shadow-md text-sm md:text-base tracking-wide uppercase">
            1 to 6 Years
          </div>
          <div className="text-center mb-10 mt-4">
            <h2 className="text-[#183385] text-1xl md:text-4xl lg:text-[42px] font-extrabold mb-4 flex items-center justify-center gap-3">
              <svg className="w-8 h-8 text-[#ec008c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Programs & Curriculum
            </h2>
            <p className="text-gray-600 font-medium text-sl md:text-xl">
              Play-based learning for a <span className="text-[#ec008c] font-bold">Right Start</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-5xl mx-auto">
            {curriculumList.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-0 md:p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mt-0.5 shadow-sm border border-teal-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-gray-800 font-semibold text-[12px] md:text-[20px] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-14">
            <h2 className="text-[#183385] text-3xl md:text-4xl lg:text-[42px] font-extrabold flex items-center justify-center gap-3">
              <span className="text-[#ffb600] text-3xl">★</span> 
              Our Preschool Programs 
              <span className="text-[#ffb600] text-3xl">★</span>
            </h2>
            <p className="text-gray-500 mt-3 font-medium">Select a program below to view details</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
            
            <div className="w-full lg:w-[35%] flex flex-col gap-4">
              {programsData.map((prog, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div key={idx} className="w-full">
                    <button 
                      onClick={() => setActiveTab(idx)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 text-left
                        ${isActive 
                          ? `${prog.bgClass} text-white border-transparent shadow-lg lg:translate-x-4` 
                          : `bg-white text-gray-700 hover:border-gray-300 border-gray-100 shadow-sm hover:shadow-md`
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : prog.textClass + ' bg-gray-50'}`}>
                          {prog.icon}
                        </div>
                        <div>
                          <h3 className={`font-black text-xl tracking-wide ${isActive ? 'text-white' : prog.textClass}`}>{prog.title}</h3>
                          <p className={`text-sm font-semibold mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>{prog.age}</p>
                        </div>
                      </div>
                      
                      <svg className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180 text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </button>

                    <div className={`lg:hidden grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="bg-white p-6 rounded-2xl shadow-inner border border-gray-100">
                          <ul className="space-y-4">
                            {prog.points.map((point, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <span className={`${prog.textClass} mt-1 text-sm flex-shrink-0`}>●</span>
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                          <button onClick={scrollToTop} className={`mt-6 w-full ${prog.bgClass} text-white font-bold py-3 rounded-xl shadow-md transition-transform active:scale-95`}>
                            Enquire for {prog.title}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:block w-[65%]">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative min-h-[400px] flex flex-col justify-center">
                
                <div className={`absolute -right-10 -bottom-10 w-64 h-64 ${programsData[activeTab].textClass} opacity-5 pointer-events-none`}>
                  {programsData[activeTab].icon}
                </div>

                <div className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-500" key={activeTab}>
                  
                  <div className="flex justify-between items-start mb-8 pb-6 border-b border-gray-100">
                    <div>
                      <h3 className={`text-4xl font-black ${programsData[activeTab].textClass} mb-2 tracking-wide`}>
                        {programsData[activeTab].title}
                      </h3>
                      <p className="text-gray-500 font-bold text-lg bg-gray-50 px-4 py-1.5 rounded-full inline-block">
                        Age Group: {programsData[activeTab].age}
                      </p>
                    </div>
                    <div className={`${programsData[activeTab].bgClass} text-white p-4 rounded-2xl shadow-lg transform rotate-3`}>
                      {programsData[activeTab].icon}
                    </div>
                  </div>

                  <ul className="space-y-5">
                    {programsData[activeTab].points.map((point, i) => (
                      <li key={i} className="flex gap-4 items-start group cursor-default">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full ${programsData[activeTab].bgClass} text-white flex items-center justify-center mt-1 shadow-sm transition-transform group-hover:scale-110`}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-gray-700 text-lg font-medium leading-relaxed group-hover:text-black transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 pt-2">
                    <button 
                      onClick={scrollToTop} 
                      className={`${programsData[activeTab].bgClass} hover:opacity-90 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)] hover:-translate-y-1 flex items-center gap-2`}
                    >
                      Enquire for {programsData[activeTab].title}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}