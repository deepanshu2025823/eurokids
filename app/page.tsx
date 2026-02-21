// app/page.tsx

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Programs from "@/components/Programs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import LocationContact from "@/components/LocationContact";
import InstagramFeed from "@/components/InstagramFeed";
import BottomNav from "@/components/BottomNav"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pb-20 md:pb-0 relative">
      
      <Header />

      <HeroSection />
      <Programs />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <LocationContact />
      <InstagramFeed />
      
      <footer className="w-full bg-[#111827] text-gray-400 py-8 text-center text-sm border-t border-[#1f2937]">
        <p className="font-medium text-gray-300">© {new Date().getFullYear()} EuroKids Daycare, Preschool & Activity Centre. Sector 86, Faridabad.</p>
        <p className="mt-2 text-xs opacity-70">Designed & Developed By Deepanshu Joshi.</p>
      </footer>

      <BottomNav />
      
    </main>
  );
}