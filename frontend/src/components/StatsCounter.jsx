import { useState, useEffect, useRef } from 'react';

export const StatsCounter = ({ targetValue, duration = 1800, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  
  const numericTarget = Number(targetValue);

  useEffect(() => {
    if (!Number.isFinite(numericTarget) || numericTarget <= 0 || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1
            );

            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * numericTarget));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, duration, hasAnimated]);


  if (!Number.isFinite(numericTarget) || numericTarget <= 0) {
    return null;
  }

  return (
    <span
      ref={elementRef}
      className="tabular-nums"
      aria-label={`${numericTarget.toLocaleString()}${suffix}`}
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default StatsCounter;
