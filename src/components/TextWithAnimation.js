import { motion } from "framer-motion";

export default TextWithAnimation = ({ text }) => {
  return (
    <p className="text-content-secondary md:text-base lg:text-lg">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05, // Stagger the animation of each letter
            duration: 0.5,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
};
