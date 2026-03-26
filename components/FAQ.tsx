// components/FAQ.tsx

"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is the right age for preschool admission in Sector 86?",
    answer: "We offer tailored programs starting from Toddler/Playgroup (18 months - 3 years), Nursery (3 - 4 years), EuroJunior (4 - 5 years), and EuroSenior (5 - 6 years). The earlier they start, the better their foundational growth!"
  },
  {
    question: "What are the daycare timings and who is it suitable for?",
    answer: "Our daycare runs from 9:00 AM to 6:30 PM, Monday to Saturday. It is ideal for working parents looking for a safe, hygienic, and highly engaging environment for their children."
  },
  {
    question: "What does the after-school program include?",
    answer: "The after-school program includes homework assistance, evening snacks, art and craft, indoor activities, and supervised free play to ensure a productive and screen-free time for your child."
  },
  {
    question: "What facilities are available at EuroKids Sector 86?",
    answer: "We provide fully air-conditioned classrooms, 100% CCTV surveillance, child-safe infrastructure, non-toxic educational toys, a dedicated outdoor play area, and hygienic meals prepared daily."
  },
  {
    question: "How does the Heureka curriculum benefit my child?",
    answer: "Our exclusive EUNOIA/Heureka curriculum focuses on Mind, Body, and Soul. It uses play-based, experiential learning to build cognitive, motor, and social skills in a stress-free environment."
  },
  {
    question: "How do I enrol my child or book a free centre tour?",
    answer: "You can easily book a centre tour by filling out the 'Admissions Open' form at the top of this page, or click on the 'Chat on WhatsApp' button to schedule a visit directly with our center head!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-0 bg-white relative" id="FAQ">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-[#eaf2fd] text-[#1d6ade] font-bold text-[11px] md:text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="text-[#ec008c]">?</span> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-[#183385] text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight">
            Answers for <span className="text-[#1d6ade]">Curious Parents</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-gray-200 group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none gap-4"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-base md:text-[19px] font-bold pr-4 transition-colors duration-300 ${isOpen ? 'text-[#1d6ade]' : 'text-[#111827] group-hover:text-[#183385]'}`}>
                    {item.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#183385] text-white' : 'bg-[#eaf2fd] text-[#1d6ade] group-hover:bg-[#d5e4f9]'}`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-[15px] md:text-base leading-relaxed pr-10">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}