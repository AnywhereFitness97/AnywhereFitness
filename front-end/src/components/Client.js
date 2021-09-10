import React, { useState, useEffect } from "react";
import LocationBarSearch from "./forms/LocationBarSearch";
import { connect } from "react-redux";
import { setClasses, getClasses } from "../actions/actions";
import axios from "axios";
import { date } from "yup";
// import { renderDisplay } from "./AvailableClassFocus";
import AvailableClassCard from "./AvailableClassCard";

function Client(props) {
	const [seeClassesbySorter, setSeeClassesbySorter] = useState(false);
	const [foundSuccessMessage, setFoundSuccessMessage] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	// Error Message
	const [errorMessage, setErrorMessage] = useState("");
	const [foundErrorMessage, setFoundErrorMessage] = useState(false);
	// Search Arrays
	const [classByType, setClassByType] = useState([]);
	const [classCount, setClassCount] = useState("");
	// date,Time holders
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("");

	const { getClasses } = props;
	// console.log(getClasses);
	useEffect(() => {
		getClasses();
	}, [getClasses]);
	// console.log("here i am", props);
	const handleSeeAll = () => {
		setFoundSuccessMessage(false);
		setFoundErrorMessage(false);
	};
	function fetchdata(index, searchRefrence) {
		axios
			.post(
				`https://anywherefitnessapis.herokuapp.com/api/v1/search/${index}`,
				searchRefrence
			)
			.then((res) => {
				console.log(res);

				const ClassCount = res.data.Class_Count;
				const CodeNumber = res.data.code;
				if (CodeNumber === 101) {
					setErrorMessage(res.data.message);
					setFoundErrorMessage(true);
					setClassCount(ClassCount);
					setFoundSuccessMessage(false);
					setSeeClassesbySorter(false);
				} else {
					setFoundErrorMessage(false);
					setSeeClassesbySorter(true);
					setClassCount(ClassCount);
					setSuccessMessage(res.data.message);
					setFoundSuccessMessage(true);
					setClassByType(res.data.SearchResult);
				}
			});
	}
	const formatTimeSearch = (id, time) => {
		console.log("id", id, "time", time);
		const splitTime = time.split(":");
		const num1 = splitTime[0];
		const num2 = splitTime[1];
		const convertedNum1 = Number(num1);
		const convertedNum2 = Number(num2);
		if (convertedNum1 > 12) {
			const newNumber = convertedNum1 - 12;
			const newFormatedNumber = `${newNumber}:${num2}`;

			const searchRequest = { searchItem: newFormatedNumber };
			console.log(id, searchRequest);
			fetchdata(id, searchRequest);
		}
	};
	// console.log("class  by type", classByType);
	const handleSubmitInput = (e, type) => {
		const id = type.id;
		// console.log(id);
		if (id === "time") {
			const splitTime = time.split(":");
			const num1 = splitTime[0];
			const convertedNum1 = Number(num1);
			console.log("1", num1);
			console.log("2", convertedNum1);
			console.log("3", convertedNum1 > 12);
			if (convertedNum1 > 12) {
				formatTimeSearch(id, time);
			} else {
				const searchRequest = { searchItem: time };
				fetchdata(id, searchRequest);
			}
		} else if (id === "location") {
			const searchRequest = { searchItem: location };
			fetchdata(id, searchRequest);
		} else {
			const splitDate = date.split("-");
			const Month = splitDate[1];
			const Day = splitDate[2];
			const Year = splitDate[0];
			const FormattedDate = `${Year}-${Day}-${Month}`;
			const searchRequest = { searchItem: FormattedDate };
			fetchdata(id, searchRequest);
		}
	};

	const handleSearch = (e, classDetail) => {
		e.preventDefault();
		const type = classDetail.type;
		const id = classDetail.id;
		const searchRequest = { searchItem: id };
		axios
			.post(
				`https://anywherefitnessapis.herokuapp.com/api/v1/search/${type}`,
				searchRequest
			)
			.then((res) => {
				const ClassCount = res.data.Class_Count;
				const CodeNumber = res.data.code;
				if (CodeNumber === 101) {
					setErrorMessage(res.data.message);
					setFoundErrorMessage(true);
					setClassCount(ClassCount);
					setClassByType([]);

					setFoundSuccessMessage(false);
					setSeeClassesbySorter(false);
				} else {
					setFoundErrorMessage(false);
					setSeeClassesbySorter(true);

					setClassCount(ClassCount);
					setSuccessMessage(res.data.message);
					setFoundSuccessMessage(true);
					setClassByType(res.data.SearchResult);
				}
				console.log("resresres", res);
			});
	};
	const sendToFocusPage = (e) => {
		e.preventDefault();
		const { id } = e.target;
		props.history.push(`/client/focus/${id}`);
	};
	const defaultLinkDetails = {
		className: "mainSorter",
		className2: "subLinks",
		href: "#/",
		onClick: handleSearch,
	};
	const defaultButtonValues = {
		className: "btn btn-primary searchBtn",
	};

	const classDetailLinks = [
		{
			...defaultLinkDetails,
			title: "View All Classes",
			dropdownValues: [
				...(props.classes != null
					? props.classes.map((item) => ({
							type: "class",
							title: item.class_name,
							id: item.classId,
					  }))
					: []),
			],
			onClick: sendToFocusPage,
		},
		{
			...defaultLinkDetails,
			title: "Type",
			dropdownValues: [
				{ type: "type", title: "Aerobics" },
				{ type: "type", title: "Aquatic Fitness" },
				{ type: "type", title: "CrossFit" },
				{ type: "type", title: "Dance" },
				{ type: "type", title: "Jazzercise" },
				{ type: "type", title: "Kickboxing" },
				{ type: "type", title: "Personal Training" },
				{ type: "type", title: "Pilates" },
				{ type: "type", title: "Spinning" },
				{ type: "type", title: "Step Aerobics" },
				{ type: "type", title: "Yoga" },
				{ type: "type", title: "Zumba" },
				{ type: "type", title: "Cardio" },
				{ type: "type", title: "Other" },
			],
			onClick: handleSearch,
		},
		{
			...defaultLinkDetails,
			title: "Intensity",
			dropdownValues: [
				{ type: "intensityLevel", title: "Low" },
				{ type: "intensityLevel", title: "Medium" },
				{ type: "intensityLevel", title: "High" },
				{ type: "intensityLevel", title: "Hard" },
				{ type: "intensityLevel", title: "Extreme" },
			],
		},
		{
			...defaultLinkDetails,
			title: "Duration",
			dropdownValues: [
				{ type: "duration", title: 30 },
				{ type: "duration", title: 45 },
				{ type: "duration", title: 60 },
				{ type: "duration", title: 75 },
				{ type: "duration", title: 90 },
				{ type: "duration", title: 105 },
				{ type: "duration", title: 120 },
			],
		},
		{
			...defaultLinkDetails,
			title: "Location",
			inputValues: {
				buttonValues: {
					...defaultButtonValues,
					id: "location",
					onClick: (e, id) => handleSubmitInput(e, id),
				},
				type: "text",
				value: location,
				id: "location",
				placeHolder: "City Name",
				className: "inputsForSorter",
				onChange: (e) => setLocation(e.target.value),
			},
		},
		{
			...defaultLinkDetails,
			title: "Time",
			inputValues: {
				buttonValues: {
					...defaultButtonValues,
					id: "time",
					onClick: (e, id) => handleSubmitInput(e, id),
				},
				min: "05:00:00",
				max: "22:00:00",
				type: "time",
				value: time,
				id: "time",
				placeHolder: null,
				className: "inputsForSorter",
				onChange: (e) => setTime(e.target.value),
			},
		},
		{
			...defaultLinkDetails,
			title: "Date",
			inputValues: {
				buttonValues: {
					...defaultButtonValues,
					id: "date",
					onClick: (e, id) => handleSubmitInput(e, id),
				},
				type: "date",
				value: date,
				id: "date",
				placeHolder: null,
				className: "inputsForSorter",
				onChange: (e) => setDate(e.target.value),
			},
		},
	];

	const renderClassDetailLink = () => {
		return classDetailLinks.map((linkDetails) => {
			const link =
				linkDetails.onClick != null ? (
					<a
						href={linkDetails.href}
						// onClick={linkDetails.onClick}
						className={linkDetails.className}
					>
						{linkDetails.title}
					</a>
				) : (
					<a href={linkDetails.href} className={linkDetails.className}>
						{linkDetails.title}
					</a>
				);

			const dropDown =
				linkDetails.dropdownValues != null ? (
					<div className="dropDown-container">
						{linkDetails.dropdownValues.map((value) => {
							if (value.type === "duration") {
								return (
									// <div className="dropdown-listItems">
									<a
										href={linkDetails.dropdownValues}
										className={linkDetails.className2}
										type={value.type}
										id={value.title}
										onClick={(e) =>
											linkDetails.onClick(e, {
												type: value.type,
												id: value.title,
											})
										}
									>
										{`${value.title} Minutes`}
									</a>
									// </div>
								);
							} else if (value.type === "time") {
								return (
									// <div className="dropdown-listItems">
									<a
										href={linkDetails.dropdownValues}
										className={linkDetails.className2}
										type={value.type}
										min={value.min}
										max={value.max}
										id={value.title}
										onClick={(e) =>
											linkDetails.onClick(e, {
												id: value.title,
											})
										}
									>
										{`${value.title} Minutes`}
									</a>
									// </div>
								);
							} else {
								return (
									// <div className="dropdown-listItems">
									<a
										type={value.type}
										onClick={(e) =>
											linkDetails.onClick(e, {
												type: value.type,
												id: value.title,
											})
										}
										className={linkDetails.className2}
										id={value.id}
										href={linkDetails.href}
									>
										{value.title}
									</a>
									// </div>
								);
							}
						})}
					</div>
				) : null;
			const input =
				linkDetails.inputValues != null ? (
					<div className="dropDown-container">
						<div className="input-group-item">
							<input
								type={linkDetails.inputValues.type}
								value={linkDetails.inputValues.value}
								id={linkDetails.inputValues.id}
								placeHolder={linkDetails.inputValues.placeHolder}
								className={linkDetails.inputValues.className}
								onChange={linkDetails.inputValues.onChange}
							/>
							<button
								className={linkDetails.inputValues.buttonValues.className}
								id={linkDetails.inputValues.buttonValues.id}
								onClick={(e) =>
									linkDetails.inputValues.buttonValues.onClick(e, {
										id: linkDetails.inputValues.id,
									})
								}
							>
								Search
							</button>
						</div>
					</div>
				) : null;
			return (
				<div className="Sorter">
					{link}
					{dropDown}
					{input}
				</div>
			);
		});
	};

	return (
		<section className="">
			<div className="locatinBar">
				<LocationBarSearch />
			</div>
			<div className="classContainer">{renderClassDetailLink()}</div>

			<div className="card-container">
				{classByType.map((item) => (
					<AvailableClassCard card={item} />
				))}
			</div>
			{foundErrorMessage ? (
				<div className="FoundError">
					<div>
						<h1>{errorMessage}</h1>
					</div>
					<div>
						<h3>Number of Classes Found: {classCount}</h3>
					</div>
				</div>
			) : null}
		</section>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { setClasses, getClasses })(Client);
