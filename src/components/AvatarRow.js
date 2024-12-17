import Avatar from "./Avatar";

export default function AvatarRow() {
  return (
    <div className="relative w-[85px] h-10"> {/* Container with relative positioning */}
      
      {/* First Avatar */}
      <Avatar
        src="/projectmaven-avatar-1.avif" // Source for the first avatar
        alt="Projectmaven Avatar Image 1" // Alt text for accessibility
        className="left-0 z-10" // Position and z-index for the first avatar
      />

      {/* Second Avatar */}
      <Avatar
        src="/projectmaven-avatar-2.avif" // Source for the second avatar
        alt="Projectmaven Avatar Image 2" // Alt text for accessibility
        className="left-6 z-20" // Position and z-index for the second avatar
      />

      {/* Third Avatar */}
      <Avatar
        src="/projectmaven-avatar-3.avif" // Source for the third avatar
        alt="Projectmaven Avatar Image 3" // Alt text for accessibility
        className="left-12 z-30" // Position and z-index for the third avatar
      />
    </div>
  );
}
