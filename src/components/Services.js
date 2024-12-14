import ServiceCard from "./ServiceCard";
import TextHeading from "./TextHeading";

export default function Services() {
  return (
    <div className="w-full min-h-screen container mx-auto text-center py-28 ">
      <TextHeading
        size="35px"
        text="Product Development"
        accentText={"Simplified"}
        isBr={true}
        addStyles={"text-[35px] font-bold  text-center "}
      />

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
