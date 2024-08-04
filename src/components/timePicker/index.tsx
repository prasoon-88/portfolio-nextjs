import useAngleFromCenter from "@/customHooks/useAngleFromCenter";
import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";

const ClockPicker = () => {
  const PER_HOUR_DEG = 30;
  const PER_MINUTE_DEG = 6;
  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(0);
  const [meridiem, setMeridiem] = useState<"am" | "pm">("am");
  const [clockRef, angle, handleMouseDown] = useAngleFromCenter();
  const [clockFace, setClockFace] = useState<number>(1);
  const [enableTransition, setEnableTransition] = useState<boolean>(false);

  const changeFace = (newFace: number) => {
    setClockFace(newFace);
  };

  const handleInputFocus = () => {
    setEnableTransition(true);
  };

  const handleInputBlur = () => {
    handleTransitionEnd();
  };

  const handleTransitionEnd = () => {
    setTimeout(() => {
      setEnableTransition(false);
    }, 500);
  };

  const handleHourNumClick = (hour: number) => {
    setHour(hour);
  };

  const handleMinuteNumClick = (hour: number) => {
    setMinute(hour);
  };

  const handleInputValueChnage = (value: number) => {
    if (clockFace == 1) {
      if (value <= 12) handleHourNumClick(value);
    } else {
      if (value <= 60) handleMinuteNumClick(value);
    }
  };

  const handleNumClick = (hour: number) => {
    if (clockFace == 1) {
      handleHourNumClick(hour);
    } else {
      const absoluteMinutes = (hour * 5) % 60;
      handleMinuteNumClick(absoluteMinutes);
    }
  };

  const handleMeridiemClick = (meridiem: "am" | "pm") => {
    setMeridiem(meridiem);
  };

  const handleChangeAngle = useCallback(() => {
    if (angle != null) {
      if (clockFace == 1) {
        let hour = Math.ceil(angle / PER_HOUR_DEG);
        if (hour <= 0) {
          hour = 12 + hour;
        }
        handleHourNumClick(hour);
      } else if (clockFace == 2) {
        let minute = Math.ceil(angle / PER_MINUTE_DEG);
        if (minute <= 0) {
          minute = 60 + minute;
        }
        handleMinuteNumClick(minute % 60);
      }
    }
  }, [angle]);

  const getClockHandleRotateDeg = () => {
    if (clockFace == 1) return hour * PER_HOUR_DEG;
    else if (clockFace == 2) return minute * PER_MINUTE_DEG;
  };

  const handleSubmit = () => {
    alert(`${hour}:${minute} ${meridiem}`);
  };

  useEffect(() => {
    handleChangeAngle();
  }, [angle]);

  return (
    <div id="timePickerContainer">
      <div className="colockText">Select Time</div>
      <div className="timeTextInputPreviewContainer">
        <input
          className="preview hour"
          value={hour}
          onClick={() => changeFace(1)}
          onChange={(e) => handleInputValueChnage(Number(e.target.value))}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <div className="colonContainer">:</div>
        <input
          className="preview hour"
          value={minute}
          onClick={() => changeFace(2)}
          onChange={(e) => handleInputValueChnage(Number(e.target.value))}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <div className="amPmContainer">
          <div
            className={classNames("amPmPreview am", {
              active: meridiem === "am",
            })}
            onClick={() => handleMeridiemClick("am")}
          >
            AM
          </div>
          <div
            className={classNames("amPmPreview pm", {
              active: meridiem === "pm",
            })}
            onClick={() => handleMeridiemClick("pm")}
          >
            PM
          </div>
        </div>
      </div>
      <div id="clockContainerMain">
        <div className="clockFaceChanger">
          <div
            className={classNames("faceChangeBtn", { disable: clockFace == 1 })}
            onClick={() => changeFace(1)}
          >{`<`}</div>
          <div
            className={classNames("faceChangeBtn", { disable: clockFace == 2 })}
            onClick={() => changeFace(2)}
          >{`>`}</div>
        </div>
        <div className="clock" ref={clockRef} onMouseDown={handleMouseDown}>
          {/* Hours */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className={"hourNum"}
              onClick={() => handleNumClick(index + 1)}
            >
              <div className={classNames("numMain")}>
                {clockFace == 1
                  ? index + 1
                  : ((index + 1) * 5) % 60 != 0
                  ? ((index + 1) * 5) % 60
                  : "00"}
              </div>
            </div>
          ))}
          {/* Central handel */}
          <div className="centralHandel"></div>
          <div
            className={classNames("hour-handle-container", {
              enableTransition,
            })}
            style={{ transform: `rotate(${getClockHandleRotateDeg()}deg)` }}
          >
            <div className="hour-handle-circle">
              <div
                className="circleValue"
                style={{
                  transform: `rotate(-${getClockHandleRotateDeg()}deg)`,
                }}
              >
                {clockFace == 1 ? (hour ? hour : 12) : minute}
              </div>
            </div>
            <div className="hour-handle"></div>
          </div>
        </div>
      </div>
      <div className="btnContainer">
        <button className="clockBtn" onClick={handleSubmit}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ClockPicker;
