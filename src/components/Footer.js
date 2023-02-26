import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="container footer">
          <p className="text-white footer-text">
            Copyright © Your Website 2022
          </p>
        </div>
      </div>
    );
  }
}
