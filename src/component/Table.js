import React, { useEffect, useState } from "react";
import BikeDetails from "./BikeDetails";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const API = "https://dev.electorq.com/dummy/battery";

const Table = () => {
  const [details, setDetails] = useState([]);
  const [setSearchTerm] = useState("");
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [currPageDetails, setCurrPageDetails] = useState([]);

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
        setFilteredDetails(parsedData); // Initialize filteredDetails with all details
      } else {
        console.error("API did not return an array:", parsedData);
        setDetails([]);
        setFilteredDetails([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Handle search term change
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredData = details.filter((detail) =>
      detail.id.toString().includes(term)
    );
    setFilteredDetails(filteredData); // Update filtered data based on search term
    setCurrPage(1); // Reset current page to 1 when the search term changes
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  // Update current page details when pagination changes
  useEffect(() => {
    const indexOfLastPost = currPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrPageDetails(
      filteredDetails.slice(indexOfFirstPost, indexOfLastPost)
    );
  }, [filteredDetails, currPage, postsPerPage]);

  // Handle pagination change
  const paginate = (pageNumber) => setCurrPage(pageNumber);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
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
          <BikeDetails details={currPageDetails} />
        </tbody>
      </table>
      {/* Pagination */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredDetails.length}
        paginate={paginate}
        currPage={currPage}
      />
    </div>
  );
};

export default Table;
