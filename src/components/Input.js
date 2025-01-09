"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useModalContext } from "@/context/ModalContext";

export default function Input({ btnText, subText, small }) {
  const modalContext = useModalContext();

  // Check if the modal context is available
  if (!modalContext) {
    console.log("Modal context is not available.");
    return null; // Return null if the context is not available
  }

  const { setShowModal, triggerConfetti } = modalContext;
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { handleSubmit, reset } = useForm();

  const onSubmit = async () => {
    try {
      if(!email) return;
      setIsLoading(true);
      fetch("/api/loops", {method: "POST", body: JSON.stringify({email})} );

      setIsLoading(false);
      triggerConfetti(true); // Trigger confetti animation on successful submission
      setShowModal(true); // Show modal after submission
      reset(); // Reset the form
    } catch (error) {
      setIsLoading(false);
      console.error("Subscription error:", error); // Handle submission error
    }
  };

  return (
    <div className={!small ? "w-full" : ""}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full md:max-w-[520px] md:text-[17px] ">
          {/* Email input field */}
          <input
            type="email"
            className={`placeholder:text-left text-center md:text-left md:placeholder:text-left pl-6 pr-6 md:pr-16 ${
              small ? "py-3" : "py-4"
            } rounded-full border border-gray-300  md:text-sm lg:text-base focus:outline-none focus:ring-1 focus:ring-primary-light 
            focus:ring-opacity-10 w-full`}
            placeholder="Enter your email address"
            disabled={isLoading} // Disable input when loading
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            required
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading} // Disable button when loading
            className={`relative w-full md:text-sm lg:text-base md:w-auto mt-3 md:mt-1 
            md:absolute inset-y-0 right-1 px-7 py-3 md:py-2 my-1 grid place-content-center 
            rounded-full bg-primary text-white hover:bg-primary-dark focus:outline-none 
            focus:ring-2 focus:ring-primary-light transition-all 
            ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                {/* Loading spinner */}
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Subscribing...</span>
              </div>
            ) : (
              btnText // Display button text when not loading
            )}
          </button>
        </div>
      </form>

      {/* Subscription terms text */}
      <p
        className={`text-content-secondary text-xs my-2 text-center md:text-${small ? "center" : "left"}`}
      >
        {subText}
      </p>
    </div>
  );
}
