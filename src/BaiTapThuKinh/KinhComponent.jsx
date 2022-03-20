import React, { Component } from "react";

export default class KinhComponent extends Component {
  render() {
    let { glassesProduct } = this.props;
    return (
      <div className="container">
        <div>
          <img
            src={glassesProduct.url}
            alt="kinhMat"
            className="position-absolute"
            style={{
              width: "150px",
              top: "88px",
              right: "60px",
              opacity: "0.85",
            }}
          />

          <div
            style={{
              width: "300px",
              top: "250px",
              left: "255px",
              paddingLeft: "15px",
              backgroundColor: "rgba(255, 127, 0, 0.5)",
              textAlign: "left",
              height: "115px",
            }}
            className="position-relative font-weight-bold text-primary"
          >
            <span>{glassesProduct.name}</span>
            <br></br>
            <span style={{ fontSize: "15px", color: "black" }}>{glassesProduct.desc}</span>
          </div>
        </div>
      </div>
    );
  }
}
