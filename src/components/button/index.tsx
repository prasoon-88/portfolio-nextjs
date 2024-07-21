import cx from "classnames";
import React, { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  size?: "small";
  className?: string;
  style?: any;
  trailingIcon?: ReactNode;
}

const Button = ({
  text,
  size,
  className,
  style,
  trailingIcon = <></>,
}: ButtonProps) => {
  return (
    <div id="button" className={cx(size, className)} style={style}>
      <div>{text}</div>
      {trailingIcon}
    </div>
  );
};

export default Button;
