import React from "react";
import dummyData from "../dummyData";
import AvailableClassCard from "./AvailableClassCard";
import LocationBarSearch from "./forms/LocationBarSearch";
import { connect } from "react-redux";

function Client(props) {
  return (
    <section className="py-4">
      <LocationBarSearch />
      <div className="container">
        <div className="d-flex flex-wrap">
          {props.classes.map((card) => (
            <AvailableClassCard card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Client);
