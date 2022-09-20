import React from "react";
import ReactDOM from "react-dom/client";

export class Anagrams extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="anagrams">
        <h2>Anagrams</h2>
        <div className="flex-container">
          <button className="new-anagram">
            New
            <br />
            Anagram
          </button>
          <div className="anagram-container1">
            <label className="anagram-lbl" htmlFor="anagram">
              Find anagram of:
            </label>
            <input type="text" id="anagram" readOnly={true} />
          </div>
        </div>
        <div className="anagram-container2">
          <label className="your-try" htmlFor="your-anagram">
            Your try:
          </label>
          <input type="text" id="your-anagram" />
        </div>
        <button className="check-anagram">
          Check
          <br />
          Anagram
        </button>
        <label className="the-answer" htmlFor="comp-anagram">
          The Answer:
        </label>
        <input type="text" id="comp-anagram" readOnly={true} />
        <p className="anagram-reaction"></p>
        <p className="desc">
          Press the button "New Anagram". Try as hard as you can. Have you
          succeded in finding anagram? (If there is more than one, type them
          with commas)
        </p>
      </div>
    );
  }
}
