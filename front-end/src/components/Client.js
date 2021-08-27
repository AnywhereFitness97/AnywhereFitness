import React from "react";
import dummyData from "../dummyData";
import AvailableClassCard from "./AvailableClassCard";
import {useState} from 'react'
import LocationBarSearch from "./forms/LocationBarSearch";
import { connect } from "react-redux";

function Client(props) {
const {data} = props;

  return (
    <>
     
    
    <section className="py-4">
      <LocationBarSearch />
      <div className="container">
        <div className="d-flex flex-wrap">
          {data && data.map((card) => (
            <AvailableClassCard card={card} />
            
          ))}
        </div>
      </div>
      <div>
 
   </div>
    </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Client);
