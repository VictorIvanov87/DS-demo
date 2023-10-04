import React, { FC, ImgHTMLAttributes } from "react";

import spacing from "@ds.e.test/foundation";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	width?: keyof typeof spacing;
	height?: keyof typeof spacing;
}

const Image: FC<ImageProps> = ({ width, height, ...rest }) => {
	const classNames = `dse-width-${width} dse-height-${height}`;

	return <img className={classNames} {...rest} />;
};

export default Image;
