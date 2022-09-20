import React from "react";
import ReactDOM from "react-dom/client";

export class WordsInside extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="words-inside">
        <div className="col one">
          <h2>Words in Words</h2>
          <button className="start-game">Start Game</button>
          <label className="master-lbl">Master word:</label>
          <input type="text" className="master-word" readOnly={true} />
          <button className="check-words">Check the Words</button>
          <p className="desc">
            Press the button "Start Game". Write down as many as you can nouns
            consisting of no less than 4 letters of the master word. Press the
            button "Check the Words".
          </p>
        </div>
        <div className="col two">
          <label>Your Words</label>
          <textarea className="your-words"></textarea>
          <div className="y-words-div"></div>
          <p className="your-points">0</p>
        </div>
        <div className="col three">
          <label>My Words</label>
          <textarea className="comp-words" readOnly={true}></textarea>
          <div className="c-words-div"></div>
          <p className="comp-points">0</p>
        </div>
      </div>
    );
  }
}
