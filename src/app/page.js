"use client";

import Hero from "@/components/Hero"; // Import Hero component
import Services from "@/components/Services"; // Import Services component
import { ModalProvider } from "@/context/ModalContext";
export default function Home() {
  return (
    <ModalProvider>
      <div className="w-full h-full ">
        <Hero /> {/* Hero section */}
        <Services /> {/* Services section */}
      </div>
    </ModalProvider>
  );
}
