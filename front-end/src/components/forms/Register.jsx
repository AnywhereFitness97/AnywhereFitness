import React, { useState } from "react";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  role: "user",
  username: "",
  password: "",
};

const Register = () => {
  const [formValues, setFormValues] = setState({});

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
        <label>
          Last Name
          <input
            type="text"
            name="last_name"
            value={formValues["last_name"]}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>
        <select name="role" value={formValues.role} onChange={handleChange}>
          <option name="user">User</option>
          <option name="instructor">Instructor</option>
        </select>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
