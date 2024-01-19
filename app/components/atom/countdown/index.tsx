import React, { useState, useEffect } from "react";
import { ICountdown } from "./types";

const Countdown = ({
  seconds,
  label = "Countdown",
  handleCountdownFinish,
}: ICountdown) => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    if (remainingSeconds > 0) {
      const timer = setInterval(() => {
        setRemainingSeconds((prevSeconds: number) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else if (handleCountdownFinish && remainingSeconds === 0) {
      handleCountdownFinish();
    }
  }, [handleCountdownFinish, remainingSeconds]);

  return (
    <div>
      {remainingSeconds > 0 ? (
        <p>
          {label}: {remainingSeconds} S
        </p>
      ) : (
        <p>Countdown is finished</p>
      )}
    </div>
  );
};

export default React.memo(Countdown);
