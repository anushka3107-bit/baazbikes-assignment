import React, { useEffect, useState } from "react";
import BikeDetails from "./BikeDetails";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const API = "https://dev.electorq.com/dummy/battery";

const Table = () => {
  const [details, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const [postsPerPage] = useState(5);

  const [currDetails, setCurrDetails] = useState([]);

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
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  const filteredDetails = details.filter((detail) =>
    detail.id.toString().includes(searchTerm)
  );

  // get curr details
  useEffect(() => {
    const indexOfLastPost = currPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    setCurrDetails(details.slice(indexOfFirstPost, indexOfLastPost));
  }, [details, currPage, postsPerPage]);

  // change page
  const paginate = (pageNumber) => setCurrPage(pageNumber);

  return (
    <div className="table-container">
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
          <BikeDetails details={filteredDetails} />
        </tbody>
      </table>
      {/* Pagination */}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={details.length}
        paginate={paginate}
        currPage={currPage}
      />
    </div>
  );
};

export default Table;
