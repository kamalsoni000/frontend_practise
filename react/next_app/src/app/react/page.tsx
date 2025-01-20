'use client'

import { useDebounce } from "@/hooks";
import { useThrottle } from "@/hooks/useThrottle";
import { useState, useTransition } from "react";

export default function Home() {
  const [inputText, setInputText] = useState(""); // State to store the input text
  const debounceDelay = 500; // Delay for debouncing
  const throttleDelay = 500; // Delay for throttling
  const {text:debouncedText} = useDebounce(inputText, debounceDelay); // Apply debounce custom hook
  const {text:throttledText} = useThrottle(inputText, throttleDelay); // Apply throttle custom hook
  // Event handler to update the input text
  const handleChange = (e:any) => {
    setInputText(e.target.value);
  };

    return (
    <div>
     <input
        type="text"
        placeholder="Type something..."
        value={inputText} // Use 'value' to display the input text
        onChange={handleChange} // Call handleChange on input change
      />
      <p>Default: {inputText}</p>
      <p>Debounced: {debouncedText}</p>
      <p>Throttled: {throttledText}</p>
    </div>
  );
}
