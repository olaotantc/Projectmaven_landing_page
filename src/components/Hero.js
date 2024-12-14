import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="bg-background w-full h-hero px-5  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full pt-[70px] md:pt-0 place-content-start md:place-content-center">
        {/* Left Hero Content */}
        <HeroLeft />

        {/* Right Hero Content */}
        <HeroRight />
      </div>
    </div>
  );
}
