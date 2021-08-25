

import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Button, Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";


const Login = () => {
  // Initial Values
  const initialLogin = {
    username: "",
    password: "",
    role: "",
  };

  const initialErrors = {
    username: "",
    password: "",
    role: "",
  };
  ////////////////

  ///// State
  const [user, setUser] = useState(initialLogin);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  /////////////
  






  



  ///// Error Setting
  const setLoginErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };
  /////////

  ////// Event Handlers
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setLoginErrors(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  ////////////


  
  //// Validation
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(3, "Username must be at least 3 characters"),
    password: yup
      .string()
      .required("Please enter password")
      .min(3, "Password must be at least 3 characters"),
    role: yup.string().required("Please select a role"),
  });

  useEffect(() => {
    schema.isValid(user).then((valid) => setDisabled(!valid));
  }, [user]);
  /////////

  /////// CSS/ Styling
  const paperstyle = {
    padding: 10,
    height: "60vh",
    width: 500,
    margin: "5% auto",
    backgroundColor: "#e0e0e0",

  };

  const style = { margin: "5%", padding: "2%" };

  /////////////
  return (
    <div>
      <Paper elevation={10} style={paperstyle}>
        <form style={style} onSubmit={(event) => handleSubmit(event)}>
          <div style={{ color: "red" }}>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{errors.role}</div>
          </div>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <h1 style={{ color: "#3f51b5" }}>Login</h1>

            <input
              name="username"
              type="text"
              onChange={(event) => handleChange(event)}
              value={user.username}
              placeholder="Username"
              style={style}
            />

            <input
              name="password"
              type="password"
              onChange={(event) => handleChange(event)}
              value={user.password}
              placeholder="Password"
              style={style}
            />

            <select
              style={style}
              value={user.role}
              name="role"
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="2">Instructor</option>
              <option value="3">User</option>
            </select>

            <Button
              style={style}
              variant="contained"
              color="primary"
              disabled={disabled}
            >
              Sign In
            </Button>
          </Grid>
          <Link to="/client">
            <Button style={style} variant="contained" color="primary">
              Client-Dash
            </Button>
          </Link>
          <Link to="/instructor">
            <Button style={style} variant="contained" color="primary">
              Instructor-Dash
            </Button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};



export default Login;
