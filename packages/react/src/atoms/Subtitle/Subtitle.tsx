import React, { FC, ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

const Subtitle: FC<SubtitleProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Subtitle;
