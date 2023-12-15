import React from "react";

const BikeDetails = ({ details }) => {
  if (!Array.isArray(details)) {
    return (
      <tr>
        <td colSpan="4">Invalid data</td>
      </tr>
    );
  }

  return (
    <>
      {details.map((detail) => {
        return (
          <tr key={detail.id}>
            <td>{detail.id}</td>
            <td>{detail.soc}</td>
            <td>{detail.imei}</td>
            <td>{detail.owner}</td>
          </tr>
        );
      })}
    </>
  );
};

export default BikeDetails;
