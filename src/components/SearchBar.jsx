import React from 'react'

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <input type="text" 
        placeholder='search tasks'
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        />

    </div>
  )
}

export default SearchBar