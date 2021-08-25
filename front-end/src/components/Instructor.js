import React from "react";
import dummyData from "../dummyData";
import InstructorClassCard from "./InstructorClassCard";

function Instructor(props) {
  console.log(dummyData);
  return (
    <section className="p-5">
      <div className="container">
        <div>
          {dummyData.map((card) => (
            <InstructorClassCard card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructor;
