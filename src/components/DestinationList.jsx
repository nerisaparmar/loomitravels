import React from "react";
import { useGetAllDestinationsQuery } from "../api/DestinationApi";
import Destination from "./Destination";
// this will get all the data from the json server and map them into destination component
const DestinationList = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return <Destination destination={destination} />;
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3">{content}</div>;
};

export default DestinationList;
