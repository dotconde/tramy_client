import React from "react";
import "./styles.css";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import PropTypes from "prop-types";

function Search({ value, onChange, placeholder, borderColor }) {
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
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search__input"
      />
    </div>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
