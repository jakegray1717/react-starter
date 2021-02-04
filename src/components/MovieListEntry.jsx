import React from 'react';
import movies from '../data/sampledata.js'

function MovieListEntry (props) {
  return (
    <div className='movie-list-entry'>
      {/* {console.log('MLEntry',props.title.title)} */}
      <span className='movie-list-entry-title'>
        {props.title.title}
      </span>
      <span>
        <button className=''></button>
      </span>
      <br></br>
      <br></br>
    </div>
  )
}





export default MovieListEntry;