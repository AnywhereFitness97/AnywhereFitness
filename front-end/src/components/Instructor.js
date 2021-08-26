import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import InstructorClassCard from "./InstructorClassCard";
import { connect } from "react-redux";

function Instructor(props) {
  // const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(data);
    console.log(props);
    console.log(props.currentUser.classes.length);
  });

  // useEffect(() => {
  //   console.log("in here");
  //   if (!props.currentUser.classes) return;
  //   console.log("here too");
  //   setData([...data, ...props.currentUser.classes]);
  // }, [props.currentUser.classes]);
  return (
    <section className="p-5">
      <div className="container">
        {props.currentUser.classes && (
          <div>
            {props.currentUser.classes.map((card) => (
              <InstructorClassCard card={card} />
            ))}
          </div>
        )}
        {/* 
        {props.currentUser.classes.length === 0 && (
          <div>
            {dummyData.map((card) => (
              <InstructorClassCard card={card} />
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Instructor);
