import React, { useState, useEffect } from "react";
import type { CountdownTimerProps } from "@/data/types/drop.model";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  onExpire,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        return {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      // Timer expired
      if (onExpire) {
        onExpire();
      }

      return { hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <span className="text-white satoshi-bold text-[16px] md:text-[40px] whitespace-nowrap">
      {formatTime(timeLeft.hours)}hr : {formatTime(timeLeft.minutes)}mins :{" "}
      {formatTime(timeLeft.seconds)}s
    </span>
  );
};

export default CountdownTimer;