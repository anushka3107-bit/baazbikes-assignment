import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = ({ postsPerPage, totalPosts, currPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginationContainer">
      <div
        className="icon"
        onClick={() => paginate(1)}
        style={{ color: currPage === 1 ? "gray" : "white" }}
      >
        <FaChevronLeft />
      </div>

      {pageNumbers.map((num) => {
        return (
          <li key={num} className="pageItem">
            <a
              onClick={() => paginate(num)}
              href="!#"
              className="pageLink"
              style={{ color: currPage === num ? "gray" : "white" }}
            >
              {num}
            </a>
          </li>
        );
      })}
      <div
        className="icon"
        onClick={() => paginate(pageNumbers.length)}
        style={{ color: currPage === pageNumbers.length ? "gray" : "white" }}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Pagination;
