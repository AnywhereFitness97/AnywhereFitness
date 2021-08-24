import React, { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <div>
      <input
        type="text"
        name="searchBar"
        placeholder="Search classes"
        onChange={handleChange}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
