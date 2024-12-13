import Avatar from "./Avatar";

export default function AvatarRow() {
  return (
    <div className="relative w-28 h-16">
      <Avatar
        src="/pricemaven-avatar-1.avif"
        alt="Pricemaven Avatar Image 1"
        className="left-0 top-0 z-10 w-9 h-9"
      />

      <Avatar
        src="/pricemaven-avatar-2.avif"
        alt="Pricemaven Avatar Image 2"
        className="left-8 top-0 z-20 w-9 h-9"
      />

      <Avatar
        src="/pricemaven-avatar-3.avif"
        alt="Pricemaven Avatar Image 3"
        className="left-16 top-0 z-30 w-9 h-9"
      />
    </div>
  );
}
