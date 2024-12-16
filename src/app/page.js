import Hero from "@/components/Hero"; // Import Hero component
import Services from "@/components/Services"; // Import Services component

export default function Home() {
  return (
    <div className="w-full h-full "> {/* Full-width and height wrapper */}
      <Hero /> {/* Hero section */}
      <Services /> {/* Services section */}
    </div>
  );
}
