import { useClickAway } from "@uidotdev/usehooks";
import { useState, useRef, useEffect } from "react";

export default function useVM() {
  const text = "Hello World!";
  const [currentText, setCurrentText] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleTypeLetter = (letter) => {
    console.log(text[currentText.length], text, currentText.length, letter);
    if (letter === "Backspace") {
      setCurrentText(currentText.slice(0, -1));
      return;
    }
    if (text[currentText.length] === letter) {
      setCurrentText(currentText + letter);
    }
  };

  const inputRef = useClickAway(() => {
    if (inputFocused) {
      setInputFocused(false);
    }
  });

  const hiddenInputRef = useRef(null);

  useEffect(() => {
    if (inputFocused) {
      hiddenInputRef.current.focus();
    }
  }, [inputFocused]);

  return {
    setInputFocused,
    currentText,
    inputFocused,
    handleTypeLetter,
    inputRef,
    hiddenInputRef,
    text,
  };
}
