import React from "react";
import AddDestination from "./AddDestination";
import DestinationList from "./DestinationList";
import RandomDestination from "./RandomDestination";

const DestinationIndex = () => {
  return (
    <div className="text-danger">
      <h1 className="text-sucess text-center">Loomi Travel List</h1>
      <AddDestination />
      <DestinationList />
      <RandomDestination />
    </div>
  );
};

export default DestinationIndex;
