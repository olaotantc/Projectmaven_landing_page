import Image from "next/image"; // Importing Next.js Image component for optimized image loading

export default function HeroRight() {
  return (
    <div className="relative w-full h-full mt-32 sm:mt-40 md:mt-0 grid place-items-center ">
      <Image
        src="/hero-img.svg" // Path to the hero image
        alt="Pricemaven Hero Banner Image" // Alt text for accessibility
        height={3000}
        width={3000}
        objectFit="cover" // Ensures the image covers the container, maintaining aspect ratio without distortion
        className="rounded-r-lg transform scale-[2] absolute -right-10 md:-right-20" // Adds rounded corners on the right side of the image
        priority // Optional: Preloads the image to improve load speed
      />
    </div>
  );
}
