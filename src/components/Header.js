import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container">
            <a class="navbar-brand text-white" href="#">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav">
                <a
                  class="nav-link text-white active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a class="nav-link text-secondary" href="#">
                  About
                </a>
                <a class="nav-link text-secondary" href="#">
                  Service
                </a>
                <a class="nav-link text-secondary" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
