"use client";

import Link from "next/link";

export default function Daycare() {
  const features = [
    {
      title: "CCTV Monitored",
      desc: "24/7 surveillance",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      )
    },
    {
      title: "Nutritious Meals",
      desc: "Fresh, age-appropriate",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
      )
    },
    {
      title: "Naptime Routine",
      desc: "Safe, supervised rest",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      )
    },
    {
      title: "Daily Parent Updates",
      desc: "WhatsApp photos & reports",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
      )
    },
    {
      title: "Trained Caregivers",
      desc: "POCSO verified staff",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      )
    },
    {
      title: "Strict Hygiene",
      desc: "Daily sanitization",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
      )
    },
    {
      title: "Structured Activities",
      desc: "Mindful curriculum",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
      )
    },
    {
      title: "Flexible Timings",
      desc: "Full / Half / Part-time",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
    }
  ];

  return (
    <section id="daycare" className="py-10 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          <div className="w-full lg:w-[55%] flex flex-col">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dce5f0] text-[#0b4b8a] text-xs font-bold tracking-widest mb-4 uppercase w-fit">
              FULL-DAY DAYCARE
            </div>

            <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
              Trusted Daycare in Sector 86,
              <span className="text-[#0b4b8a]"> Faridabad</span>
            </h2>

            <div className="inline-flex items-center gap-2 bg-[#dce5f0] text-[#0b4b8a] px-4 py-2 rounded-lg text-sm font-semibold mb-6 w-fit">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Mon–Sat • 09:00 AM — 6:00 PM • Ages 18 months – 6 years
            </div>

            <p className="text-gray-600 text-[14px] md:text-[14px] leading-relaxed mb-4 max-w-2xl">
              Our full-day daycare gives working parents in Faridabad complete peace of mind. A warm, home-like environment where your toddler learns, plays, eats well, rests safely, and grows — every single day. Flexible half-day and part-time options also available.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {features.map((item, idx) => (
                <div key={idx} className="bg-white/60 p-1 rounded-xl flex items-center gap-4 hover:bg-white transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#dce5f0] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#0b4b8a] hover:bg-blue-800 text-white px-8 py-3.5 rounded-lg font-bold transition-colors duration-300 shadow-lg shadow-blue-900/20"
              >
                Book a Daycare Tour
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
            
          </div>

          {/* Right Video Area with Floating Stats */}
          <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
            
            {/* Video Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle gradient overlay to make video look premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Stat Card 1: Happy Children */}
            <div className="absolute top-1/4 -left-6 sm:-left-12 lg:-left-16 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 animate-bounce-slow">
              <div className="text-2xl sm:text-3xl">🥰</div>
              <div>
                <div className="text-[#0b4b8a] font-extrabold text-lg sm:text-xl">200+</div>
                <div className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Happy Children</div>
              </div>
            </div>

            {/* Floating Stat Card 2: Parent Rating */}
            <div className="absolute top-1/2 -left-4 sm:-left-8 lg:-left-12 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 z-10" style={{ animationDelay: '1s' }}>
              <div className="text-2xl sm:text-3xl text-yellow-400">⭐</div>
              <div>
                <div className="text-[#0b4b8a] font-extrabold text-lg sm:text-xl">4.9 / 5</div>
                <div className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Parent Rating</div>
              </div>
            </div>

            {/* Floating Stat Card 3: Safety Compliance */}
            <div className="absolute top-3/4 -left-2 sm:-left-4 lg:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4" style={{ animationDelay: '2s' }}>
              <div className="text-2xl sm:text-3xl">🔒</div>
              <div>
                <div className="text-[#0b4b8a] font-extrabold text-lg sm:text-xl">100%</div>
                <div className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Safety Compliance</div>
              </div>
            </div>

          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}} />
    </section>
  );
}