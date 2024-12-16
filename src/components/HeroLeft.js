import Image from "next/image";
import AvatarRow from "./AvatarRow"; // Importing the AvatarRow component to show avatars of subscribed users
import Input from "./Input"; // Importing a custom Input component for subscription
import TextAccent from "./TextAccent"; // Custom component for styling accent text
import TextHeading from "./TextHeading"; // Custom heading component for consistent text styling

export default function HeroLeft() {
  return (
    <div className="flex items-center justify-center flex-col md:items-start">
      {/* Centering content on mobile and displaying as block on desktop */}
      {/* Heading Section */}
      <TextHeading
        text={"Accelerate Your Product Development."} // Main heading text
        accentText={"Build Faster."} // Accent text for emphasis
        addStyles={
          "text-[42px] md:text-[35px] lg:text-[48px] font-extrabold text-center md:text-left "
        } // Custom styles for font size, weight, and alignment
      />
      <br />
      {/* Description Paragraph */}
      <p className="text-content-secondary md:text-base lg:text-lg">
        Scope and estimate your projects accurately, streamline your workflow,
        and speed up your product development - all in one place.
        <TextAccent> Powered by AI</TextAccent>{" "}
        {/* Accent text for highlighting AI */}
      </p>
      <br />
      <div className="w-full relative flex items-center justify-center md:justify-start">
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
          alt="pricemaven hero arrow icon"
          priority
        />
      </div>
      <br />
      {/* Avatar and Subscription Count */}
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start">
        <AvatarRow /> {/* Displays avatars of users who subscribed */}
        <p className="text-sm md:text-base ">
          <strong>100+</strong> Already Subscribed {/* Subscription count */}
        </p>
      </div>
    </div>
  );
}
