import React from "react";
import { IoIosSearch } from "react-icons/io";
import "../App.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="inputWrapper">
        <input type="text" placeholder="Search Battery ID" />
        <IoIosSearch className="searchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;
