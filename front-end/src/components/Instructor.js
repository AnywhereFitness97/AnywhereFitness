import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import InstructorClassCard from "./InstructorClassCard";
import { connect } from "react-redux";
import { getClasses } from "../actions/actions";

function Instructor(props) {
  // const [data, setData] = useState([]);
  const [instructorClasses, setInstructorClasses] = useState([]);
  useEffect(() => {
    // console.log(data);
    console.log(props);
    props.getClasses();
    const classes = props.classes.filter(
      (_class) =>
        _class.class_instructor_username === props.currentUser.username
    );
    setInstructorClasses(classes);
    console.log("instructor classes set");
  }, []);

  // useEffect(() => {
  //   console.log("in here");
  //   if (!props.currentUser.classes) return;
  //   console.log("here too");
  //   setData([...data, ...props.currentUser.classes]);
  // }, [props.currentUser.classes]);
  return (
    <section className="p-5">
      <div className="container">
        {instructorClasses && (
          <div>
            {instructorClasses.map((card) => (
              <InstructorClassCard
                card={card}
                setInstructorClasses={setInstructorClasses}
                instructorClasses={instructorClasses}
              />
            ))}
          </div>
        )}

        {/* {props.currentUser.classes.length === 0 && (
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

export default connect(mapStateToProps, { getClasses })(Instructor);
