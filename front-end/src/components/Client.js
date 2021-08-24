import React from "react";
import dummyData from "../dummyData";
import AvailableClassCard from "./AvailableClassCard";

function Client(props) {
  return (
    <section className="py-4">
      <div className="container">
        <div className="d-flex flex-wrap">
          {dummyData.map((card) => (
            <AvailableClassCard card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;
