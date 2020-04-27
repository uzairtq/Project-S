import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Movies from "./Movies";
import { movies, genres } from "../store.js";
import "./styles.css";

export default class extends Component {
  states = {
    movies
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Footer genres={genres} />
        <Movies />
      </Fragment>
    );
  }
}
