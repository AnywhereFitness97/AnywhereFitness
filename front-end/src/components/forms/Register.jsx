import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import {
	registerUser,
	setCurrentUser,
	isFetchingTrue,
	isFetchingFalse,
	login,
} from "../../actions/actions";
import Logo from "../../assets/fitness_logo.svg";
import axios from "axios";

const initialFormValues = {
	first_name: "",
	last_name: "",
	email: "",
	role: "Client",
	username: "",
	password: "",
};

const initialFormErrors = {
	first_name: "",
	last_name: "",
	email: "",
	username: "",
	password: "",
};

const FormSchema = yup.object().shape({
	first_name: yup.string().trim().required("First name is required"),
	last_name: yup.string().trim().required("Last name is required"),
	email: yup
		.string()
		.trim()
		.email("Must be a valid email address")
		.required("Email is a required field"),
	role: yup.string().required(),
	username: yup.string().trim().required("Username is required"),
	password: yup.string().trim().required("Password is required"),
});

const Register = (props) => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		FormSchema.isValid(formValues).then((res) => {
			if (res) setDisabled(false);
			if (!res) setDisabled(true);
		});
	}, [formValues]);

	const validate = (name, value) => {
		yup
			.reach(FormSchema, name)
			.validate(value)
			.then(() => {
				setFormErrors({ ...formErrors, [name]: "" });
			})
			.catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		validate(name, value);
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const RegisterInfo = {
				first_name: formValues.first_name,
				last_name: formValues.last_name,
				email: formValues.email,
				username: formValues.username,
				password: formValues.password,
				role: formValues.role,
			};
			axios
				.post(
					"https://anywherefitnessapis.herokuapp.com/api/v1/auth/register",
					RegisterInfo
				)
				.then((response) => {
					props.setCurrentUser(response.data.NewUserLogin);
					const message = response.data.message;
					alert(message);
					props.history.push("/");
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section className="py-5">
			<div className="container d-flex ">
				<form
					onSubmit={handleSubmit}
					className=" ps-lg-5 d-flex flex-column align-items-sm-start align-items-center m-auto register-form"
				>
					<h1 className="text-center">Register Here</h1>

					<label className="d-flex flex-column">
						First Name
						<input
							type="text"
							name="first_name"
							value={formValues["first_name"]}
							placeholder="First Name"
							onChange={handleChange}
						/>
					</label>
					<div className="error register-error">{formErrors["first_name"]}</div>
					<label className="d-flex flex-column">
						Last Name
						<input
							type="text"
							name="last_name"
							value={formValues["last_name"]}
							placeholder="Last Name"
							onChange={handleChange}
						/>
					</label>
					<div className="error register-error">{formErrors["last_name"]}</div>
					<label className="d-flex flex-column">
						Email
						<input
							type="email"
							name="email"
							value={formValues.email}
							placeholder="Email Address"
							onChange={handleChange}
						/>
					</label>
					<div className="error register-error">{formErrors.email}</div>
					<label className="d-flex flex-column">
						{" "}
						Role
						<select name="role" value={formValues.role} onChange={handleChange}>
							<option name="Client">Client</option>
							<option name="Instructor">Instructor</option>
						</select>
						<div className="error register-error">{formErrors.role}</div>
					</label>
					<label className="d-flex flex-column">
						Username
						<input
							type="text"
							name="username"
							value={formValues.username}
							placeholder="Username"
							onChange={handleChange}
						/>
						<div className="error register-error">{formErrors.username}</div>
					</label>
					<label className="d-flex flex-column">
						Password
						<input
							type="password"
							name="password"
							value={formValues.password}
							placeholder="Password"
							onChange={handleChange}
						/>
					</label>
					<div className="error register-error">{formErrors.password}</div>

					<div className="error register-error">{formErrors["auth_key"]}</div>
					<button
						type="submit"
						disabled={disabled}
						className="btn btn-primary "
					>
						Submit
					</button>
				</form>
				<img
					src={Logo}
					className="register-logo d-sm-block d-none"
					id="fitness related icon"
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
	registerUser,
	setCurrentUser,
	isFetchingTrue,
	isFetchingFalse,
	login,
})(Register);
