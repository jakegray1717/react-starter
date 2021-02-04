import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import movies from '../data/sampledata.js'

function MovieList (props) {
  return (
    <div className='movie-list'>
      {console.log('props', props)}
      <ul>
      {props.filteredTitles.map( (title, index) =>
        <MovieListEntry title={title} key={index}/>
      )}
      </ul>
    </div>
  )
}


export default MovieList;