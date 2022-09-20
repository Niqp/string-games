import React from "react";

export class Gematria extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gematria">
        <h2>גימטריה</h2>
        <div className="gem-container">
          <input type="text" className="gem-input" defaultValue="שלום" />
          <button className="gem-calc">Calculate</button>
          <div className="res-calc">376</div>
        </div>
        <p className="desc">
          "Gematryia" is the word numerical value calculation while summarizing
          the values of the letters of Hebrew alphabet. Enter your name in
          Hebrew and press the button - get value.
        </p>
      </div>
    );
  }
}
