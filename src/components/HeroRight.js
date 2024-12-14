import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="relative">
    <Image
      src="/hero-img.svg"
      alt="Pricemaven Hero Banner Image"
      layout="fill"
      objectFit="cover"
      className="rounded-r-lg"
      priority // Optional, for image preload to improve page load speed
    />
  </div>
  );
}
