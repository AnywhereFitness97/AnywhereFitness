import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import LocationBar from "./LocationBarCreateClass";
import Logo from "../../assets/edit_logo.svg";
import {
	updateClass,
	updateCurrentUser,
	getClasses,
} from "../../actions/actions";
import axios from "axios";

const initialFormErrors = {
	class_name: "",
	class_type: "",
	class_time: "",
	class_date: "",
	class_duration: "",
	class_intensity_level: "",
	class_location: "",
	max_class_size: "",
};

const FormSchema = yup.object().shape({
	class_name: yup.string().required(),
	class_type: yup.string().required(),
	class_time: yup.string().required(),
	class_date: yup.string().required(),
	class_duration: yup.string().required(),
	class_intensity_level: yup.string().required(),
	class_location: yup.string().required(),
	max_class_size: yup.string().required(),
});

const UpdateForm = (props) => {
	const id = props.match.params.id;
	const initialFormData = props.classes.find(
		(card) => card.classId === parseInt(id)
	);

	if (initialFormData.class_am_or_pm === "pm") {
		// const newTime =
		//   (parseInt(initialFormData.class_time) + 12).toString() +
		//   ":" +
		//   initialFormData.class_time[2].toString() +
		//   initialFormData.class_time[3].toString();
		// initialFormData.class_time = newTime;
	}

	const [formData, setFormData] = useState({
		...initialFormData,
		class_duration: initialFormData.class_duration.toString() + " Minutes",
	});
	// const [formData, setFormData] = useState();
	const [formErrors, setFormErrors] = useState(initialFormErrors);

	const validate = (name, value) => {
		yup
			.reach(FormSchema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: "" }))
			.catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		validate(name, value);
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// props.updateClass(formData);
		// props.updateCurrentUser();

		if (parseInt(formData.class_time) > 12) {
			formData.class_time =
				(parseInt(formData.class_time) - 12).toString() +
				formData.class_time[2] +
				formData.class_time[3] +
				formData.class_time[4];
			formData.class_am_or_pm = "pm";
		} else {
			formData.class_am_or_pm = "am";
		}
		formData.class_instructor_username = props.currentUser.username;
		formData.class_cost = 15;
		formData.class_duration = parseInt(formData.class_duration);
		formData.max_class_size = Number(formData.max_class_size);

		delete formData.classId;
		delete formData.class_client_list_id;
		delete formData.max_class_size;

		axios
			.put(
				`https://anywherefitnessapis.herokuapp.com/api/v1/class/${id}`,
				formData
			)
			.then((res) => {
				props.getClasses();
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {}, [props.classes]);
	return (
		<section className="py-5">
			<div className="container d-flex flex-lg-row flex-column justify-content-between align-items-center">
				<form
					onSubmit={handleSubmit}
					className="class-form d-flex flex-column ms-xl-4"
				>
					<h1>Edit Class</h1>

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
							value={formData.class_description}
							onChange={onChange}
							name="description"
						/>
					</label>

					<div className="d-flex justify-content-between">
						<label className="d-flex flex-column half">
							{" "}
							Class Duration:
							<select
								id="duration-dropdown"
								type="dropdown"
								value={formData.class_duration}
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
								value={formData.class_intensity_level}
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
					<label>
						Location
						<LocationBar
							setFormData={setFormData}
							formData={formData}
							editClassLocation={formData.class_location}
						/>
					</label>
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
								value={formData.class_time}
								onChange={onChange}
								InputLabelProps={{
									shrink: true,
								}}
								inputProps={{
									step: 300, // 5 min
								}}
								name="class_time"
							/>
						</label>

						<label className="d-flex flex-column third">
							{" "}
							Class Size:
							<input
								type="number"
								value={formData.max_class_size}
								onChange={onChange}
								name="max_class_size"
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
					alt="people working together"
				/>
			</div>
		</section>
	);

	// return (
	//   <div>
	//     <h1>Update your class</h1>
	//     <form>
	//       <label>
	//         Class Name
	//         <input
	//           type="text"
	//           name="class_name"
	//           value={updateFormValues["class_name"]}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["class_name"]}</div>
	//       <label>
	//         Class Type
	//         <input
	//           type="text"
	//           name="class_type"
	//           value={updateFormValues["class_type"]}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["class_type"]}</div>
	//       <label>
	//         Class Time
	//         <input
	//           type="text"
	//           name="class_time"
	//           value={updateFormValues["class_time"]}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["class_time"]}</div>
	//       <label>
	//         Class Date
	//         <input
	//           type="date"
	//           name="class_date"
	//           value={updateFormValues["class_date"]}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["class_date"]}</div>
	//       <label>
	//         Class Duration
	//         <input
	//           type="text"
	//           name="class_duration"
	//           value={updateFormValues["class_duration"]}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["class_duration"]}</div>
	//       <label>
	//         Class Intensity Level
	//         <input
	//           type="text"
	//           name="class_intensity_level"
	//           value={updateFormValues["class_intensity_level"]}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["class_intensity_level"]}</div>
	//       <label>
	//         Class Location
	//         <input
	//           type="text"
	//           name="class_location"
	//           value={updateFormValues["class_location"].address}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["class_location"]}</div>
	//       <label>
	//         Max Class Number
	//         <input
	//           type="text"
	//           name="max_class_size"
	//           value={updateFormValues["class_size"]}
	//           onChange={handleChange}
	//         />
	//       </label>
	//       <div className="error">{formErrors["max_class_size"]}</div>
	//       <button>Submit</button>
	//     </form>
	//   </div>
	// );
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, {
	updateClass,
	updateCurrentUser,
	getClasses,
})(UpdateForm);
