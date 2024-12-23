import Image from "next/image"; // Importing Next.js Image component for optimized image loading
import { ZoomIn } from "./FadeZoom"; // Importing ZoomIn component for animation effects

export default function HeroRight() {
  return (
    <ZoomIn>
      <div className="relative w-full h-full mt-32 z-0 md:p-0 sm:mt-40 md:mt-0 grid place-items-center ">
        {/* Hero image with scaling effect */}
        <Image
          src="/hero-img.svg" // Path to the hero image
          alt="Projectmaven Hero Banner Image" // Alt text for accessibility
          height={3000}
          width={3000}
          objectFit="cover" // Ensures the image covers the container, maintaining aspect ratio without distortion
          className="rounded-r-lg transform scale-[2] absolute -right-10 md:-right-20" // Adds rounded corners and scales image
          priority // Preloads the image for faster load
        />
        {/* Device image with scaling effect */}
        <Image
          src="/device.svg" // Path to the device image
          alt="Projectmaven Hero Banner Image" // Alt text for accessibility
          height={750}
          width={750}
          layout="responsive"
          objectFit="cover" // Ensures the image covers the container, maintaining aspect ratio without distortion
          className="rounded-r-lg transform scale-90 md:scale-100 absolute left-0 md:left-16" // Adds rounded corners and adjusts scale
          priority // Preloads the image for faster load
        />
      </div>
    </ZoomIn>
  );
}
