import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { registerUser, setCurrentUser } from "../../actions/actions";
import Logo from "../../assets/fitness_logo.svg";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  role: "client",
  username: "",
  password: "",
  auth_key: "",
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
  auth_key: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // props.registerUser(formValues);
    // props.setCurrentUser(formValues);
    // if (formValues.role === "client") props.history.push("/client");
    // if (formValues.role === "Instructor") props.history.push("/instructor");
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
        <img src={Logo} className="register-logo d-sm-block d-none" />
      </div>
    </section>
  );
};

export default connect(null, { registerUser, setCurrentUser })(Register);
