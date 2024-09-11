import { useRef, useState } from "react";

function useCustomTimer(initialValue) {
  const [seconds, setSeconds] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(false);
  let interval = useRef(null);

  function start() {
    setIsRunning(true);
    if (interval.current) return;

    interval.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setIsRunning(false);
          clearInterval(interval.current);
          interval.current = null;
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(interval.current);
    interval.current = null;
    setSeconds(initialValue);
  }

  return { isRunning, seconds, start, stop };
}

export default useCustomTimer;
