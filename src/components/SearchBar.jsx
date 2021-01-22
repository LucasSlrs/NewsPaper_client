import React from "react";
import "../styles/searchbar.css";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <input
        className="searchbar"
        name="search"
        onChange={props.handleChange}
        type="search"
        value={props.inputValue}
        placeholder="Research..."
      />
    </form>
  );
};

export default SearchBar;
