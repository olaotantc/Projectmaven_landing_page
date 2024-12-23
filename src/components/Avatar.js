// components/Avatar.js
import Image from 'next/image';

const Avatar = ({ src, alt, className }) => {
  return (
    <div className={`absolute border border-white rounded-full bg-gray-200 flex items-center justify-center ${className} top-1 w-8 h-8`}>
      <div className="w-full h-full overflow-hidden rounded-full">
        <Image
          src={src} // Avatar image source
          alt={alt} // Alt text for accessibility
          layout="intrinsic" // Maintains intrinsic aspect ratio
          width={36} // Avatar image width
          height={36} // Avatar image height
          className="object-cover w-full h-full" // Ensures the image fills the container
        />
      </div>
    </div>
  );
};

export default Avatar;
