import React from "react";
import dummyData from "../dummyData";

function UpcomingClasses(props) {
  return (
    <div>
      {dummyData.map((card) => {
        return (
          <div>
            <div className="card-available-img-wrap inst-card-img-width">
              <img
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Gym"
              />
            </div>
            <div className="p-2">
              <h2>{card["class_name"]}</h2>
              <h3>{card["class_type"]}</h3>
            </div>
            <p>Intensity: {card["class_intensity_level"]}</p>
            <div className="d-flex justify-content between ">
              <p>{card["class_date"]}</p>
              <p>{card["class_time"]}</p>
              <p>{card["class_duration"]}</p>
            </div>
            <p>Cost: $15</p>
            <button>Punch Pass</button>
            <button>Remove Class</button>
          </div>
        );
      })}
    </div>
  );
}

export default UpcomingClasses;
