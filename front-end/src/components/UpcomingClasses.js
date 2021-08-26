import React from "react";
import dummyData from "../dummyData";

function UpcomingClasses(props) {
  return (
    <div>
      {dummyData.map((card) => {
        return (
          <div className="container my-2 bg-secondary border">
            <div className="d-flex justify-content-between">
              <div className="card-available-img-wrap inst-card-img-width">
                <img
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  alt="Gym"
                  className="img-fluid"
                />
              </div>
              <div className="me-5 pe-5 ps-2 flex-grow-1">
                <div className="inst-card-text-top ">
                  <h2>{card["class_name"]}</h2>
                  <h3>{card["class_type"]}</h3>
                </div>
                <br />
                <div className="d-flex justify-content-between">
                  <p>{card["class_date"]}</p>
                  <p>{card["class_time"]}</p>
                  <p>{card["class_duration"]}</p>
                </div>
                <div>
                  <p>Intensity: {card["class_intensity_level"]}</p>
                  <p>Cost: $15</p>
                </div>
              </div>
              <div>
                <div
                  className="d-flex flex-column justify-content-between align-items-end m-auto p-3"
                  style={{ height: "100%" }}
                >
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                  ></button>
                  <button className="p-2 btn btn-dark">Punch Pass</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UpcomingClasses;
