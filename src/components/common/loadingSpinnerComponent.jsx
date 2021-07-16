import React, { Component } from "react";

class LoadingSpinnerComponent extends Component {
  style = {
    width: this.props.width ? this.props.width : "5rem",
    height: this.props.heigth ? this.props.heigth : "5rem",
  };

  render() {
    return (
      <div className={this.getSpinnerMargins()}>
        <div className="spinner-border text-warning" style={this.style}></div>
      </div>
    );
  }

  getSpinnerMargins = () => {
    let classNames = "text-center ";
    if (this.props.margin) {
      classNames += this.props.margin;
    } else {
      classNames += "mt-5";
    }
    return classNames;
  };
}

export default LoadingSpinnerComponent;
