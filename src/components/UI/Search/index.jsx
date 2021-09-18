import React from "react";
import "./styles.css";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import PropTypes from "prop-types";

function Search({ placeholder, borderColor }) {
  return (
    <div
      className="search"
      style={{
        border: borderColor,
      }}
    >
      <button className="search__icon">
        <SearchIcon />
      </button>
      <input type="text" className="search__input" placeholder={placeholder} />
    </div>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
