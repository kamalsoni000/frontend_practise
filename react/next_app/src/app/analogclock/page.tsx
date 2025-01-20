"use client"
// components/AnalogClock.js
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees =  hours * 30 + minutes * 0.5;

  return (
    <div className={styles.clock}>
      <div className={styles.face}>
        {/* Hour Marks */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={styles.hourMark}
            style={{
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}

        {/* Clock Hands */}
        <div
          className={styles.hourHand}
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />
        <div
          className={styles.minuteHand}
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />
        <div
          className={styles.secondHand}
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />
      </div>
    </div>
  );
}
