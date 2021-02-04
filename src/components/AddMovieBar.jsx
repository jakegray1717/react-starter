import React from 'react';

function AddMovieBar (props) {
  return (
    <div className='add-movie-bar-and-button'>
      <input className='add-movie-bar' value={props.addMovieText} type="text" placeholder="Add movie..." onChange={props.updateAddMovieText}>
      </input>
      <button className='add-movie-button' onClick={() => prop.handleAddMovieBarButtonClick()}></button>
      <br></br>
      <br></br>
    </div>

  )
}

export default AddMovieBar;