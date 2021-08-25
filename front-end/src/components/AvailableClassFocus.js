import React from "react";
import { useParams } from "react-router-dom";
import dummyData from "../dummyData";


function AvailableClassFocus(props) {
  const { id } = useParams();
  const card = dummyData.find((card) => card.id === parseInt(id));

  return (
 
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="Gym"
        />
      </div>
      <h2>{card.class_name}</h2>
      <h3>{card.class_type}</h3>
      <p>Intensity: {card.class_intensity_level}</p>
      <p>{card.class_date}</p>
      <p>{card.class_time}</p>
      <p>{card.class_duration}</p>
      <p>Cost: </p>
      <button className="btn btn-primary">Register</button>
    </div>
    
  );
}

export default AvailableClassFocus;
