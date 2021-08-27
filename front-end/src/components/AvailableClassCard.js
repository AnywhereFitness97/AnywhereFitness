import React from "react";
import { useHistory } from "react-router-dom";



export const AvailableClassCard = (props) => {
  const { card } = props;
  const { push } = useHistory();
  const handleClick = (e) => {
    push(`/client/focus/${card.id}`);
  };


  
  
  return (
   
  
    
    <div className="card-available-wrap">
      <div className="m-3 card-available" onClick={handleClick}>
        <div className="card-available-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Gym"
            className="img-fluid card-available-img"
          />
        </div>
        <h2>{card["class_name"]}</h2>
        <h3>{card["class_type"]}</h3>
        <p>Intensity: {card["class_intensity_level"]}</p>
        <p>{card["class_date"]}</p>
        <p>{card["class_time"]}</p>
        <p>{card["class_duration"]}</p>
      </div>
      <div>
    
      </div>
      
    </div>
    
  );
};

export default AvailableClassCard;
