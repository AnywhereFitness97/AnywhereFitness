import React from "react";
import dummyData from "../dummyData";
import { AvailableClassCard } from "./AvailableClassCard";

function Client(props) {
  return (
    <div>
      {dummyData.map((card) => {
        return <AvailableClassCard card={card} />;
      })}
    </div>
  );
}

export default Client;
