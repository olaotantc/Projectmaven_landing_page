export default function Input() {
  return (
    <div className="relative w-full max-w-[520px]  md:text-[17px] ">
      <input
        type="text"
        className="placeholder:text-center md:placeholder:text-left pl-6 pr-16 py-4 rounded-full  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-light focus:ring-opacity-10 w-full"
        placeholder="Enter your email address"
      />
      <button className="relative w-full md:w-auto mt-3 md:mt-1 md:absolute inset-y-0  right-1 px-7 py-3 md:py-2     my-1 grid place-content-center rounded-full bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light">
        Join the Waitlist
      </button>
    </div>
  );
}
