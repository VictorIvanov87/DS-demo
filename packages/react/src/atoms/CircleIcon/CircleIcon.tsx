import React, { FC } from "react";

interface CircleIconProps {
  src: string;
  alt?: string;
}

const CircleIcon: FC<CircleIconProps> = ({ src, alt = src }) => {
  return <img src={src} alt={alt} />;
};

export default CircleIcon;
