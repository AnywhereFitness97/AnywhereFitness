import React, { useState } from "react";
import * as yup from "yup";
import LocationBar from "./LocationBarCreateClass";
import { connect } from "react-redux";
import {
	addNewClass,
	updateCurrentUser,
	setClasses,
} from "../../actions/actions";
import "../../App.css";
import axios from "axios";
import Logo from "../../assets/personal_trainer.svg";

const CreateClass = (props) => {
	const [formData, setFormData] = useState({});
	const [newTime, setNewTime] = useState("");
	const [amOrPm, setAmOrPm] = useState("");
	const [address, setAddress] = useState("");

	const formSchema = yup.object().shape({
		class_name: yup
			.string()
			.required("Class Name is required")
			.min(7, "name must be at least 7 characters"),
		description: yup.string().max(200, "Shorten your message to 200 chars"),
		class_type: yup
			.string()
			.oneOf(
				[
					"Aerobics",
					"Aquatic Fitness",
					"CrossFit",
					"Dance",
					"Jazzercise",
					"Kickboxing",
					"Personal Training",
					"Pilates",
					"Spinning",
					"Step Aerobics",
					"Yoga",
					"Zumba",
					"Other",
				],
				"class_type is required"
			),

		sunday: yup.boolean(),
		monday: yup.boolean(),
		tuesday: yup.boolean(),
		wednesday: yup.boolean(),
		thursday: yup.boolean(),
		friday: yup.boolean(),
		saturday: yup.boolean(),

		duration: yup
			.string()
			.oneOf(
				[
					"30 Minutes",
					"45 Minutes",
					"60 Minutes",
					"75 Minutes",
					"90 Minutes",
					"105 Minutes",
					"120 Minutes",
				],
				"duration is required"
			),
		intensity: yup
			.string()
			.oneOf(["Low", "Medium", "High", "Extreme"], "intensity is required"),
		location: yup.string().max(100, "Shorten your message to 100 chars"),
		class_size: yup.number(),
	});

	const onChange = (e) => {
		let valueToUse = e.target.value;
		if (e.target.type === "checkbox") {
			valueToUse = e.target.checked;
		}
		setFormData({ ...formData, [e.target.name]: valueToUse });
	};
	const formatTime = (time) => {
		const splitTime = time.split(":");
		const hours = Number(splitTime[0]);
		const minutes = Number(splitTime[1]);
		if (hours > 12) {
			setAmOrPm("pm");
			const newHour = hours - 12;
			const formatedTime = `${newHour}:${minutes}`;
			setNewTime(formatedTime);
		} else if (hours === 12) {
			setAmOrPm("pm");
			setNewTime(formData.class_time);
		} else {
			setAmOrPm("am");
			setNewTime(formData.class_time);
		}
	};
	const handleChange = (e) => {
		e.preventDefault();
		setAddress(e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const time = formData.class_time;
		formatTime(time);
		formData.class_instructor_username = props.currentUser.username;
		formData.class_duration = parseInt(formData.class_duration);

		const formToSend = await {
			class_name: formData.class_name,
			class_time: await newTime,
			class_am_or_pm: await amOrPm,
			class_date: formData.class_date,
			class_duration: formData.class_duration,
			class_type: formData.class_type,
			class_intensity_level: formData.class_intensity_level,
			class_location: formData.class_location,
			class_description: formData.class_description,
			class_instructor_username: formData.class_instructor_username,
			class_cost: Number(formData.class_cost),
			class_address: await address,
			max_class_size: Number(formData.max_class_size),
		};

		const response = await axios.post(
			"https://anywherefitnessapis.herokuapp.com/api/v1/class/",
			formToSend
		);
		axios
			.get("https://anywherefitnessapis.herokuapp.com/api/v1/class/")
			.then((res) => {
				props.setClasses(res.data.allClasses);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<section className="py-5">
			<div className="container d-flex flex-lg-row flex-column justify-content-between align-items-center">
				<form
					onSubmit={handleSubmit}
					className="class-form d-flex flex-column ms-xl-4"
				>
					<h1>Create Class</h1>

					<div className="d-flex justify-content-between">
						<label className="d-flex flex-column half">
							Class Name
							<input
								type="text"
								value={formData.class_name}
								onChange={onChange}
								name="class_name"
							/>
						</label>

						<label className="d-flex flex-column half">
							{" "}
							Class Type:
							<select
								id="type-dropdown"
								type="dropdown"
								value={formData.class_type}
								onChange={onChange}
								name="class_type"
							>
								<option>--Choose Class Type--</option>
								<option>Aerobics</option>
								<option>Aquatic Fitness</option>
								<option>CrossFit</option>
								<option>Dance</option>
								<option>Jazzercise</option>
								<option>Kickboxing</option>
								<option>Personal Training</option>
								<option>Pilates</option>
								<option>Spinning</option>
								<option>Step Aerobics</option>
								<option>Yoga</option>
								<option>Zumba</option>
								<option>Other</option>
							</select>
						</label>
					</div>

					<label className="d-flex flex-column">
						Class Description
						<input
							type="text"
							value={formData.description}
							onChange={onChange}
							name="class_description"
						/>
					</label>

					<div className="d-flex justify-content-between">
						<label className="d-flex flex-column half">
							{" "}
							Class Duration:
							<select
								id="duration-dropdown"
								type="dropdown"
								value={formData.duration}
								onChange={onChange}
								name="class_duration"
							>
								<option>--Duration--</option>
								<option>30 Minutes</option>
								<option>45 Minutes</option>
								<option>60 Minutes</option>
								<option>75 Minutes</option>
								<option>90 Minutes</option>
								<option>105 Minutes</option>
								<option>120 Minutes</option>
							</select>
						</label>

						<label className="d-flex flex-column half">
							{" "}
							Intensity Level:
							<select
								type="dropdown"
								value={formData.intensity}
								onChange={onChange}
								name="class_intensity_level"
							>
								<option>--Intensity--</option>
								<option>Low</option>
								<option>Medium</option>
								<option>High</option>
								<option>Extreme</option>
							</select>
						</label>
					</div>
					<div className="d-flex justify-content-between">
						<label>
							Location
							<input
								type="text"
								name="class_location"
								value={formData.class_location}
								onChange={onChange}
							/>
						</label>
						<label>
							Address
							<input
								type="text"
								name="class_address"
								value={formData.class_address}
								onChange={(e) => handleChange(e)}
							/>
						</label>
					</div>
					<div className="d-flex justify-content-between">
						<label className="d-flex flex-column third">
							Class Date
							<input
								type="date"
								name="class_date"
								value={formData.class_date}
								onChange={onChange}
							/>
						</label>
						<label className="d-flex flex-column third">
							Class Time
							<input
								type="time"
								//   value={time}
								onChange={onChange}
								name="class_time"
							/>
						</label>

						<label className="d-flex flex-column third">
							{" "}
							Max Class Size:
							<input
								type="number"
								value={formData.class_size}
								onChange={onChange}
								name="max_class_size"
							/>
						</label>
					</div>
					<div className="">
						<label>
							cost
							<input
								type="text"
								name="class_cost"
								value={formData.class_cost}
								onChange={onChange}
							/>
						</label>
					</div>

					<button type="submit" className="btn btn-primary align-self-end ">
						Submit
					</button>
				</form>
				<img
					src={Logo}
					className="class-form-logo d-none d-sm-block me-xl-4"
					alt="people working out"
				/>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, {
	addNewClass,
	updateCurrentUser,
	setClasses,
})(CreateClass);
