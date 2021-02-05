import React from 'react';
import movies from '../data/sampledata.js';

function MovieInfoPanel (props) {
  return(
    <div className='movie-info-panel'>
      {console.log(props)}
      <div>
        year: {props.title.year}
      </div>
      <div>
        runtime: {props.title.runtime}
      </div>
      <div>
        metascore: {props.title.metascore}
      </div>
      <div>
        imbdRating: {props.title.imbdRating}
      </div>
      <div>
        watched: {props.title.watched}
      </div>
    </div>
  )
}

export default MovieInfoPanel;