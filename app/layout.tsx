// app/layouts.tsx

import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";

export const metadata: Metadata = {
  title: "EuroKids Preschool Sector 86, Summer Palm, Faridabad",
  description: "Give your child the Right Start at EuroKids Daycare & Preschool in Sector 86, Greater Faridabad. Programs for 1 to 6 years. Admissions Open! Call 9560096091.",
  keywords: "EuroKids, Preschool in Faridabad, Daycare Sector 86, Playgroup, Nursery, EuroJunior, EuroSenior, Summer Palm Society, Day Care Sector 86 Faridabad, Preschool in Summer Palm Faridabad, Early childhood education Faridabad, Nursery & Kindergarten Summer Palm, Preschool admissions Faridabad 2026, EuroKids Preschool Sector 86 Faridabad",
  authors: [{ name: "EuroKids Sector 86" }],
  openGraph: {
    title: "EuroKids Preschool & Daycare - Sector 86, Faridabad",
    description: "A nurturing space where bright futures begin. Growing, Learning & Having Fun! Playgroup to EuroSenior.",
    url: "https://www.eurokidsindia.com",
    siteName: "EuroKids Preschool Sector 86",
    images: [
      {
        url: "https://www.eurokidsindia.com/1pagemicrosite/assets/images/logo_footer.png",
        width: 800,
        height: 600,
        alt: "EuroKids Preschool Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link href="https://fonts.cdnfonts.com/css/glacial-indifference-2" rel="stylesheet" />
      </head>
      <body className="font-['Glacial_Indifference',sans-serif] antialiased selection:bg-[#ec008c] selection:text-white">
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}