import React from "react";
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
