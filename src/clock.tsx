import React from "react";
import ReactDOM from "react-dom/client";

export class Clock extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="clock">
        <div className="date"></div>
        <div className="time"></div>
      </div>
    );
  }
}
