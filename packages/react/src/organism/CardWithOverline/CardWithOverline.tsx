import React, { FC } from "react";
import CardHeader from "../../molecules/CardHeader/CardHeader";
import CardFooter from "../../molecules/CardFooter/CardFooter";
import Image from "../../atoms/Image/Image";

interface CardWithOverlineProps {
	cardImg: string;
	title: string;
	subtitle: string;
	iconSrc: string;
	description: string;
}

const CardWithOverline: FC<CardWithOverlineProps> = ({
	cardImg,
	title,
	subtitle,
	iconSrc,
	description,
}) => {
	return (
		<div>
			<Image src={cardImg} alt={cardImg} />
			<CardHeader title={title} subtitle={subtitle} iconSrc={iconSrc} />
			<p>{description}</p>
			<CardFooter />
		</div>
	);
};

export default CardWithOverline;
