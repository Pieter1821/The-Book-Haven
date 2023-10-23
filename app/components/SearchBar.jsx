import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <div className="relative flex">
        <input
          type="text"
          placeholder="Search"
          className="w-40 px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
