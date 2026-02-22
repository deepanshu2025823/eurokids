// components/WhatsAppConnect.tsx

"use client";
import React, { useState } from "react";

const chatOptions = [
  {
    id: "admission",
    title: "Admission Enquiry",
    desc: "Get details about fee structure, curriculum, and our enrollment process.",
    icon: "🎓",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "tour",
    title: "Schedule a Tour",
    desc: "Visit our campus, meet our lovely teachers, and see our facilities live.",
    icon: "🏫",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    id: "daycare",
    title: "Daycare Details",
    desc: "Learn about our safe, nurturing, and engaging after-school programs.",
    icon: "🧸",
    badgeColor: "bg-orange-100 text-orange-800",
  }
];

export default function WhatsAppConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  
  const [parentName, setParentName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const openPopup = (title: string) => {
    setSelectedTopic(title);
    setIsModalOpen(true);
  };

  const closePopup = () => {
    setIsModalOpen(false);
    setParentName("");
    setMobile("");
    setMessage("");
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    const waText = `Hello EuroKids Sector 86,%0A%0AI want to connect regarding *${selectedTopic}*.%0A%0A*Parent Name:* ${parentName}%0A*Mobile:* ${mobile}%0A*Additional Message:* ${message || 'N/A'}`;
    
    window.open(`https://wa.me/919560096091?text=${waText}`, '_blank');
    
    closePopup();
  };

  return (
    <section className="w-full py-5 md:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[#183385] text-3xl md:text-4xl lg:text-[40px] font-extrabold mb-4">
            Connect With Us Instantly
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Have questions? Choose a topic below and chat directly with our center head on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {chatOptions.map((option) => (
            <div 
              key={option.id} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm ${option.badgeColor}`}>
                {option.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{option.desc}</p>
              
              <button 
                onClick={() => openPopup(option.title)}
                className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-green-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.327.096.142.428.682.915 1.162.63.62 1.157.813 1.305.882.144.069.231.058.318-.035l.373-.429c.144-.173.3-.144.433-.095.133.049.837.394.981.467.144.072.24.108.275.173.035.065.035.378-.109.783z"/></svg>
                Chat on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-300">
            
            <div className="bg-[#25D366] p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.327.096.142.428.682.915 1.162.63.62 1.157.813 1.305.882.144.069.231.058.318-.035l.373-.429c.144-.173.3-.144.433-.095.133.049.837.394.981.467.144.072.24.108.275.173.035.065.035.378-.109.783z"/></svg>
                <h2 className="text-lg font-bold">WhatsApp Quick Connect</h2>
              </div>
              <button onClick={closePopup} className="text-white/80 hover:text-white font-bold text-2xl leading-none">&times;</button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-sm mb-5">
                You are enquiring about: <strong className="text-[#183385]">{selectedTopic}</strong>. <br/> Please provide basic details before we redirect you to WhatsApp.
              </p>

              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    required 
                    type="text" 
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="E.g. John Doe" 
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-[#25D366] outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <span className="text-gray-500 font-medium">+91</span>
                    </div>
                    <input 
                      required 
                      type="tel" 
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                      placeholder="9958313631" 
                      className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-[#25D366] outline-none" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Any specific question? <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea 
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..." 
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-[#25D366] outline-none resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#183385] hover:bg-[#0f215e] text-white py-3.5 rounded-xl font-bold text-[15px] transition-colors mt-2 shadow-md flex items-center justify-center gap-2"
                >
                  Proceed to WhatsApp
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                We respect your privacy. No spam.
              </p>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}