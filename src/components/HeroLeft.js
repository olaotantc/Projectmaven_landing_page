import AvatarRow from "./AvatarRow";
import Input from "./Input";
import TextAccent from "./TextAccent";

export default function HeroLeft() {
  return (
    <div>
      <h1
        className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl "
        style={{ lineHeight: "1.2" }}
      >
        Accelerate Your Product Development.{" "}
        <TextAccent> Build Faster.</TextAccent>
      </h1>
      <br />
      <p className="text-content-secondary text-sm  md:text-base lg:text-lg">
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
      <div className="flex ">
        <AvatarRow />
        <p className="text-base md:text-lg">
          <strong>100+</strong> Already Subscribed
        </p>
      </div>
    </div>
  );
}
