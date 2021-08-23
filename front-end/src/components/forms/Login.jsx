import React, { useState } from "react";

const Login = () => {
//   const initialLogin = {
//     username: "",
//     password: "",
//   };

  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");

  



  return (
    <div>
      <form>
        
		<label>
          Username:
          <input 
		  name="username" 
		  type="text"  
		  onChange={(event) => setUsername(event.target.value)} 
		  value={userName} 
		  placeholder="username"
		  />
        </label>


		<label>
        Password:
          <input 
		  name="password" 
		  type="text" 
		  onChange={(event) => setPassword(event.target.value)} 
		  value={passWord}
		  placeholder="password"
		  />
        </label>

		<button>Login</button>
      </form>
    </div>
  );
};

export default Login;
