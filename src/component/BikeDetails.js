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
      {details
        .sort((a, b) => a.id - b.id)
        .map((detail) => {
          const rowStyle = {
            background: detail.id % 2 === 0 ? "#252526" : "#2D2D30",
          };

          return (
            <tr key={detail.id} style={rowStyle}>
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
