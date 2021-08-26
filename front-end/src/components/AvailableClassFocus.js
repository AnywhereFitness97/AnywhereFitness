import React from "react";
import { useParams } from "react-router-dom";
import dummyData from "../dummyData";

function AvailableClassFocus(props) {
  const { id } = useParams();
  const card = dummyData.find((card) => card.id === parseInt(id));

  const handleRegister = () => {
    console.log("hi");
  };

  return (
    <div className="container my-3 mx-auto">
      <div className="d-flex flex-column align-items-center mx-auto">
        <div
          className="d-flex justify-content-center p-3 m-3 mt-0"
          style={{ width: "80%" }}
        >
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="Gym"
              className="img-fluid pe-3 me-5"
            />
          </div>
          <div className="m-1 ms-5 d-flex flex-column justify-content-between">
            <div className="inst-card-text-top ">
              <h2>{card.class_name}</h2>
              <h3>{card.class_type}</h3>
              <p>Intensity: {card.class_intensity_level}</p>
              <p>{card.class_date}</p>
              <p>{card.class_time}</p>
              <p>{card.class_duration}</p>
            </div>
            <p className="mb-0">Cost: </p>
          </div>
        </div>
        <div className="m-4 mb-0">
          <button className="btn btn-primary" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvailableClassFocus;
