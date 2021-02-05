import React from 'react';

function SearchBar (props) {

  return (
    <div className='search-bar-and-button'>

      <input  className='search-bar' value={props.search} type="text" placeholder="Search..." onChange={props.updateSearch}/>
    </div>
  )
}

export default SearchBar;