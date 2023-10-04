import React from "react";
import {} from "@storybook/addon-a11y";
import Select from "./Select";
import "@ds.e/scss/lib/Select.css";

const mockedOptions = [
	{ label: "Blue", value: "blue" },
	{ label: "Red", value: "red" },
];

export default {
	title: "Select",
};

export const Common = () => <Select options={mockedOptions} />;

export const RenderOptions = () => (
	<Select
		options={mockedOptions}
		renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
			<span {...getOptionRecommendedProps()}>
				{option.label} {isSelected ? "SELECTED" : ""}
			</span>
		)}
	/>
);

export const CustomLabel = () => (
	<Select options={mockedOptions} label="Custom Label" />
);
