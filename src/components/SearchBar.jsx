import React from 'react';

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder='Search tasks'
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
