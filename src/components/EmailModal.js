"use client";
import { useModalContext } from "@/context/ModalContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect } from "react";

export default function EmailModal() {
  const { showModal, onClose } = useModalContext();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
      const handleEscape = (e) => {
        if (e.key === "Escape") onClose(); // Close on Escape key press
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "unset"; // Restore scrolling when modal is closed
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [showModal, onClose]);

  if (!showModal) return null; // If modal is not visible, return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed w-full h-screen inset-0 bg-gray-500/75 transition-opacity animate-fadeIn z-40"
        onClick={onClose} // Close modal when backdrop is clicked
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6 sm:p-10">
          {/* Modal Content */}
          <div className="relative w-full max-w-xl transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all animate-scaleIn sm:my-8">
            <div className="bg-white p-6 sm:p-8">
              <div className="flex flex-col items-center sm:flex-row sm:items-start">
                {/* Icon Container */}
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <DotLottieReact
                    src="https://lottie.host/bf070228-12c4-4bca-bf10-8d872bf6fb61/XPgLXTY2Fh.lottie"
                    background="transparent"
                    autoplay
                    className="w-40 md:w-40 h-40 md:h-40 object-cover"
                  />
                </div>
                {/* Modal Text Content */}
                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Thanks for Joining!
                  </h3>
                  <p className="mt-2 text-gray-500 text-base sm:text-lg">
                    Thanks for joining the waiting list for Projectmaven.io.
                    Your spot on the waitlist is officially confirmed. Please
                    check your email for further details. Thanks!
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-gray-50 px-6 py-4 sm:flex sm:justify-end">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary-light"
                onClick={onClose} // Close the modal
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
