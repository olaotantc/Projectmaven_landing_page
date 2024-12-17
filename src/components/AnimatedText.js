import { motion } from "framer-motion";

const AnimatedText = ({ text = "", className = "", TextAccent = null }) => {
  const safeText = String(text);
  if (!safeText.trim()) return null;

  const words = safeText.split(" ");
  const accentWords = TextAccent ? TextAccent.split(" ") : [];
  let letterIndex = 0; // Tracks the position for animation delay

  const renderAnimatedText = (word, isAccent = false) => (
    <span
      style={{ display: "inline-block", whiteSpace: "nowrap" }}
      key={letterIndex}
    >
      {word.split("").map((char, charIndex) => {
        const delay = letterIndex * 0.05;
        letterIndex++;

        return (
          <motion.span
            key={`${char}-${charIndex}`}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay, duration: 0.3, ease: "easeOut" }}
            style={{
              display: "inline-block",
              color: isAccent ? "var(--primary)" : "inherit",
            }}
          >
            {char}
          </motion.span>
        );
      })}
      <span style={{ display: "inline-block", marginRight: "0.3em" }} />{" "}
      {/* Add space */}
    </span>
  );

  return (
    <motion.p
      className={className}
      style={{ display: "flex", flexWrap: "wrap" }}
      viewport={{ once: true }} // Triggers once when entering the viewport
    >
      {words.map((word) => renderAnimatedText(word))}
      {TextAccent &&
        accentWords.map((word) => renderAnimatedText(word, true))}
    </motion.p>
  );
};

export default AnimatedText;
