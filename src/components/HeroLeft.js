import AvatarRow from "./AvatarRow";
import Input from "./Input";
import TextAccent from "./TextAccent";

export default function HeroLeft() {
  return (
    <div className="flex items-center justify-center flex-col md:block">
      <h1
        className="font-bold text-[45px] md:text-5xl text-center md:text-left  "
        style={{ lineHeight: "1.2" ,letterSpacing:'-1px' }}
      >
        Accelerate Your Product Development.{" "}
      <br className="md:hidden" />
        <TextAccent> Build Faster.</TextAccent>
      </h1>
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
