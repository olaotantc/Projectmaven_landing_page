import { useModalContext } from "@/context/ModalContext";
import HeroLeft from "./HeroLeft"; // Importing the left part of the Hero section
import HeroRight from "./HeroRight"; // Importing the right part of the Hero section
import Confetti from "@/components/Confetti";
import EmailModal from "@/components/EmailModal";
export default function Hero() {
  const { showModal ,onClose} = useModalContext();
  return (
    <div className="bg-background w-full  overflow-hidden h-[1000px] md:h-hero px-5">
      {/* Hero container with background and padding */}
      <Confetti />
      <EmailModal open={showModal} onClose={onClose} />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full pt-[70px] md:pt-0 place-content-start md:place-content-center">
        {/* Left Hero Content */}
        <HeroLeft />
        {/* Left section, usually containing a heading, tagline, or image */}
        {/* Right Hero Content */}
        <HeroRight />
        {/* Right section, could contain a call to action or another image */}
      </div>
    </div>
  );
}
