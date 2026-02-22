// components/InstagramFeed.tsx

"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const reelLinks = [
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DU-s4s4AVgw/",
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DU5h2bAAQd5/",
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DUxSnElgf8X/",
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DUqOxflgfYO/",
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DUnmJThgWxT/",
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DUkWQTUAQCM/",
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DUiZbN3gfJy/",
  "https://www.instagram.com/eurokidssec86summerpalm/reel/DUYNA_wgdpw/",
];

const getEmbedUrl = (url: string) => {
  const shortcode = url.split("/reel/")[1]?.split("/")[0];
  return `https://www.instagram.com/p/${shortcode}/embed/?autoplay=1`;
};

export default function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-5 md:py-10 bg-[#f8fafc] relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-16 bg-white" style={{borderRadius: '0 0 50% 50% / 0 0 100% 100%', transform: 'scaleX(1.5)'}}></div>

      {/* Changed max-w-7xl to max-w-[1400px] to give enough space for 4 columns on laptops */}
      <div className="max-w-[1400px] mx-auto relative z-10 px-4 lg:px-8 mt-10">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#183385] text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold flex flex-wrap items-center justify-center gap-3 leading-snug">
            <span className="text-[#E1306C] drop-shadow-sm">
              <svg className="w-9 h-9 sm:w-10 sm:h-10 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </span> 
            Life at EuroKids Sector 86
          </h2>
          <p className="text-gray-500 mt-4 font-medium text-[15px] sm:text-lg max-w-2xl mx-auto">
            Catch glimpses of joyful learning and daily fun on our Instagram!
          </p>
        </div>

        {/* Removed lg:grid-cols-3 and xl:grid-cols-4, replaced strictly with lg:grid-cols-4 */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          
          {isVisible ? reelLinks.map((url, index) => (
            <div 
              key={index}
              className="relative w-[85vw] sm:w-[320px] md:w-auto h-[560px] rounded-2xl overflow-hidden shadow-lg snap-center shrink-0 group bg-gray-100"
            >
              <iframe 
                src={getEmbedUrl(url)} 
                className="w-full h-full border-0 absolute top-0 left-0"
                scrolling="no" 
                allow="encrypted-media; autoplay"
                title={`EuroKids Reel ${index + 1}`}
              ></iframe>

              <Link 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                title="Watch on Instagram"
              >
                <div className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-xl flex flex-col items-center">
                  <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                  <span className="font-bold text-sm mt-2 tracking-wide">Watch Reel</span>
                </div>
              </Link>
            </div>
          )) : (
            [...Array(8)].map((_, i) => (
              <div key={i} className="w-[85vw] sm:w-[320px] md:w-auto h-[560px] rounded-2xl bg-gray-200 animate-pulse snap-center shrink-0"></div>
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="https://www.instagram.com/eurokidssec86summerpalm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold px-8 py-3.5 rounded-full text-[15px] sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            Follow Us on Instagram
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
          </Link>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}