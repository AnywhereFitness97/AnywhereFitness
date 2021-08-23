import React, { useState } from "react";
import * as yup from "yup";

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
  auth_key: yup.number(),
});

const Register = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <h1>Register Here</h1>
      <form>
        <label>
          First Name
          <input
            type="text"
            name="first_name"
            value={formValues["first_name"]}
            placeholder="First Name"
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["first_name"]}</div>
        <label>
          Last Name
          <input
            type="text"
            name="last_name"
            value={formValues["last_name"]}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["last_name"]}</div>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Email Address"
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors.email}</div>
        <select name="role" value={formValues.role} onChange={handleChange}>
          <option name="client">Client</option>
          <option name="instructor">Instructor</option>
        </select>
        <div className="error">{formErrors.role}</div>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formValues.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <div className="error">{formErrors.username}</div>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors.password}</div>
        <label>
          Authentication Key
          <input
            type="text"
            name="auth_key"
            value={formValues["auth_key"]}
            placeholder="Authentication Key"
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["auth_key"]}</div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
