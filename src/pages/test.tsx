import ClockPicker from "@/components/timePicker";
import dayjs from "dayjs";
import React from "react";

const Test = () => {
  const date = dayjs().add(1, "hour");
  return (
    <div className="pt-100 pb-300">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <ClockPicker value={date} onChange={(val) => console.log(val)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
