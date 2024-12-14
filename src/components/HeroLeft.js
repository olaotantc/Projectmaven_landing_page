import AvatarRow from "./AvatarRow";
import Input from "./Input";
import TextAccent from "./TextAccent";
import TextHeading from "./TextHeading";

export default function HeroLeft() {
  return (
    <div className="flex items-center  justify-center flex-col md:block">
      <TextHeading
  
        text={"Accelerate Your Product Development."}
        accentText={"Build Faster."}
        addStyles={"text-[45px] font-extrabold text-center md:text-left "}
      />
      <br />
      <p className="text-content-secondary   md:text-base lg:text-lg">
        Scope and estimate your projects accurately, streamline your workflow,
        and speed up your product development - all in one place.
        <TextAccent> Powered by AI</TextAccent>
      </p>
      <br />
      <Input />
      <p className="text-content-secondary font-semibold text-xs my-2">
        By subscribing you're confirming that you agree with our Terms and
        Conditions.
      </p>
      <br />
      <div className="flex  flex-col items-center justify-center md:flex-row md:justify-start">
        <AvatarRow />
        <p className="text-sm md:text-base ">
          <strong>100+</strong> Already Subscribed
        </p>
      </div>
    </div>
  );
}
