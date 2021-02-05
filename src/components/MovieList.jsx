import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import movies from '../data/sampledata.js'

function MovieList (props) {
  return (
    <div>
      <span className='watched' onClick={() => props.updateWatchedToggle('yes')}><u>Watched</u></span>
      <span className='to-watch' onClick={() => props.updateWatchedToggle('no')}><u>To Watch</u></span>
      <div className='movie-list'>

        <ul>
          {props.filteredTitles.map( (title, index) =>
            <MovieListEntry updateWatchedProperty={props.updateWatchedProperty} title={title} key={index}/>
          )}
        </ul>
      </div>
    </div>
  )
}


export default MovieList;