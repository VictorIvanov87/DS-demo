import React, {
	FC,
	KeyboardEventHandler,
	ReactNode,
	RefObject,
	useEffect,
	useRef,
	useState,
} from "react";

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

const keyCodes = {
	ENTER: 13,
	SPACE: 32,
	DOWN_ARROW: 40,
	UP_ARROW: 38,
	ESC: 27,
};

const getPrevOptionIndex = (
	currentIndex: number | null,
	options: Array<SelectOption>
) => {
	if (currentIndex === null) {
		return 0;
	}

	if (currentIndex === 0) {
		return options.length - 1;
	}

	return currentIndex - 1;
};

const getNextOptionIndex = (
	currentIndex: number | null,
	options: Array<SelectOption>
) => {
	if (currentIndex === null) {
		return 0;
	}

	if (currentIndex === options.length - 1) {
		return 0;
	}

	return currentIndex + 1;
};

const Select: FC<SelectProps> = ({
	onOptionSelected,
	options = [],
	label = "Please select an option",
	renderOption,
}) => {
	const labelRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [highlightedIndex, setHighlightedIndex] = useState<number | null>(
		null
	);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [overlayTop, setOverlayTop] = useState<number>(0);
	const [optionRefs, setOptionRefs] = useState<
		Array<RefObject<HTMLLIElement>>
	>([]);
	const selectedOption =
		selectedIndex !== null ? options[selectedIndex] : null;

	useEffect(() => {
		setOverlayTop(Number(labelRef.current?.offsetHeight || 0) + 10);
	}, [labelRef.current?.offsetHeight]);

	useEffect(() => {
		setOptionRefs(options.map((_) => React.createRef<HTMLLIElement>()));
	}, [options.length]);

	useEffect(() => {
		if (isOpen && highlightedIndex !== null) {
			const ref = optionRefs[highlightedIndex];

			if (ref && ref.current) {
				ref.current.focus();
			}
		}
	}, [isOpen, highlightedIndex]);

	const highlightItem = (i: number | null) => {
		setHighlightedIndex(i);
	};

	const onOptionKeydown: KeyboardEventHandler = (event) => {
		if (event.keyCode === keyCodes.ESC) {
			setIsOpen(false);
			return;
		}

		if (event.keyCode === keyCodes.DOWN_ARROW) {
			highlightItem(getNextOptionIndex(highlightedIndex, options));
		}

		if (event.keyCode === keyCodes.UP_ARROW) {
			highlightItem(getPrevOptionIndex(highlightedIndex, options));
		}

		if (event.keyCode === keyCodes.ENTER) {
			setSelectedIndex(highlightedIndex);
			onOptionSelected &&
				highlightedIndex &&
				onOptionSelected(options[highlightedIndex], highlightedIndex);
			setIsOpen(false);
		}
	};

	const onButtonKeyDown: KeyboardEventHandler = (event) => {
		event.preventDefault();

		if (
			[keyCodes.ENTER, keyCodes.SPACE, keyCodes.DOWN_ARROW].includes(
				event.keyCode
			)
		) {
			setIsOpen(true);
			highlightItem(0);
		}
	};

	return (
		<div className="dse-select">
			<button
				data-testid="DseSelectButton"
				ref={labelRef}
				className="dse-select__label"
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={onButtonKeyDown}
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
						const isHighlighted = highlightedIndex === optionIndex;
						const ref = optionRefs[optionIndex];
						const renderOptionsProps = {
							isSelected,
							option,
							getOptionRecommendedProps: (
								overrrideProps = {}
							) => ({
								...overrrideProps,
								ref,
								role: "menuitemradio",
								tabIndex: isHighlighted ? -1 : 0,
								className: `dse-select__option
								${isSelected ? "dse-select__option--selected" : ""}
								${isHighlighted ? "dse-select__option--highlighted" : ""}`,
								key: option.value,
								onKeyDown: onOptionKeydown,
								onMouseEnter: () => {
									highlightItem(optionIndex);
								},
								onMouseLeave: () => {
									highlightItem(null);
								},
								onClick: () => {
									setIsOpen(false);
									setSelectedIndex(optionIndex);
									onOptionSelected &&
										onOptionSelected(option, optionIndex);
								},
							}),
						};

						if (renderOption) {
							return renderOption(renderOptionsProps);
						}

						return (
							<li
								{...renderOptionsProps.getOptionRecommendedProps()}
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
