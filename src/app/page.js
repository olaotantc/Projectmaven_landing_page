"use client";
import Hero from "@/components/Hero"; // Import Hero component
import Services from "@/components/Services"; // Import Services component
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init({}); // Initialize AOS with custom duration
  }, []);
  return (
    <div className="w-full h-full ">
      <Hero /> {/* Hero section */}
      <Services /> {/* Services section */}
    </div>
  );
}
