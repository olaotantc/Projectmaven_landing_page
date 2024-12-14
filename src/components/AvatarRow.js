import Avatar from "./Avatar";

export default function AvatarRow() {
  return (
    <div className="relative w-[85px] h-10">
      <Avatar
        src="/pricemaven-avatar-1.avif"
        alt="Pricemaven Avatar Image 1"
        className="left-0 top-1 z-10 w-8 h-8"
      />

      <Avatar
        src="/pricemaven-avatar-2.avif"
        alt="Pricemaven Avatar Image 2"
        className="left-6 top-1 z-20 w-8 h-8"
      />

      <Avatar
        src="/pricemaven-avatar-3.avif"
        alt="Pricemaven Avatar Image 3"
        className="left-12 top-1 z-30 w-8 h-8"
      />
    </div>
  );
}
