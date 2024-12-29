"use client"
import Image from "next/image";
import AvatarRow from "./AvatarRow"; // AvatarRow component to show avatars of subscribed users
import Input from "./Input"; // Custom Input component for subscription
import TextHeading from "./TextHeading"; // Custom heading component for consistent text styling
import { FadeUp } from "./FadeZoom"; // Fade-up animation component
import AnimatedText from "./AnimatedText"; // Animated text component for dynamic text effects

export default function HeroLeft() {
  return (
    <div className="flex items-center justify-center flex-col md:items-start z-30">
      {/* Centering content on mobile and displaying as block on desktop */}
      
      {/* Heading Section */}
      <FadeUp delay={0.3}>
        <TextHeading
          text={"Accelerate Your Product Development."} // Main heading text
          accentText={"Build Faster."} // Accent text for emphasis
          addStyles={
            "text-[42px] md:text-[35px] lg:text-[48px] font-extrabold text-center md:text-left "
          } // Custom styles for font size, weight, and alignment
        />
      </FadeUp>
      <br />

      {/* Animated description text */}
      <AnimatedText
        text="Scope your projects accurately, streamline your workflow, and speed up your product development - all in one place."
        className="text-content-secondary md:text-base lg:text-lg"
        TextAccent="Powered by AI"
      />
      <br />
      
      <FadeUp
        delay={0.6}
        className="w-full relative flex items-center justify-center md:justify-start"
      >
        {/* Subscription Input */}
        <Input
          btnText={"Join the Waitlist"} // Button text for subscription
          subText={
            "By subscribing you're confirming that you agree with our Terms and Conditions." // Subtext with terms
          }
        />
        <Image
          src="/arrow.svg"
          width={75}
          height={75}
          className="absolute hidden md:block -right-16 xl:right-10 -top-2"
          alt="projectmaven hero arrow icon"
          priority
        />
      </FadeUp>
      <br />
      
      {/* Avatar and Subscription Count */}
      <FadeUp delay={0.9}>
        <div className="w-full flex items-center justify-center md:justify-start">
          <AvatarRow /> {/* Displays avatars of users who subscribed */}
          <p className="text-sm md:text-base ">
            <strong>100+</strong> Already Subscribed {/* Subscription count */}
          </p>
        </div>
      </FadeUp>
    </div>
  );
}
