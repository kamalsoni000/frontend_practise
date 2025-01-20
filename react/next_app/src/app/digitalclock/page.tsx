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


  return (
    <div className={styles.clock}>
        <div
          className={styles.hourHand}>{hours}</div>
        <div
          className={styles.minuteHand}>{minutes}</div>
        <div
          className={styles.secondHand}>{seconds}
      </div>
    </div>
  );
}
