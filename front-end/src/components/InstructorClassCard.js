import React from "react";
import { Link } from "react-router-dom";

function InstructorClassCard(props) {
  const { card } = props;
  console.log(card);
  return (
    <div className="my-2 border">
      <div className="d-flex">
        <div className="card-available-img-wrap inst-card-img-width">
          <img
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            className="img-fluid"
          />
        </div>
        <div className="p-2">
          <div className="inst-card-text-top">
            <h1>{card.class_name}</h1>
            <h4>{card.class_location}</h4>
          </div>
          <div className="d-flex justify-content between ">
            <h4>{card.class_date}</h4>
            <h4>{card.class_time}</h4>
            <h4>{card.class_duration}</h4>
          </div>
          <h4>Intensity: {card.class_intensity_level}</h4>
          <h4>Cost: $10</h4>
          <Link to={`/instructor/${card.id}`}>
            <button className="btn btn-dark">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstructorClassCard;
