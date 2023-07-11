import React, { FC } from "react";

interface CTAProps {
  type: "primary" | "seconday";
  className?: string;
}

const CTA: FC<CTAProps> = ({ type = "primary", className }) => {
  return <button className={`${type} ${className}`}>CTA</button>;
};

export default CTA;
