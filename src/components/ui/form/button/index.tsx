import * as React from "react";
import styles from "./button.module.css";

export interface Props {
  className?: string;
  label: string;
  labelClassName?: string;
  type?: "submit" | "button" | "reset";
}

const Button: React.FC<Props> = ({
  className,
  type = "submit",
  labelClassName,
  label = "Submit",
}) => {
  return (
    <div className={labelClassName ? labelClassName : ""}>
      <button type={type} className={className ? className : styles?.button}>
        {label}
      </button>
    </div>
  );
};

export default Button;
