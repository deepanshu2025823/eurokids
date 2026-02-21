// components/Services.tsx

import React from "react";

const servicesData = [
  {
    title: "Full Daycare",
    desc: "A safe, engaging, and loving environment for your child from morning till evening, complete with activities and rest.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg>
    )
  },
  {
    title: "Half / Part Timecare",
    desc: "Flexible daycare options tailored to fit your busy schedule, ensuring your child is cared for when you need it most.",
    bgColor: "bg-pink-50",
    iconColor: "text-[#ec008c]",
    iconBg: "bg-pink-100",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    title: "After Schoolcare",
    desc: "A productive after-school space where older kids can relax, get homework help, and participate in fun activities.",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-100",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path></svg>
    )
  },
  {
    title: "Euro Tots",
    desc: "Specialized early intervention program designed for toddlers to boost their sensory and cognitive development.",
    bgColor: "bg-yellow-50",
    iconColor: "text-amber-600",
    iconBg: "bg-yellow-100",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path></svg>
    )
  }
];

export default function Services() {
  return (
    <section className="w-full py-16 md:py-24 px-4 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-[#183385] text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="text-[#ec008c] text-3xl md:text-4xl">★</span> 
            Our Premium Services 
            <span className="text-[#ec008c] text-3xl md:text-4xl">★</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium text-lg md:text-xl max-w-2xl mx-auto">
            Beyond regular preschool, we offer a variety of childcare solutions designed for modern working parents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {servicesData.map((service, index) => (
            <article 
              key={index} 
              className={`${service.bgColor} p-8 rounded-[30px] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group border border-transparent hover:border-gray-200`}
            >
              
              <div className={`${service.iconBg} ${service.iconColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0`}>
                {service.icon}
              </div>

              <h3 className="text-[#183385] text-[22px] font-black mb-4 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                {service.desc}
              </p>

            </article>
          ))}
          
        </div>
      </div>
    </section>
  );
}