import useAngleFromCenter from "@/customHooks/useAngleFromCenter";
import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";

const ClockPicker = () => {
  const PER_HOUR_DEG = 30;
  const [hour, setHour] = useState<number | null>(null);
  const [clockRef, angle, handleMouseDown] = useAngleFromCenter();

  const handleHourNumClick = (index: number) => {
    setHour(index + 1);
  };

  const handleChangeAngle = useCallback(() => {
    if (angle != null) {
      let hour = Math.ceil(angle / PER_HOUR_DEG);
      if (hour <= 0) {
        hour = 12 + hour;
      }
      setHour(hour);
    }
  }, [angle]);

  useEffect(() => {
    handleChangeAngle();
  }, [angle]);

  return (
    <div id="timePickerContainer">
      <div className="clock" ref={clockRef}>
        {/* Hours */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={"hourNum"}
            onClick={() => handleHourNumClick(index)}
          >
            <div
              className={classNames("numMain", { active: hour === index + 1 })}
            >
              {index + 1}
            </div>
          </div>
        ))}
        {/* Central handel */}
        <div className="centralHandel"></div>
        {hour != null ? (
          <div
            onMouseDown={handleMouseDown}
            className="hour-handle-container"
            style={{ transform: `rotate(${hour * PER_HOUR_DEG}deg)` }}
          >
            <div className="hour-handle-circle">
              <div
                className="circleValue"
                style={{ transform: `rotate(-${hour * 30}deg)` }}
              >
                {hour}
              </div>
            </div>
            <div className="hour-handle"></div>
          </div>
        ) : (
          <></>
        )}
        {/* <div
          className="minute-handle"
          style={{ transform: `rotate(${minute * PER_MINUTE_DEG}deg)` }}
        ></div>{" "} */}
        {/* <div
          className="second-handle"
          style={{ transform: `rotate(${seconds * PER_SECOND_DEG}deg)` }}
        ></div> */}
      </div>
    </div>
  );
};

export default ClockPicker;
