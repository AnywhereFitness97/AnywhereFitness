<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Button, Paper, Grid } from "@material-ui/core";

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
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
>>>>>>> b1b169e46cec7266d5ffbebf1954a54fce8b86a2
=======
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as yup from "yup";

// const initialValues = {
//   username: "",
//   password: "",
// };
// const initialFormErrors = {
//   username: "",
//   password: "",
// };
// const FormSchema = yup.object().shape({
//   username: yup.string().required("this field is required"),
//   password: yup.string().required("this field is required"),
// });

// const Login = () => {
//   const [user, setUser] = useState({});
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState(initialFormErrors);

//   const validate = (name, value) => {
//     yup
//       .reach(FormSchema, name)
//       .validate(value)
//       .then(() => setFormErrors({ ...formErrors, [name]: "" }))
//       .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     validate(name, value);
//     setFormValues({ ...formValues, [name]: value });
//   };

//   return (
//     <section className="py-5">
//       <div className="container">
//         <h1 className="text-center">Login</h1>
//         <form className="d-flex flex-column align-items-center">
//           <input
//             className={`mb-4 ${
//               formErrors.username ? "border-danger border-1" : ""
//             }`}
//             type="text"
//             name="username"
//             value={formValues.username}
//             onChange={handleChange}
//             placeholder="Username"
//           />
//           <div className="error username-error">{formErrors.username}</div>

//           <input
//             className={`mb-4 ${
//               formErrors.password ? "border-danger border-1" : ""
//             }`}
//             type="text"
//             name="password"
//             value={formValues.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />
//           <div className="error password-error">{formErrors.password}</div>
//           <div>
//             <Link to="/client">
//               <button className="btn btn-success">Client Dashboard</button>
//             </Link>
//             <Link to="/instructor">
//               <button className="btn btn-primary ms-3">
//                 Instructor Dashboard
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Button, Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
>>>>>>> 123e7ce5012c73c34c036239f3a692a51b4dcf30
>>>>>>> Stashed changes

const Login = () => {
  // Initial Values
  const initialLogin = {
    username: "",
    password: "",
    role: "",
  };
<<<<<<< HEAD

  const initialErrors = {
    username: "",
    password: "",
    role: "",
  };
  ////////////////

=======

  const initialErrors = {
    username: "",
    password: "",
    role: "",
  };
  ////////////////

>>>>>>> 123e7ce5012c73c34c036239f3a692a51b4dcf30
  ///// State
  const [user, setUser] = useState(initialLogin);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  /////////////
<<<<<<< HEAD
  


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
	backgroundColor: "#e0e0e0"
<<<<<<< Updated upstream
=======
=======
  const validate = (name, value) => {
=======

  ///// Error Setting
  const setLoginErrors = (name, value) => {
>>>>>>> 123e7ce5012c73c34c036239f3a692a51b4dcf30
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

<<<<<<< HEAD
  const handleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
>>>>>>> b1b169e46cec7266d5ffbebf1954a54fce8b86a2
=======
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
>>>>>>> 123e7ce5012c73c34c036239f3a692a51b4dcf30
>>>>>>> Stashed changes
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
<<<<<<< HEAD
            <h1 style={{color:"#3f51b5"}}>Login</h1>
=======
            <h1 style={{ color: "#3f51b5" }}>Login</h1>
>>>>>>> 123e7ce5012c73c34c036239f3a692a51b4dcf30

            <input
              name="username"
              type="text"
              onChange={(event) => handleChange(event)}
              value={user.username}
              placeholder="Username"
              style={style}
<<<<<<< HEAD
		
=======
>>>>>>> 123e7ce5012c73c34c036239f3a692a51b4dcf30
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
<<<<<<< Updated upstream
=======
<<<<<<< HEAD

          
          <Link to="/client">
          <button>Client Dashboard</button>
          </Link>
          <Link to="/instructor">
     <button>Instructor Dashboard</button>
          </Link>



=======
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
>>>>>>> 123e7ce5012c73c34c036239f3a692a51b4dcf30
>>>>>>> Stashed changes
        </form>
      </Paper>
    </div>
  );
};

export default Login;
