// components/WhyChooseUs.tsx

import React from "react";

const featuresData = [
  {
    title: "Proximity and Location",
    desc: "EuroKids Sector 86, Faridabad, is where joyful learning begins. Our dedicated teachers create a warm environment where children explore through stories, games, and creativity. Conveniently located near Amolik Chowk and Summer Palm Society, our preschool in Faridabad provides a caring and engaging start to education. Finding us is easier than ever, just search \"EuroKids near me\" on Google to locate the nearest preschool.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
      </svg>
    ),
    dots: [
      { color: "bg-[#ffb600]", top: "12%", left: "6%", size: "w-2.5 h-2.5" }, 
      { color: "bg-[#ff7e67]", top: "18%", right: "8%", size: "w-2 h-2" }, 
      { color: "bg-[#ec008c]", bottom: "25%", left: "10%", size: "w-3 h-3" } 
    ]
  },
  {
    title: "Specialized Curriculum",
    desc: "EuroKids Preschools in Sector 86, Summer Palm, Faridabad offer a safe, stimulating environment where learning is both fun and engaging. We go beyond traditional learning with Heureka—a visible thinking curriculum inspired by Harvard's Project Zero. This unique approach sparks curiosity, nurtures critical thinking, and encourages imagination in young minds.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
      </svg>
    ),
    dots: [
      { color: "bg-[#ffb600]", top: "12%", left: "6%", size: "w-2.5 h-2.5" }, 
      { color: "bg-[#ff7e67]", top: "15%", right: "6%", size: "w-2 h-2" }, 
      { color: "bg-[#ec008c]", bottom: "20%", left: "12%", size: "w-3 h-3" }, 
      { color: "bg-[#ffb600]", bottom: "12%", right: "8%", size: "w-3.5 h-3.5" } 
    ]
  },
  {
    title: "Features",
    desc: "Safety is of great importance for us at EuroKids Sector 86, Summer Palm, Faridabad. We provide a secure campus, trained staff, CCTV surveillance, and child-friendly infrastructure to ensure your child is safe all the time. The teachers are highly trained and experienced, guiding children with passion and understanding of child psychology to create a nurturing environment.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
      </svg>
    ),
    dots: [
      { color: "bg-[#ffb600]", top: "15%", left: "8%", size: "w-2.5 h-2.5" },
      { color: "bg-[#ff7e67]", top: "18%", right: "6%", size: "w-2 h-2" }, 
      { color: "bg-[#9d367a]", bottom: "25%", left: "10%", size: "w-3.5 h-3.5" } 
    ]
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 px-4 lg:px-8">
        
        <div className="text-center mb-10 md:mb-16 px-2">
          <h2 className="text-[#183385] text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-extrabold flex flex-wrap items-center justify-center gap-2 md:gap-3 leading-snug">
            <span className="text-[#ffb600] text-2xl sm:text-3xl md:text-4xl drop-shadow-sm">★</span> 
            Why Choose EuroKids Preschool in Sector 86, Summer Palm? 
            <span className="text-[#ffb600] text-2xl sm:text-3xl md:text-4xl drop-shadow-sm">★</span>
          </h2>
        </div>

      </div>

      <div className="w-full">
        <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-5 lg:gap-8 pb-10 md:pb-0 scrollbar-hide px-5 lg:px-8 max-w-7xl mx-auto">
          
          {featuresData.map((feature, index) => (
            <article 
              key={index} 
              className="bg-[#253b80] text-white pt-10 pb-12 px-6 md:px-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[88vw] sm:w-[350px] lg:w-auto snap-center shrink-0 flex flex-col items-center text-center relative overflow-hidden"
            >
              
              {feature.dots.map((dot, i) => (
                <div 
                  key={i} 
                  className={`absolute rounded-full ${dot.color} ${dot.size}`} 
                  style={{ top: dot.top, bottom: dot.bottom, left: dot.left, right: dot.right }}
                ></div>
              ))}

              <div className="relative z-10 w-full mb-6 mt-2">
                <h3 className="text-[19px] md:text-[22px] font-bold tracking-wide">
                  {feature.title}
                </h3>
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col justify-start w-full mb-8">
                <p className="text-[13px] sm:text-[14px] leading-[2.1] text-white/95 font-medium">
                  {feature.desc}
                </p>
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full border-[1.5px] border-white/50">
                  {feature.icon}
                </div>
              </div>

            </article>
          ))}
          
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />

    </section>
  );
}