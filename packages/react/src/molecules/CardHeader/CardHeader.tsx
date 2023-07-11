import React, { FC } from "react";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Title from "../../atoms/Title/Title";
import CircleIcon from "../../atoms/CircleIcon/CircleIcon";

interface CardHeaderProps {
  title: string;
  subtitle: string;
  iconSrc: string;
}

const CardHeader: FC<CardHeaderProps> = ({ title, subtitle, iconSrc }) => {
  return (
    <div>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <CircleIcon src={iconSrc} />
    </div>
  );
};

export default CardHeader;
