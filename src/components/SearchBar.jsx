import React from "react";

const SearchBar = ({ handleQuery }) => {
  return (
    <input
      placeholder="search.."
      onChange={handleQuery}
      className="text-teal-600 text-lg p-2 w-[100%] outline-none  "
    />
  );
};

export default SearchBar;
