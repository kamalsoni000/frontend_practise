import { useEffect, useState, useRef } from "react";

/**
 * Custom hook to throttle a value or function.
 * @param value - The value to be throttled.
 * @param delay - The throttle delay in milliseconds.
 * @returns Throttled value.
 */
export function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastExecuted.current >= delay) {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return {text:throttledValue};
}

