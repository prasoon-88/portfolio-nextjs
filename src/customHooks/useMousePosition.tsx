import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMovement = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: clientX + window.scrollX,
      y: clientY + window.scrollY,
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    const { clientX, clientY } = e.touches[0];
    setMousePosition({
      x: clientX + window.scrollX,
      y: clientY + window.scrollY,
    });
  };

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("mousemove", handleMouseMovement);
      window.addEventListener("touchmove", handleTouchMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMovement);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);
  return mousePosition;
};

export default useMousePosition;
