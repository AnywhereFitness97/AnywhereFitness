import React, { useEffect, useState } from "react";
import dummyData from "../dummyData";
import AvailableClassCard from "./AvailableClassCard";
import LocationBarSearch from "./forms/LocationBarSearch";
import { connect } from "react-redux";
import { setClasses, getClasses } from "../actions/actions";
import axios from "axios";

function Client(props) {
  useEffect(() => {
    props.getClasses();
  }, []);
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

export default connect(mapStateToProps, { setClasses, getClasses })(Client);
