"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      {/* Main container for content */}
      <div className="w-full h-full">
        <Hero /> {/* Hero section */}
        <Services /> {/* Services section */}
      </div>
    </ModalProvider>
  );
}
