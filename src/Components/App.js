import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Movies from "./Movies";
import "./styles.css";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
        <Movies />
      </Fragment>
    );
  }
}
