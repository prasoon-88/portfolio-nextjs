import { InputHTMLAttributes } from "react";
interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  helpText?: string;
}
const TextArea = (props: TextAreaProps) => {
  return (
    <div id="inputContainer">
      <textarea {...props} />
      <h6 className="helpText mt-12 error-500">{props.helpText || ""}</h6>
    </div>
  );
};

export default TextArea;
