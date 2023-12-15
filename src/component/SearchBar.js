import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "../App.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="searchBar">
      <div className="inputWrapper">
        <input
          type="text"
          placeholder="Search Battery ID"
          value={searchTerm}
          onChange={handleChange}
        />
        <IoIosSearch className="searchIcon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
