import Image from "next/image";

export default function ServiceCard({ id, title, description }) {
  return (
    <div className="flex flex-col items-center justify-start gap-5 text-center h-full">
      {/* Icon: Displaying the service icon based on the service ID */}
      <div className="w-16 h-16 flex items-center justify-center">
        <Image
          src={`/pricemaven-service-${id}.svg`} // Dynamic image source based on the service ID
          alt={title} // Alt text for accessibility
          width={40} // Setting the width of the icon
          height={40} // Setting the height of the icon
          className="object-contain" // Ensures the image maintains its aspect ratio
        />
      </div>

      {/* Title: Displaying the title of the service */}
      <h2
        className="text-xl md:text-2xl font-medium font-inter"
        style={{ letterSpacing: "-1px" }} // Custom letter spacing for styling
      >
        {title} {/* The service title passed as a prop */}
      </h2>

      {/* Description: Displaying the description of the service */}
      <p className="text-base flex-1">{description}</p>
    </div>
  );
}
