import Input from "./Input";
import TextPrimary from "./TextPrimary";

export default function Hero() {
  return (
    <div className="bg-background w-full h-hero  ">
      <div className="container mx-auto">
        {/* Left Hero Content */}
        <div>
          <h1>
            Accelerate Your Product Development.{" "}
            <TextPrimary> Build Faster.</TextPrimary>
          </h1>
          <p>
            Scope and estimate your projects accurately, streamline your
            workflow, and speed up your product development - all in one place.
            <TextPrimary> Powered by AI</TextPrimary>
          </p>
          <Input />
        </div>

        {/* Right Hero Content */}
      </div>
    </div>
  );
}
