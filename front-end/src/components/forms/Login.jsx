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
    <section className="py-5">
      <div className="container">
        <h1 className="text-center">Login</h1>
        <form className="d-flex flex-column align-items-center">
          <input
            className={`mb-4 ${
              formErrors.username ? "border-danger border-1" : ""
            }`}
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <div className="error username-error">{formErrors.username}</div>

          <input
            className={`mb-4 ${
              formErrors.password ? "border-danger border-1" : ""
            }`}
            type="text"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="error password-error">{formErrors.password}</div>
          <div>
            <Link to="/client">
              <button className="btn btn-success">Client Dashboard</button>
            </Link>
            <Link to="/instructor">
              <button className="btn btn-primary ms-3">
                Instructor Dashboard
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
