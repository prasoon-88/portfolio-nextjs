import cx from "classnames";
import React, { ReactNode } from "react";

export interface ButtonProps {
  text: ReactNode;
  size?: "small";
  className?: string;
  style?: any;
  trailingIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: any;
}

const Button = ({
  text,
  size,
  className,
  style,
  trailingIcon = <></>,
  type,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      id="button"
      className={cx(size, className)}
      style={style}
      type={type}
      onClick={onClick}
    >
      <div>{text}</div>
      {trailingIcon}
    </button>
  );
};

export default Button;
