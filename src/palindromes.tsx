import React from "react";
import ReactDOM from "react-dom/client";

export class Palindromes extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="palindromes">
        <h2>Palindromes</h2>
        <div className="pali-container">
          <textarea className="the-palindrome"></textarea>
          <div className="pali-container2">
            <button className="get-palindrome">
              Palindrome
              <br />
              Example
            </button>
            <button className="is-palindrome">
              Is this
              <br />a Palindrome?
            </button>
            <div className="yes-no">Yes!</div>
          </div>
        </div>
        <p className="desc">
          Palindromes are the lines that being read the same both forward and in
          the reverse direction. Enter your line and press the "check" button to
          check if it is a palindrome. Press the "example" button to see random
          palindrome example.
        </p>
      </div>
    );
  }
}
