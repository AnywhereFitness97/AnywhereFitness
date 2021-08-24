import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors.username}</div>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors.password}</div>
        <Link to="/client">
          <button>Client Dashboard</button>
        </Link>
        <Link to="/instructor">
          <button>Instructor Dashboard</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
