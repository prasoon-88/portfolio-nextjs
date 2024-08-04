import { useRef, useState } from "react";

const useAngleFromCenter = (): [
  React.RefObject<any>,
  number | null,
  () => void
] => {
  const elementRef = useRef<any>(null);
  const [angle, setAngle] = useState<number | null>(null);

  const updateHourHandlePosition = (event: MouseEvent) => {
    if (elementRef.current) {
      const clockRect = elementRef.current.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Calculate the center of the clock
      const clockCenterX = clockRect.left + clockRect.width / 2;
      const clockCenterY = clockRect.top + clockRect.height / 2;

      // Calculate the angle
      const radians = Math.atan2(mouseY - clockCenterY, mouseX - clockCenterX);
      const degrees = radians * (180 / Math.PI) + 90;
      setAngle(degrees);
    }
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", updateHourHandlePosition);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", updateHourHandlePosition);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return [elementRef, angle, handleMouseDown];
};

export default useAngleFromCenter;
