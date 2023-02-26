import React, { Component } from "react";
import "./banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-start banner">
          <h1>A Warm Welcome!</h1>
          <p className="text-secondary">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn btn-primary ">Call to action!</button>
        </div>
      </div>
    );
  }
}
