import React from "react";
import './Button.css'
interface IButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  handleClick?: () => void;
}

const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  handleClick,
}: IButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
