import React, { useState, useEffect } from "react";

const TypingText = ({ textArray, speed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[textIndex];

    let typingSpeed = speed;

    if (isDeleting) typingSpeed /= 2;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }

      // When full text is typed
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      }

      // When text is deleted
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, textArray, speed, pause]);

  return (
    <span className="text-purple-400 font-mono whitespace-nowrap">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
