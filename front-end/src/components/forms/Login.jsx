import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Form</h1>
      <Link to="/client">
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default Login;
