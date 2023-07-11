import React, { FC, ReactNode } from "react";

interface CTAProps {
  children: ReactNode;
  type?: "primary" | "seconday";
  className?: string;
}

const CTA: FC<CTAProps> = ({ children, type = "primary", className }) => {
  return <button className={`${type} ${className}`}>{children}</button>;
};

export default CTA;
