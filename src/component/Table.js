import React, { useEffect, useState } from "react";
import BikeDetails from "./BikeDetails";

const API = "https://dev.electorq.com/dummy/battery";

const Table = () => {
  const [details, setDetails] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseBody = await response.json();
  
      const parsedData = JSON.parse(responseBody.body);
  
      if (Array.isArray(parsedData)) {
        setDetails(parsedData);
      } else {
        console.error("API did not return an array:", parsedData);
        setDetails([]);
      }
  
      console.log(parsedData);
    } catch (e) {
      console.error(e);
    }
  };
  

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th> BATTERY ID </th>
          <th> SOC </th>
          <th> IMEI </th>
          <th> CURRENT OWNER | ID </th>
        </tr>
      </thead>
      <tbody>
        <BikeDetails details={details} />
      </tbody>
    </table>
  );
};

export default Table;
