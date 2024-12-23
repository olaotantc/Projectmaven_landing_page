import { motion } from "framer-motion";

const AnimatedText = ({ text = "", className = "", TextAccent = null }) => {
  const safeText = String(text); // Ensure the text is a valid string
  if (!safeText.trim()) return null; // Return null if the text is empty or whitespace

  const words = safeText.split(" "); // Split the text into words
  const accentWords = TextAccent ? TextAccent.split(" ") : []; // Split the accent text into words if provided
  let letterIndex = 0; // Tracks the position for animation delay

  const renderAnimatedText = (word, isAccent = false) => (
    <span
      style={{ display: "inline-block", whiteSpace: "nowrap" }} // Ensure words do not wrap
      key={letterIndex}
    >
      {word.split("").map((char, charIndex) => {
        const delay = letterIndex * 0.05; // Calculate animation delay based on letter position
        letterIndex++;

        return (
          <motion.span
            key={`${char}-${charIndex}`}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Initial animation state
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Final animation state
            transition={{ delay, duration: 0.3, ease: "easeOut" }} // Animation properties
            style={{
              display: "inline-block", // Ensure each letter is inline-block
              color: isAccent ? "var(--primary)" : "inherit", // Apply accent color if needed
            }}
          >
            {char} {/* Render individual character */}
          </motion.span>
        );
      })}
      <span style={{ display: "inline-block", marginRight: "0.3em" }} /> {/* Add space between words */}
    </span>
  );

  return (
    <motion.p
      className={className} // Apply custom class names
      style={{ display: "flex", flexWrap: "wrap" }} // Flex container for words
      viewport={{ once: true }} // Trigger animation only once when visible
    >
      {words.map((word) => renderAnimatedText(word))} {/* Render normal words */}
      {TextAccent &&
        accentWords.map((word) => renderAnimatedText(word, true))} {/* Render accent words */}
    </motion.p>
  );
};

export default AnimatedText;
