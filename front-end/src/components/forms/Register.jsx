import React, { useState } from "react";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  role: "user",
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
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors.email}</div>
        <select name="role" value={formValues.role} onChange={handleChange}>
          <option name="user">User</option>
          <option name="instructor">Instructor</option>
        </select>
        <div className="error">{formErrors.role}</div>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formValues.username}
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
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors.password}</div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
