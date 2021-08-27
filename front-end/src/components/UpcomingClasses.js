import React, { useEffect } from "react";
import { connect } from "react-redux";
import { unregister, setClientClasses } from "../actions/actions";
import axios from "axios";

function UpcomingClasses(props) {
  useEffect(() => {
    axios
      .get("https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/")
      .then((res) => {
        const clientList = res.data.allClassLists.filter((cur) => {
          return cur.usersId === props.currentUser.userID;
        });
        clientList.forEach(
          (item) =>
            (item.class = props.classes.find(
              (_class) => _class.classId === item.class_id
            ))
        );
        props.setClientClasses(clientList);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {props.clientClasses.map((item) => {
        const handleUnregister = () => {
          console.log("unregister");
          const id = item.client_list_id;
          axios
            .delete(
              `https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/${id}`
            )
            .then((res) => {
              console.log(res);

              axios
                .get(
                  "https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/"
                )
                .then((res) => {
                  const clientList = res.data.allClassLists.filter((cur) => {
                    return cur.usersId === props.currentUser.userID;
                  });
                  clientList.forEach(
                    (item) =>
                      (item.class = props.classes.find(
                        (_class) => _class.classId === item.class_id
                      ))
                  );
                  props.setClientClasses(clientList);
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => {
              console.log(err);
            });
          // props.unregister({ id: card.id, instructor_id: card.instructor_id });
        };
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
                  <h2>{item.class["class_name"]}</h2>
                  <h3>{item.class["class_type"]}</h3>
                </div>
                <br />
                <div className="d-flex justify-content-between">
                  <p>{item.class["class_date"]}</p>
                  <p>{item.class["class_time"]}</p>
                  <p>{item.class["class_duration"]}</p>
                </div>
                <div>
                  <p>Intensity: {item.class["class_intensity_level"]}</p>
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
                    onClick={handleUnregister}
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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { unregister, setClientClasses })(
  UpcomingClasses
);
