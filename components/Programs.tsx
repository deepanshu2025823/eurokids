"use client";

import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    id: 1,
    title: "EuroTots — Toddler Transition",
    subtitle: "Toddler Program • Sector 86, Faridabad",
    age: "18-24 Months",
    days: "5 Days/wk",
    hours: "1.5 hrs/day",
    description: "Gentle wean toddlers from home to a structured, play-filled environment with a 1:6 teacher-child ratio and all-female experienced staff.",
    features: [
      "Routine development & confidence building",
      "Sensory exploration & fine motor skills",
      "Linguistic & interpersonal skills",
      "Structured 20-week life skills curriculum",
      "Child First - Safety First at all times"
    ],
    imageSrc: "/slider/01.jpeg",
    btnText: "Enquire for EuroTots",
    btnColor: "bg-[#0b4b8a] hover:bg-blue-800"
  },
  {
    id: 2,
    title: "Playgroup",
    subtitle: "Playgroup in Faridabad • Sector 86",
    age: "2-3 Years",
    days: "5 Days/wk",
    hours: "3 hrs/day",
    description: "Hands-on discovery and multidisciplinary learning with exclusive EuroKids kits — making every session a joyful adventure.",
    features: [
      "Discovery & exploration with EuroKids kits",
      "Developing language & communication skills",
      "Encouraging new-age 21st-century skills",
      "Physical, emotional & social engagement",
      "Shaping scientific thought in children"
    ],
    imageSrc: "/slider/02.jpeg",
    btnText: "Enquire for Playgroup",
    btnColor: "bg-[#0b4b8a] hover:bg-blue-800"
  },
  {
    id: 3,
    title: "Nursery",
    subtitle: "Nursery in Faridabad • Sector 86",
    age: "3-4 Years",
    days: "5 Days/wk",
    hours: "3 hrs/day",
    description: "Essential life skills, creative expression, and curiosity development through fun activities and exclusive EuroKids learning materials.",
    features: [
      "Imparts essential life skills",
      "Learning & interaction through fun",
      "Developing language skills",
      "Cultivating creativity & curiosity",
      "Imagination building & motor skills"
    ],
    imageSrc: "/slider/03.jpeg",
    btnText: "Enquire for Nursery",
    btnColor: "bg-[#0b4b8a] hover:bg-blue-800"
  },
  {
    id: 4,
    title: "EuroJunior (Jr. KG)",
    subtitle: "Junior KG in Faridabad • Sector 86",
    age: "4-5 Years",
    days: "5 Days/wk",
    hours: "4 hrs/day",
    description: "Age-appropriate language development with tailored learning tools — encouraging every child to express thoughts and grow at their own pace.",
    features: [
      "Special language development activities",
      "Age-appropriate EuroKids learning tools",
      "Children express ideas & feelings freely",
      "Each child grows at their own pace",
      "Building Brain Power & social skills"
    ],
    imageSrc: "/slider/04.jpeg", 
    btnText: "Enquire for EuroJunior",
    btnColor: "bg-[#0b4b8a] hover:bg-blue-800"
  },
  {
    id: 5,
    title: "EuroSenior (Sr. KG)",
    subtitle: "Senior KG in Faridabad • Sector 86",
    age: "5-6 Years",
    days: "5 Days/wk",
    hours: "4 hrs/day",
    description: "Full school readiness through vocabulary building, reading & writing mastery, and attention development with exclusive EuroKids Kits.",
    features: [
      "Building & enhancing vocabulary",
      "Developing attention span",
      "Innovative reading & writing methods",
      "Inclusive EuroKids learning kits",
      "Complete primary school preparation"
    ],
    imageSrc: "/slider/05.jpeg",
    btnText: "Enquire for EuroSenior",
    btnColor: "bg-[#0b4b8a] hover:bg-blue-800"
  },
  {
    id: 6,
    title: "After-School Care",
    subtitle: "After-School Program in Faridabad • Homework & Enrichment",
    age: "6-12 Years",
    days: "Mon-Sat",
    hours: "Post-school",
    description: "A safe, productive after-school space where older kids relax, complete homework, and explore new interests under dedicated supervision.",
    features: [
      "Supervised homework help & academic support",
      "Sports, yoga & outdoor activities",
      "Art, music & creative expression",
      "21st-century skill development",
      "Safe pickup & drop-off options"
    ],
    imageSrc: "/slider/06.jpeg", 
    btnText: "Enquire for After-School",
    btnColor: "bg-[#d97706] hover:bg-[#b45309]" 
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-10 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-[#0b4b8a] text-sm font-bold tracking-wide mb-4 uppercase">
            <span>📚</span> OUR PROGRAMS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Programs for <span className="text-[#0b4b8a]">Every Stage</span> of Childhood
          </h2>
          <p className="text-gray-600 text-lg">
            From the first steps away from home to after-school enrichment — every EuroKids program is age-appropriate, evidence-based, and joyful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              
              <div className="relative h-56 w-full bg-gray-200">
                {/* Image replaces the Video here */}
                <Image 
                  src={program.imageSrc}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />

                <div className="absolute top-4 right-4 bg-[#0b4b8a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                  {program.age}
                </div>

                {/* Bottom Left Schedule Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="bg-[#0b4b8a] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {program.days}
                  </span>
                  <span className="bg-[#0b4b8a] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {program.hours}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-[#185bc3] text-sm font-semibold">{program.subtitle}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link 
                    href="#contact" 
                    className={`block w-full text-center text-white py-3 rounded-xl font-semibold transition-colors duration-300 ${program.btnColor}`}
                  >
                    {program.btnText}
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}