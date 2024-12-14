import TextAccent from "./TextAccent";

export default function TextHeading({ text, accentText, isBr, addStyles }) {
  return (
    <h1
      className={` md:text-5xl  ${addStyles}`}
      style={{ lineHeight: "1.2", letterSpacing: "0px" }}
    >
      {text}
      &nbsp;
      <br className="md:hidden" />
      {isBr && <br className="hidden md:block" />}
      <TextAccent>{accentText}</TextAccent>
    </h1>
  );
}
