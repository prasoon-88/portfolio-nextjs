import Dropdown, { DropdownOption } from "@/components/dropdown";
import React from "react";

const Test = () => {
  const [selected, setSelected] = React.useState<string | null>(null);
  const options: DropdownOption[] = [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
    {
      label: "Option 3",
      value: "option3",
    },
  ];
  return (
    <div className="pt-300 pb-300">
      <div className="container">
        <div className="d-flex">
          <Dropdown options={options} onSelect={setSelected} value={selected} />
          <Dropdown options={options} onSelect={setSelected} value={selected} />
          <Dropdown options={options} onSelect={setSelected} value={selected} />
        </div>
      </div>
    </div>
  );
};

export default Test;
