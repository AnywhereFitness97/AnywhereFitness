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
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setCurrentUser,
  isFetchingTrue,
  isFetchingFalse,
  login,
} from "../../actions/actions";

const Login = (props) => {
  const dispatch = useDispatch();
  // Initial Values
  const initialLogin = {
    username: "",
    password: "",
    role: "Client",
  };

  const initialErrors = {
    username: "",
    password: "",
  };
  ////////////////

  ///// State
  const [credentials, setCredentials] = useState(initialLogin);
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
    setCredentials({ ...credentials, [name]: value });
    setLoginErrors(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.login(credentials);
    props.setCurrentUser(
      props.users.find((user) => {
        return user.username === credentials.username;
      })
    );
  };
  ////////////

  //// Validation
  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter password"),
    role: yup.string().required("Please select a role"),
  });

  useEffect(() => {
    schema.isValid(credentials).then((valid) => setDisabled(!valid));
  }, [credentials]);

  useEffect(() => {
    if (props.currentUser == undefined) {
      console.log("no current user");
      return;
    }
    if (props.currentUser.role == "Instructor") {
      props.history.push(`/instructor`);
    } else if (props.currentUser.role == "Client") {
      props.history.push(`/client`);
    } else {
      console.log("no current user");
    }
  }, [props.currentUser]);
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
        <form style={style} onSubmit={handleSubmit}>
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
              onChange={handleChange}
              value={credentials.username}
              placeholder="Username"
              style={style}
            />

            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={credentials.password}
              placeholder="Password"
              style={style}
            />
            <select name="role" onChange={handleChange}>
              <option value="Client">Client</option>
              <option value="Instructor">Instructor</option>
            </select>
            <Button
              style={style}
              variant="contained"
              color="primary"
              disabled={disabled}
              type="submit"
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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  setCurrentUser,
  isFetchingTrue,
  isFetchingFalse,
  login,
})(Login);
