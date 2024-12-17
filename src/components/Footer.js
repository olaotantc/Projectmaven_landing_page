import Image from "next/image"; // Importing Next.js Image component for optimized images
import Input from "./Input"; // Importing custom Input component for the subscription form
import TextAccent from "./TextAccent"; // Importing custom TextAccent component for styling
import { socialMedias } from "@/data/footerData"; // Importing social media data for links and icons
import Link from "next/link"; // Importing Next.js Link component for navigation

// Footer component
export default function Footer() {
  return (
    <div className="bg-footer h-full mt-8 px-5 md:px-0">
      {/* Footer container with background and margin */}
      <div className="container mx-auto py-24 md:py-auto md:p-24 text-center grid place-items-center">
        {/* Centering content with responsive padding */}
        {/* Logo section */}
        <div className="w-[129px] h-[39px] relative">
          <Image
            src={"/pricemaven-logo-ai-product-development.avif"} // Image source for the logo
            fill="true" // Ensures the image fills the container
            className="object-contain" // Keeps the image aspect ratio intact
            alt="Pricemaven logo - AI-powered product development tools for accurate project estimation, scoping, and documentation" // Alt text for accessibility
          />
        </div>
        {/* Subscription message */}
        <p className="mb-6 mt-4">
          Subscribe to receive updates and be first on our Beta list
        </p>
        {/* Subscription form */}
        <Input
          btnText={"Subscribe"} // Button text for subscribing
          small={true} // Prop for smaller input size
          subText={
            // Additional text displayed below the input field
            <span className="mt-3">
              By subscribing, you agree to our Privacy Policy and consent to
              receive <br /> updates from our company.
            </span>
          }
        />
        {/* Social media follow section */}
        <h5 className="font-bold mt-8">Follow Us</h5>
        <div className="flex items-center justify-center gap-3 mt-5">
          {socialMedias.map((item) => {
            // Mapping through social media data to create links with icons
            return (
              <Link key={item.id} href={item.url}>
                {/* Each social media link */}
                {item.icon} {/* Icon for the social media platform */}
              </Link>
            );
          })}
        </div>
        {/* Footer copyright */}
        <p className="mt-12">
          © Copyright 2024, All Rights Reserved by &nbsp;
          <TextAccent>Pricemaven</TextAccent>
          {/* TextAccent component used for styling the brand name */}
        </p>
      </div>
    </div>
  );
}
