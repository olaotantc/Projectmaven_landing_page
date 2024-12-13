// components/Avatar.js
import Image from 'next/image';

const Avatar = ({ src, alt, className }) => {
  return (
    <div className={`absolute border border-white rounded-full bg-gray-200 flex items-center justify-center ${className}`}>
      <div className="w-full h-full overflow-hidden rounded-full">
        <Image
          src={src}
          alt={alt}
          layout="intrinsic"
          width={36} // Set to the appropriate width
          height={36} // Set to the appropriate height
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Avatar;
