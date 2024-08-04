import ClockPicker from "@/components/timePicker";
import React from "react";

const Test = () => {
  return (
    <div className="pt-100 pb-300">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <ClockPicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
