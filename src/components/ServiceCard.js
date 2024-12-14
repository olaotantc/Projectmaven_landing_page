import Image from "next/image";

export default function ServiceCard({ id, title, description }) {
  return (
    <div className="flex flex-col items-center justify-start gap-5 text-center h-full">
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center">
        <Image
          src={`/pricemaven-service-${id}.svg`}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h2
        className="text-2xl font-medium font-inter"
        style={{ letterSpacing: "-1px" }}
      >
        {title}
      </h2>

      {/* Description */}
      <p className=" flex-1">{description}</p>
    </div>
  );
}
