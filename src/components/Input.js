export default function Input({ btnText, subText, small }) {
  return (
    <div>
      {/* Input Container: This div holds the input field and button */}
      <div className="relative w-full max-w-[520px] md:text-[17px]">
        
        {/* Input Field: The input field for the user's email, with conditional padding */}
        <input
          type="text"
          className={`placeholder:text-center md:placeholder:text-left pl-6 pr-16 ${
            small ? "py-3" : "py-4" // Conditional padding based on 'small' prop
          } rounded-full border border-gray-300  md:text-sm lg:text-base focus:outline-none focus:ring-1 focus:ring-primary-light focus:ring-opacity-10 w-full`}
          placeholder="Enter your email address"
        />
        
        {/* Submit Button: The button for submitting the form, positioned next to the input field */}
        <button className="relative w-full md:text-sm lg:text-base md:w-auto mt-3 md:mt-1 md:absolute inset-y-0 right-1 px-7 py-3 md:py-2 my-1 grid place-content-center rounded-full bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light">
          {btnText} {/* Display the button text passed as a prop */}
        </button>
      </div>
      
      {/* Subtext: A description or disclaimer displayed below the input */}
      <p className="text-content-secondary text-xs my-2">{subText}</p>
    </div>
  );
}
