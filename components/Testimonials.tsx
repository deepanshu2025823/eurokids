// components/Testimonials.tsx

"use client";
import React, { useRef } from "react";

const testimonialsData = [
  {
    name: "Priya Sharma",
    relation: "Mother of Aarav (Nursery)",
    review: "EuroKids Sector 86 has been a second home for my son. The teachers are incredibly caring, and the daily activities keep him so engaged. Highly recommended for working parents!",
    rating: 5,
    bgColor: "bg-[#e5eaff]", 
    accentColor: "text-[#183385]"
  },
  {
    name: "Rahul Verma",
    relation: "Father of Diya (Playgroup)",
    review: "We were very anxious about sending our daughter to a preschool, but the safety measures, hygiene, and the friendly staff here are top-notch. She loves going to school everyday.",
    rating: 5,
    bgColor: "bg-[#fce7f3]", 
    accentColor: "text-[#ec008c]"
  },
  {
    name: "Neha Gupta",
    relation: "Mother of Vihaan (Euro Senior)",
    review: "The curriculum is perfectly balanced with fun and learning. I have seen a massive improvement in Vihaan's communication skills and confidence. Kudos to the entire team!",
    rating: 5,
    bgColor: "bg-[#fef3c7]", 
    accentColor: "text-[#d97706]"
  },
  {
    name: "Amit & Sneha",
    relation: "Parents of Kabir (Toddler)",
    review: "The toddler transition program was so gentle. Kabir settled in within just a week! The teachers send regular updates, which gives us immense peace of mind.",
    rating: 5,
    bgColor: "bg-[#e5eaff]", 
    accentColor: "text-[#183385]"
  },
  {
    name: "Kavita Singh",
    relation: "Mother of Ananya (Euro Junior)",
    review: "Interactive learning and wonderful teachers! Ananya has started reading small words and her curiosity has grown leaps and bounds since she joined.",
    rating: 5,
    bgColor: "bg-[#fce7f3]", 
    accentColor: "text-[#ec008c]"
  },
  {
    name: "Vikram Aditya",
    relation: "Father of Reyansh (Daycare)",
    review: "Finding a safe daycare was our priority. EuroKids Sector 86 exceeded our expectations with their hygiene, CCTV access, and very caring support staff.",
    rating: 5,
    bgColor: "bg-[#fef3c7]", 
    accentColor: "text-[#d97706]"
  },
  {
    name: "Smriti & Rohit",
    relation: "Parents of Myra (Nursery)",
    review: "We love the focus on holistic development. Myra is always excited to show us the art and craft she does at school. Thank you EuroKids team!",
    rating: 5,
    bgColor: "bg-[#e5eaff]", 
    accentColor: "text-[#183385]"
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 md:py-10 bg-white relative overflow-hidden border-t border-gray-50" id="reviews">
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#183385] text-[17px] sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold flex flex-wrap items-center justify-center gap-2 md:gap-3 leading-snug">
            <span className="text-[#ec008c] text-3xl sm:text-4xl drop-shadow-sm">★</span> 
            What Parents Say About Us
            <span className="text-[#ec008c] text-3xl sm:text-4xl drop-shadow-sm">★</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium text-[15px] md:text-xl max-w-2xl mx-auto">
            Trusted by hundreds of happy families in Summer Palm, Faridabad.
          </p>
        </div>

        <div className="relative w-full">
          
          <button 
            onClick={() => scroll("left")} 
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.15)] items-center justify-center text-[#183385] hover:bg-[#183385] hover:text-white transition-colors duration-300"
            aria-label="Previous Testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 lg:gap-8 pb-10 scrollbar-hide px-2 pt-4"
          >
            {testimonialsData.map((testimonial, index) => (
              <article 
                key={index} 
                className={`${testimonial.bgColor} p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 w-[85vw] sm:w-[350px] lg:w-[400px] snap-center shrink-0 flex flex-col relative group border border-transparent hover:border-white/50`}
              >
                
                <div className="absolute top-6 right-8 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  <svg className={`w-16 h-16 ${testimonial.accentColor}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#ffb600]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-[15px] md:text-base leading-relaxed font-medium mb-8 flex-1 italic relative z-10">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white ${testimonial.accentColor.replace('text-', 'bg-')}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#183385] text-base">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs font-semibold">{testimonial.relation}</p>
                  </div>
                </div>

              </article>
            ))}
          </div>

          <button 
            onClick={() => scroll("right")} 
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.15)] items-center justify-center text-[#183385] hover:bg-[#183385] hover:text-white transition-colors duration-300"
            aria-label="Next Testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
          </button>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

    </section>
  );
}