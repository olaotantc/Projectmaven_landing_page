import servicesData from "@/data/serviceData"; // Importing service data
import ServiceCard from "./ServiceCard"; // Importing the ServiceCard component
import TextHeading from "./TextHeading"; // Importing the heading component
import { FadeUp } from "./FadeZoom";

export default function Services() {
  return (
    <div className="w-full mt-5  container mx-auto text-center py-28">
      {/* Section title with accent text */}
      <FadeUp delay={.3}>
        <TextHeading
          size="35px"
          text="Product Development"
          accentText={"Simplified"}
          isBr={true}
          addStyles={"text-[35px] font-bold text-center px-5"}
        />
      </FadeUp>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 px-10 md:px-0 mt-16 md:mt-24 gap-7 md:grid-cols-2 lg:grid-cols-4">
        {/* Rendering each service card */}
        {servicesData.map((service) => (
          <ServiceCard
            id={service.id} // Unique ID for each service
            key={service.id} // Key for React list rendering
            title={service.title} // Service title
            description={service.description} // Service description
          />
        ))}
      </div>
    </div>
  );
}
