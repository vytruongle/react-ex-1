import React, { Component } from "react";
import "./item.css";
export default class Item extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card item-main">
              <div className="bg-primary text-white item-icon">
                <i class="fa-solid fa-layer-group"></i>
              </div>
              <div className="card-body mt-4">
                <h4 className="card-title">Fresh new layout</h4>
                <p className="card-text">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card item-main">
              <div className="bg-primary text-white item-icon">
                <i class="fa-solid fa-cloud-arrow-down"></i>
              </div>
              <div className="card-body mt-4">
                <h4 className="card-title">Free to download</h4>
                <p className="card-text">
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card item-main">
              <div className="bg-primary text-white item-icon">
                <i class="fa-regular fa-address-card"></i>
              </div>
              <div className="card-body mt-4">
                <h4 className="card-title">Jumbotron hero header</h4>
                <p className="card-text">
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card item-main">
              <div className="bg-primary text-white item-icon">
                <i class="fa-brands fa-bootstrap"></i>
              </div>
              <div className="card-body mt-4">
                <h4 className="card-title">Feature boxes</h4>
                <p className="card-text">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card item-main">
              <div className="bg-primary text-white item-icon">
                <i class="fa-solid fa-code"></i>
              </div>
              <div className="card-body mt-4">
                <h4 className="card-title">Simple clean code</h4>
                <p className="card-text">
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card item-main">
              <div className="bg-primary text-white item-icon">
                <i class="fa-regular fa-circle-check"></i>
              </div>
              <div className="card-body mt-4">
                <h4 className="card-title">A name you trust</h4>
                <p className="card-text">
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
