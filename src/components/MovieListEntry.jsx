import React from 'react';
import movies from '../data/sampledata.js';
import MovieInfoPanel from './MovieInfoPanel.jsx';

function MovieListEntry (props) {
  return (
    <div className='movie-list-entry'>
      <br></br>
      <br></br>
      <span className='movie-list-entry-title'>
        {props.title.title}
      </span>
      <span>
        <button className='watched-button' onClick={() =>{props.updateWatchedProperty(props.title);}}>Watched</button>
      </span>
      <MovieInfoPanel title={props.title}/>
      <br></br>
      <br></br>
    </div>
  )
}


export default MovieListEntry;