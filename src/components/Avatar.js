// components/Avatar.js
import Image from 'next/image';

const Avatar = ({ src, alt, className }) => {
  return (
    <div className={`absolute border border-white rounded-full bg-gray-200 flex items-center justify-center ${className} top-1 w-8 h-8`}>
      <div className="w-full h-full overflow-hidden rounded-full">
        <Image
          src={src} // Avatar image source
          alt={alt} // Alt text for accessibility
          layout="intrinsic" // Ensures the image keeps its intrinsic aspect ratio
          width={36} // Width of the avatar image
          height={36} // Height of the avatar image
          className="object-cover w-full h-full" // Ensures the image covers the entire container while maintaining aspect ratio
        />
      </div>
    </div>
  );
};

export default Avatar;
