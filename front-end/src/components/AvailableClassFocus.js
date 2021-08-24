import React from "react";

function AvailableClassFocus(props) {
  return (
    <div>
      <h1>class ID: {props.match.params.id}</h1>
      <button className="btn btn-primary">Register</button>
    </div>
  );
}

export default AvailableClassFocus;
