import React, { useState, useEffect } from "react";
import * as yup from "yup"


const Login = () => {

	// Initial Values
  const initialLogin = {
    username: "",
    password: "",
  };

  const initialErrors = {
    username: "",
    password: "",
  };
////////////////

///// State
  const [user, setUser] = useState(initialLogin);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true)

/////////////
const setLoginErrors = (name,value) => {
	yup.reach(schema, name).validate(value)
	.then(() => setErrors({...errors, [name]: ""}))
	.catch(err => setErrors({...errors, [name]: err.errors[0]})) 
}

////// Event Handlers
  const handleChange = (event) => {
	  const {name,value} = event.target
	  setUser({...user, [name]: value})
	  setLoginErrors(name, value)
  }

  const handleSubmit = (event) => {
	  event.preventDefault();
	
  }
  ////////////

  //// Validation
const schema = yup.object().shape({
	username: yup.string().required("Please enter username"),
	password: yup.string().required("Please enter password"),
	
})


useEffect(() => {
	schema.isValid(user).then(valid => setDisabled(!valid))
}, [user])
/////////

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <div style={{color: "red"}}>
			<div>{errors.username}</div>
			<div>{errors.password}</div>
		</div>
		<label>
          Username:
          <input 
		  name="username" 
		  type="text"  
		  onChange={(event) => handleChange(event)} 
		  value={user.username} 
		  placeholder="username"
		  />
        </label>


		<label>
        Password:
          <input 
		  name="password" 
		  type="text" 
		  onChange={(event) =>  handleChange(event)} 
		  value={user.password}
		  placeholder="password"
		  />
        </label>

		<button disabled={disabled}>Login</button>
      </form>
    </div>
  );
};

export default Login;
