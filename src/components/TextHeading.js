import TextAccent from "./TextAccent"; // Importing TextAccent component for styling part of the heading

export default function TextHeading({ text, accentText, isBr, addStyles }) {
  return (
    <h1
      // Main heading element with dynamic styling and custom line spacing
      className={`md:text-5xl ${addStyles}`}
      style={{ lineHeight: "1.2", letterSpacing: "0px" }}
    >
      {text} {/* Main text of the heading */}
      {/* Conditional line break for larger screens */}
      {isBr && <br className="hidden md:block" />}
      <TextAccent>{accentText}</TextAccent> {/* Accent text styled with TextAccent */}
    </h1>
  );
}
