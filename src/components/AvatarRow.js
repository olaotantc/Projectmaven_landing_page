import Avatar from "./Avatar";

export default function AvatarRow() {
  return (
    <div className="relative w-[85px] h-10"> {/* Container with relative positioning */}
      
      {/* First Avatar */}
      <Avatar
        src="/projectmaven-avatar-1.avif" 
        alt="Projectmaven Avatar Image 1"
        className="left-0 z-10" // Positioned at the left with z-index 10
      />

      {/* Second Avatar */}
      <Avatar
        src="/projectmaven-avatar-2.avif"
        alt="Projectmaven Avatar Image 2"
        className="left-6 z-20" // Positioned 6 units to the left with z-index 20
      />

      {/* Third Avatar */}
      <Avatar
        src="/projectmaven-avatar-3.avif"
        alt="Projectmaven Avatar Image 3"
        className="left-12 z-30" // Positioned 12 units to the left with z-index 30
      />
    </div>
  );
}
