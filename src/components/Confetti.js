import { useModalContext } from "@/context/ModalContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Confetti() {
  const { showConfetti } = useModalContext();
  return (
    <>
      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-screen z-[9999]">
        <DotLottieReact autoplay src="https://lottie.host/a852ca1c-6dd5-43c9-ada0-9a616b9b81b0/9rLlbCxHhp.lottie" />
      </div>
      )}
    </>
  );
}
