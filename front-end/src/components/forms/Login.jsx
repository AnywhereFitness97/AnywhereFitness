import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};
const FormSchema = yup.object().shape({
  username: yup.string().required("this field is required"),
  password: yup.string().required("this field is required"),
});

const Login = () => {
  const [user, setUser] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
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
