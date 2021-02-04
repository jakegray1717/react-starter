import styles from '../main.css';
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
      movieBarText: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.updateFilteredTitles = this.updateFilteredTitles.bind(this);
    this.handleSearchBarButtonClick = this.handleSearchBarButtonClick.bind(this);
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});

    let filteredMovies = this.state.moviedata.filter(
      (movie) => {
        return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    this.setState({filteredTitles: filteredMovies});

  }

  updateFilteredTitles(newFiltered) {
    this.setState({filteredTitles: newFiltered});
  }

  handleSearchBarButtonClick(event) {

  }

  updateAddMovieText(event) {
    this.setState({movieBarText: event.target.value.substr(0, 20)})
  }

  render(){
    return(
    <div>
      {/* {console.log(this.state.moviedata)} */}
      <Header />
      <AddMovieBar />
      <SearchBar search={this.state.search} moviedata={this.state.moviedata} updateSearch={this.updateSearch} updateFilteredTitles={this.updateFilteredTitles} handleSearchBarButtonClick={this.handleSearchBarButtonClick} />
      <MovieList moviedata={this.state.moviedata} filteredTitles={this.state.filteredTitles}/>
    </div>
  )}
}

export default App;
