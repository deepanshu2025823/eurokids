"use client";

export default function Schedule() {
  const scheduleData = [
    { 
      time: "1:30 – 2:30 PM", 
      icon: "🚌", 
      title: "Pickup & Arrival", 
      desc: "Safe transport, welcome snack & free social time" 
    },
    { 
      time: "2:30 – 3:30 PM", 
      icon: "📖", 
      title: "Homework Block", 
      desc: "Supervised homework & reading under teacher guidance" 
    },
    { 
      time: "3:30 – 4:30 PM", 
      icon: "⚽", 
      title: "Outdoor Activity", 
      desc: "Team sports, yoga, games & physical fitness" 
    },
    { 
      time: "4:30 – 5:30 PM", 
      icon: "🎨", 
      title: "Enrichment Workshop", 
      desc: "Rotating Art / Music / STEM / Creative Writing" 
    },
    { 
      time: "5:30 – 6:00 PM", 
      icon: "👨‍👩‍👧‍👦", 
      title: "Wrap-Up & Pickup", 
      desc: "Daily summary & WhatsApp update to parents" 
    }
  ];

  return (
    <section id="schedule" className="py-5 bg-[#fff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dce5f0] text-[#0b4b8a] text-xs font-bold tracking-widest mb-6 uppercase">
            WHAT DOES AN AFTER-SCHOOL DAY LOOK LIKE?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            A Perfectly Structured Day for Your Child
          </h2>
          <p className="text-gray-500 text-[15px] md:text-base">
            Every after-school session follows a purposeful rhythm — balancing homework, play, enrichment and rest.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          <div className="hidden lg:block absolute top-[11px] left-[10%] right-[10%] h-[2px] bg-[#d97706]/30 z-0"></div>
          <div className="block lg:hidden absolute top-4 bottom-4 left-[21px] w-[2px] bg-[#d97706]/30 z-0"></div>

          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-4 relative z-10">
            {scheduleData.map((item, index) => (
              <div key={index} className="flex lg:flex-col items-start lg:items-center relative w-full lg:w-1/5 group">

                <div className="flex-shrink-0 w-11 h-11 lg:w-6 lg:h-6 rounded-full bg-[#eef1f5] flex items-center justify-center relative z-10 mt-1 lg:mt-0">
                  <div className="w-2.5 h-2.5 lg:w-2 lg:h-2 rounded-full bg-[#d97706] group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="absolute inset-[-4px] rounded-full border border-[#d97706] opacity-60"></div>
                </div>

                <div className="ml-6 lg:ml-0 lg:mt-8 mb-2 lg:mb-0 w-full lg:w-auto text-left lg:text-center">
                  {/* <span className="inline-block bg-[#d97706] text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap">
                    {item.time}
                  </span> */}
                </div>

                <div className="ml-6 lg:ml-0 bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-gray-100 lg:border-transparent w-full text-left lg:text-center mt-2 lg:mt-0 transition-all duration-300 lg:hover:-translate-y-1">
                  <div className="text-3xl mb-4 lg:mb-5">{item.icon}</div>
                  <h4 className="text-gray-900 font-bold text-sm md:text-[15px] mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed max-w-[200px] mx-auto">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}