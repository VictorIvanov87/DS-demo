import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Select from "./Select";

const mockedOptions = [
	{ label: "Blue", value: "blue" },
	{ label: "Red", value: "red" },
];

test("renders", () => {
	const { getAllByRole, getByTestId } = render(
		<Select options={mockedOptions} />
	);

	fireEvent.click(getByTestId("DseSelectButton"));

	expect(getAllByRole("menuitemradio")).toHaveLength(mockedOptions.length);
});
