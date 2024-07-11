import cx from "classnames";
import React from "react";

interface ButtonProps {
  text: string;
  size?: "small";
  className?: string;
  style?: any;
}

const Button = ({ text, size, className, style }: ButtonProps) => {
  return (
    <div id="button" className={cx(size, className)} style={style}>
      {text}
    </div>
  );
};

export default Button;
