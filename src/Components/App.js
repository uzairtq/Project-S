import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Movies from "./Movies";
import { movies, genres } from "../store.js";
import "./styles.css";

export default class extends Component {
  state = {
    movies,
    category: ""
  };

  getMoviesByGenres() {
    return Object.entries(
      this.state.movies.reduce((movies, movie) => {
        const { genres } = movie;

        movies[genres] = movies[genres] ? [...movies[genres], movie] : [movie];
        return movies;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  };

  render() {
    const movies = this.getMoviesByGenres();
    const { category } = this.state;
    return (
      <Fragment>
        <Header />
        <Footer genres={genres} onSelect={this.handleCategorySelected} />
        <Movies movies={movies} category={category} />
      </Fragment>
    );
  }
}
