
import React from 'react';
import movies from '../data/sampledata.js';
import Header from './Header.jsx';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      moviedata: movies,
      search: '',
      filteredTitles: movies,
      movieBarText: '',

    }
    this.updateSearch = this.updateSearch.bind(this);
    this.updateMovieData = this.updateMovieData.bind(this);
    this.updateAddMovieText = this.updateAddMovieText.bind(this);
    this.updateWatchedProperty = this.updateWatchedProperty.bind(this);
    this.updateWatchedToggle = this.updateWatchedToggle.bind(this);

  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)},
      () => {
        let filteredMovies = this.state.moviedata.filter(
        (movie) => {
          console.log("this.state.search;",this.state.search);
          return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })

        this.setState({filteredTitles: filteredMovies});
      }
    );
  }

  updateMovieData(event) {
    this.setState({moviedata: [...this.state.moviedata, {title: this.state.movieBarText}]},
      this.updateMovieList());
  }

  updateMovieList(event) {
    this.setState({search: ''},
      () => {
        let filteredMovies = this.state.moviedata.filter(
        (movie) => {
          return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })

        this.setState({filteredTitles: filteredMovies});
      }
    );
  }

  updateAddMovieText(event) {
    this.setState({movieBarText: event.target.value.substr(0, 20)})
  }

  updateWatchedToggle(watchedOrNot) {
    let filteredMovies = this.state.moviedata.filter(
      (movie) => {
        if(movie.watched === undefined){
          movie.watched = 'no';
        }
        return movie.watched === watchedOrNot;
      })

    this.setState({filteredTitles: filteredMovies});
  }

  updateWatchedProperty(movie) {
    var newMovieData = this.state.moviedata;
    for (var i = 0; i < newMovieData.length; i++) {
      if (newMovieData[i].title === movie.title) {
        if (movie.watched === 'yes') {
          newMovieData[i].watched = 'no';
        } else {
          newMovieData[i].watched = 'yes';
        }
        this.setState({moviedata: newMovieData}, );
      }
    }
  }

  addMovieInfo(movie){

  }

  render(){
    return(
    <div>

      <Header />
      <AddMovieBar updateMovieData={this.updateMovieData} updateAddMovieText={this.updateAddMovieText} />
      <SearchBar search={this.state.search} updateSearch={this.updateSearch} />
      <MovieList updateWatchedToggle={this.updateWatchedToggle} updateWatchedProperty={this.updateWatchedProperty} filteredTitles={this.state.filteredTitles}/>
    </div>
  )}
}

// updateWatchedToggle={this.updateWatchedToggle}
// updateWatchedProperty={this.updateWatchedProperty}
// filteredTitles={this.state.filteredTitles}

export default App;
