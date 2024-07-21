import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  helpText?: string;
}
const Input = (props: InputProps) => {
  return (
    <div id="inputContainer">
      <input {...props} />
      <h6 className="helpText mt-12 error-500">{props.helpText || ""}</h6>
    </div>
  );
};

export default Input;
