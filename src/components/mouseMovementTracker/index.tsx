import useMousePosition from "@/customHooks/useMousePosition";
import React, { useEffect, useState } from "react";

const MouseTracker = () => {
  const { x, y } = useMousePosition();
  const [scale, setScale] = useState<number>(1);

  const handleClick = () => {
    setScale(10);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    if (scale > 1) {
      setTimeout(() => {
        setScale(1);
      }, 300);
    }
  }, [scale]);

  return (
    <div
      id="mouseMovementTracker"
      style={{
        top: `${y + 10}px`,
        left: `${x + 10}px`,
        transform: `scale(${scale})`,
      }}
    ></div>
  );
};

export default MouseTracker;
