import React, { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button>{label || 'Button'}</button>;
};

export default Button;
