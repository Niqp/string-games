import React from "react";
import { getRandomInt } from "./utils/common";
import { checkPalindrome } from "./utils/palindromes";
import { palindromes } from "./vocab";

export class Palindromes extends React.Component<
  {},
  {
    palindromeInput: string;
    isAPalindrome: string;
  }
> {
  examplePalindromes: string[] = [];
  constructor(props: {}) {
    super(props);
    this.state = {
      palindromeInput: "",
      isAPalindrome: "",
    };
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleCheckPalindromePress =
      this.handleCheckPalindromePress.bind(this);
    this.handleExamplePalindromePress =
      this.handleExamplePalindromePress.bind(this);
  }

  handleTextAreaChange(ev: React.ChangeEvent) {
    if (ev.target instanceof HTMLTextAreaElement) {
      this.setState({ palindromeInput: ev.target.value });
    }
  }

  handleExamplePalindromePress() {
    const length = this.examplePalindromes.length;
    console.log(length);
    if (length === 0) {
      this.examplePalindromes = palindromes.slice(0);
    }
    const index = getRandomInt(0, length - 1);
    this.setState({ palindromeInput: this.examplePalindromes[index] });
    this.examplePalindromes.splice(index,1);
  }

  handleCheckPalindromePress() {
    this.setState({isAPalindrome: checkPalindrome(this.state.palindromeInput) ? 'Yes!' : 'No :('})
    console.log(checkPalindrome(this.state.palindromeInput));
    checkPalindrome(this.state.palindromeInput);
  }

  render() {
    return (
      <div className="palindromes">
        <h2>Palindromes</h2>
        <div className="pali-container">
          <textarea
            value={this.state.palindromeInput}
            className="the-palindrome"
            onChange={this.handleTextAreaChange}
          ></textarea>
          <div className="pali-container2">
            <button
              onClick={this.handleExamplePalindromePress}
              className="get-palindrome"
            >
              Palindrome
              <br />
              Example
            </button>
            <button
              onClick={this.handleCheckPalindromePress}
              className="is-palindrome"
            >
              Is this
              <br />a Palindrome?
            </button>
            <div className="yes-no">{this.state.isAPalindrome}</div>
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
