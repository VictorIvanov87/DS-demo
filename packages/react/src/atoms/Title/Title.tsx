import React, { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title: FC<TitleProps> = ({ type = "h1", children }) => {
  return <h3 className={type}>{children}</h3>;
};

export default Title;
