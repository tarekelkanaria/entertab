"use client";

import { useState, useEffect } from "react";

export default function AnimatedText() {
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenLines = 1500;

  useEffect(() => {
    const lines = [
      "Don't wait...",
      "Bring your business to the next level",
      "Let the best designers and developers...",
      "Carry your business to the top.",
    ];
    let timeout: NodeJS.Timeout | undefined = undefined;

    if (!isDeleting && currentText.length < lines[lineIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(lines[lineIndex].substring(0, currentText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(lines[lineIndex].substring(0, currentText.length - 1));
      }, erasingSpeed);
    } else if (!isDeleting && currentText.length === lines[lineIndex].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenLines);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, lineIndex]);

  return (
    <p className="text-tealSolid-100 text-2xl md:text-4xl font-medium mb-4">
      {currentText}
      <span className="border-r-2  border-tealSolid-100 animate-blink">
        &nbsp;
      </span>
    </p>
  );
}
