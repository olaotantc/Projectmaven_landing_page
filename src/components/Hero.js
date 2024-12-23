import { useModalContext } from "@/context/ModalContext";
import HeroLeft from "./HeroLeft"; // Left part of the Hero section
import HeroRight from "./HeroRight"; // Right part of the Hero section
import Confetti from "@/components/Confetti"; 
import EmailModal from "@/components/EmailModal";

export default function Hero() {
  return (
    <div className="bg-background w-full overflow-hidden h-[1000px] md:h-hero px-5">
      <Confetti />
      <EmailModal />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full pt-[70px] md:pt-0 place-content-start md:place-content-center">
        
        {/* Left Hero Content */}
        <HeroLeft />
        
        {/* Right Hero Content */}
        <HeroRight />
        
      </div>
    </div>
  );
}
