import HeroLeft from "./HeroLeft"; // Importing the left part of the Hero section
import HeroRight from "./HeroRight"; // Importing the right part of the Hero section

export default function Hero() {
  return (
    <div className="bg-background w-full  overflow-hidden h-[1000px] md:h-hero px-5"> {/* Hero container with background and padding */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full pt-[70px] md:pt-0 place-content-start md:place-content-center">
        {/* Left Hero Content */}
        <HeroLeft /> {/* Left section, usually containing a heading, tagline, or image */}

        {/* Right Hero Content */}
        <HeroRight /> {/* Right section, could contain a call to action or another image */}
      </div>
    </div>
  );
}
