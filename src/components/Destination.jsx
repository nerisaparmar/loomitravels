import React from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/DestinationApi";
import { useState } from "react";
// This Componenet will Update and delete each Destination data using Update and Delete API
const Destination = ({ destination }) => {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();
  const [isUpdateing, setIsUpdateing] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handleUpdate = () => {
    let city = "",
      country = "";

    if (newCity == "") {
      city = destination.city;
    } else {
      city = newCity;
    }
    if (newCountry == "") {
      country = destination.country;
    } else {
      country = newCountry;
    }

    updateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });

    setNewCity("");
    setNewCountry("");
    setIsUpdateing(!isUpdateing);
  };

  return (
    <div
      className="row py-1"
      style={{ borderBottom: "1px solid #333", borderTop: "1px solid #333" }}
    >
      <div className="text-danger col-4 offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdateing ? (
              <input
                type="text"
                placeholder="City Name.."
                className="form-control"
                defaultValue={destination.city}
                onChange={(e) => setNewCity(e.target.value)}
              />
            ) : (
              <span>{destination.city}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpdateing ? (
              <input
                type="text"
                placeholder="Country Name.."
                className="form-control"
                defaultValue={destination.country}
                onChange={(e) => setNewCountry(e.target.value)}
              />
            ) : (
              <span>{destination.country}</span>
            )}
          </div>
        </div>
      </div>
      <div className="text-primary col-1">{destination.daysNeeded} days</div>
      <div className="col-3">
        <button
          className="btn btn-warning m-1"
          onClick={() => setIsUpdateing(!isUpdateing)}
        >
          {isUpdateing ? "Cancel" : "Edit"}
        </button>
        {isUpdateing ? (
          <button
            className="btn btn-primary m-1"
            onClick={() => handleUpdate()}
          >
            Update
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-danger m-1"
          onClick={() => deleteDestination({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Destination;
