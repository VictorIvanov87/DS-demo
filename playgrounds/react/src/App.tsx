import React from "react";
import { Button, CTA, CardWithOverline, Margin } from "@ds.e/react";
import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/utilities.css";
import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/CTA.css";
import "@ds.e/scss/lib/Title";
import "@ds.e/scss/lib/Subtitle";
import "@ds.e/scss/lib/CircleIcon";

const App = () => {
	return (
		<div>
			<Button label="Click me!" />
			<CTA className="cta-button">CTA button</CTA>
			<Margin space="sm">
				<CardWithOverline
					cardImg="https://upload.wikimedia.org/wikipedia/commons/6/6c/2019_Ford_Mustang_GT_Blue.jpg"
					description="Some description"
					iconSrc="asd.com"
					subtitle="overline"
					title="Headline 6"
				/>
			</Margin>
		</div>
	);
};

export default App;
