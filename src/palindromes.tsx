import React from "react";
import { getRandomInt } from "./utils/common";
import { checkPalindrome } from "./utils/palindromes";
import { palindromes } from "./vocab";

export class Palindromes extends React.Component<
  {},
  {
    palindromeInput: string;
    isAPalindrome: string;
    shadowAnimation: boolean;
  }
> {
  examplePalindromes: string[] = [];
  shadowAnimationState: NodeJS.Timeout | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      palindromeInput: "",
      isAPalindrome: "",
      shadowAnimation: false,
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
    if (length === 0) {
      this.examplePalindromes = palindromes.slice(0);
    }
    const index = getRandomInt(0, length - 1);
    this.setState({ palindromeInput: this.examplePalindromes[index] });
    this.examplePalindromes.splice(index, 1);
  }

  handleCheckPalindromePress() {
    const playAnimation = () => {
      this.setState({
        isAPalindrome: checkPalindrome(this.state.palindromeInput)
          ? "Yes!"
          : "No :(",
          shadowAnimation: true,
      });
      this.shadowAnimationState = setTimeout(() => {this.setState({shadowAnimation: false})}, 2000);
    }

    if (this.shadowAnimationState && this.state.shadowAnimation === true) {
      clearTimeout(this.shadowAnimationState);
      this.setState({
        isAPalindrome: checkPalindrome(this.state.palindromeInput)
        ? "Yes!"
        : "No :(",
        shadowAnimation: false});
        setTimeout(playAnimation,10);
        return;
    }
    playAnimation();
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
            <div className={`yes-no ` + (this.state.shadowAnimation ? 'shadow-animation' : '')}>{this.state.isAPalindrome}</div>
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
