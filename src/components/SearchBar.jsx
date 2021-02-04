import React from 'react';

function SearchBar (props) {
  console.log('props:',props);
  // let filteredMovies = props.moviedata.filter(
  //   (movie) => {
  //     return movie.title.toLowerCase().indexOf(props.search) !== -1;
  //   }
  // );
  return (
    <div className='search-bar-and-button'>
      {console.log(props)}
      <input  className='search-bar' value={props.search} type="text" placeholder="Search..." onChange={props.updateSearch}/>
      <button className="search-button" onClick={() => props.handleSearchBarButtonClick(event)}></button>
    </div>
  )
}

export default SearchBar;