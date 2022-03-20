import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
import KinhComponent from "./KinhComponent";

export default class BaiTapThuKinh extends Component {
  state = {
    glassesDefault: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          className="m-1 border border-widht-1"
          style={{ width: "110px", cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
          alt=""
          onClick={() => {
            this.changeGlasses(glassesItem);
          }}
        />
      );
    });
  };

  changeGlasses = (glasses) => {
    this.setState({ glassesDefault: glasses });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/glassesImage/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.1)", minHeight: "2000px" }}
        >
          <h3 className="text-light p-3" style={{ backgroundColor: "#26212a" }}>
            TRY GLASSES ONLINE
          </h3>

          <div className="container">
            <div className="row mt-5">
              <div className="col-6 postion-relative">
                <img
                  src="./img/glassesImage/model.jpg"
                  alt="..."
                  style={{ width: "300px" }}
                  className="position-absolute"
                />

                <KinhComponent glassesProduct={this.state.glassesDefault} />
              </div>
              <div className="col-6">
                <img
                  src="./img/glassesImage/model.jpg"
                  alt="..."
                  style={{ width: "300px" }}
                />
              </div>
            </div>
          </div>

          <div className="container mt-5 ">
            <div className="bg-light d-flex justify-content-center p-5">
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
