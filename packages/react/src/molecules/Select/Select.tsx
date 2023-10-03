import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

interface SelectOption {
	label: string;
	value: string;
}

interface RenderOptionProps {
	isSelected: boolean;
	option: SelectOption;
	getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
	options: Array<SelectOption>;
	onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
	label?: string;
	renderOption?: (props: RenderOptionProps) => ReactNode;
}

const Select: FC<SelectProps> = ({
	onOptionSelected,
	options = [],
	label = "Please select an option",
	renderOption,
}) => {
	const labelRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [overlayTop, setOverlayTop] = useState<number>(0);
	const selectedOption =
		selectedIndex !== null ? options[selectedIndex] : null;

	useEffect(() => {
		setOverlayTop(Number(labelRef.current?.offsetHeight || 0) + 10);
	}, [labelRef.current?.offsetHeight]);

	return (
		<div className="dse-select">
			<button
				ref={labelRef}
				className="dse-select__label"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{selectedOption ? selectedOption.label : label}</span>
				<svg
					className={`dse-select__caret w-6 h-6 ${
						isOpen
							? "dse-select__caret--open"
							: "dse-select__caret--close"
					}`}
					width="1rem"
					height="1rem"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</button>
			{isOpen && (
				<ul className="dse-select__overlay" style={{ top: overlayTop }}>
					{options.map((option, optionIndex) => {
						const isSelected = selectedIndex === optionIndex;

						const renderOptionsProps = {
							option,
							isSelected,
							getOptionRecommendedProps: (
								overrrideProps = {}
							) => ({
								className: `dse-select__option ${
									isSelected
										? "dse-select__option--selected"
										: ""
								}`,
								key: option.value,
								onClick: () =>
									onOptionSelected &&
									onOptionSelected(option, optionIndex),
								...overrrideProps,
							}),
						};

						if (renderOption) {
							return renderOption(renderOptionsProps);
						}

						return (
							<li
								className={`dse-select__option ${
									isSelected
										? "dse-select__option--selected"
										: ""
								}`}
								key={option.value}
								onClick={() => {
									setIsOpen(false);
									onOptionSelected &&
										onOptionSelected(option, optionIndex);
									setSelectedIndex(optionIndex);
									setIsOpen(false);
								}}
							>
								<span>{option.label}</span>
								{isSelected && (
									<svg
										width="1rem"
										height="1rem"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.5 12.75l6 6 9-13.5"
										/>
									</svg>
								)}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Select;
