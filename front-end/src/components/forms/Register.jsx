import React, { useState } from "react";

const Register = () => {
  const [newMember, setNewMember] = setState({});

  return (
    <div>
      <h1>Register Here</h1>
      <form>
        <label>
          First Name
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label>
          {" "}
          Last Name
          <input type="text" name="last_name" />
        </label>
        <label>
          {" "}
          Email
          <input type="email" name="email" />
        </label>
        <label>
          {" "}
          Phone Number
          <input type="text" name="phone_Number" />
        </label>
        <label>
          {" "}
          Address
          <input type="text" name="address" />
        </label>
        <label>
          Second Address
          <input type="text" name="address_2" />
        </label>
        <label>
          {" "}
          Zip
          <input type="text" name="zip" />
        </label>
        <label>
          {" "}
          City
          <input name="city" />
        </label>
        <label>
          {" "}
          State
          <input type="text" name="state" />
        </label>
      </form>
    </div>
  );
};

export default Register;
