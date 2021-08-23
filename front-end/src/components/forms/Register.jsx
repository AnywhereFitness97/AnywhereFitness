import React, { useState } from "react";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  role: "client",
  username: "",
  password: "",
  auth_key: null,
};
const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
  auth_key: "",
};

const Register = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        <label>
          Authentication Key
          <input
            type="number"
            name="auth_key"
            value={formValues["auto_key"]}
            placeholder="Authentication Key"
          />
        </label>

        <div className="error">{formErrors.password}</div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
