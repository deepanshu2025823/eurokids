"use client";

import { useState } from "react";
import Image from "next/image";

const programs = [
  {
    id: 1,
    title: "EuroTots",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    childAge: "",
    program: "",
    message: "",
  });

  const openModal = (programTitle: string) => {
    setFormData((prev) => ({ ...prev, program: programTitle }));
    setIsModalOpen(true);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    const rawMessage = `*New Program Enquiry*

*Parent's Name:* ${formData.parentName}
*Child's Name:* ${formData.childName}
*Phone Number:* ${formData.phone}
*Child's Age:* ${formData.childAge}
*Interested Program:* ${formData.program}
*Message:* ${formData.message || "N/A"}`;

    // Properly encode to keep newlines intact
    const encodedMessage = encodeURIComponent(rawMessage);

    const whatsappNumber = "919560096091";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    
    setIsModalOpen(false);
    
    setFormData({
      parentName: "",
      childName: "",
      phone: "",
      childAge: "",
      program: "",
      message: "",
    });
  };

  return (
    <>
      <section id="programs" className="py-10 bg-[#fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-[#0b4b8a] text-sm font-bold tracking-wide mb-4 uppercase">
              OUR PROGRAMS
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

                  <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                    <span className="bg-[#0b4b8a] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md">
                      {program.days}
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
                    <button 
                      onClick={() => openModal(program.title)}
                      className={`block w-full text-center text-white py-3 rounded-xl font-semibold transition-colors duration-300 ${program.btnColor}`}
                    >
                      {program.btnText}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Program Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="p-8">
              <h2 className="text-[#0b4b8a] text-2xl font-bold text-center mb-2">Program Enquiry</h2>
              <p className="text-gray-500 text-sm text-center mb-6">You are enquiring for <strong>{formData.program}</strong></p>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                
                {/* Parent's Name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Parent's Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    pattern="^[A-Za-z\s]{2,50}$"
                    title="Please enter a valid name (letters only)"
                    placeholder="Enter parent's name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800"
                  />
                </div>

                {/* Child's Name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Child's Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    pattern="^[A-Za-z\s]{2,50}$"
                    title="Please enter a valid name (letters only)"
                    placeholder="Enter child's name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800"
                  />
                </div>

                {/* Phone & Child's Age */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="^[6-9]\d{9}$"
                      title="Enter a valid 10-digit Indian mobile number"
                      placeholder="10-digit number"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Child's Age <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 3 Years"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800"
                    />
                  </div>
                </div>

                {/* Program Selection (Read-only, auto-filled based on button click) */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Selected Program</label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    readOnly
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 outline-none cursor-not-allowed"
                  />
                </div>

                {/* Message (Optional) */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Any Questions? (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-[#0b4b8a] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  Submit Enquiry
                </button>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}