import React from "react";
import {
	Button,
	CTA,
	CardWithOverline,
	Margin,
	Select,
} from "@ds.e.test/react";
import "@ds.e.test/scss/lib/global.css";
import "@ds.e.test/scss/lib/utilities.css";
import "@ds.e.test/scss/lib/Button.css";
import "@ds.e.test/scss/lib/Margin.css";
import "@ds.e.test/scss/lib/CTA.css";
import "@ds.e.test/scss/lib/Title";
import "@ds.e.test/scss/lib/Subtitle";
import "@ds.e.test/scss/lib/CircleIcon";
import "@ds.e.test/scss/lib/Select";

const App = () => {
	return (
		<div>
			<Button label="Click me!" />
			<CTA className="cta-button">CTA button</CTA>
			<Select
				options={[
					{ value: "pink", label: "Pink" },
					{ value: "blue", label: "Blue" },
					{ value: "red", label: "Red" },
				]}
			/>
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
