import React from "react";
import dummyData from "../dummyData";
import AvailableClassCard from "./AvailableClassCard";
import {useState} from 'react'

function Client(props) {
const {data} = props;

  return (
    <>
     
    
    <section className="py-4">
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

export default Client;
