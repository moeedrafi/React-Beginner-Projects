import { ButtonProps } from "../types";

const Button = ({ onClickHandler, value, title }: ButtonProps) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
