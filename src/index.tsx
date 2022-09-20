import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Palindromes } from "./palindromes";
import { Clock } from "./clock";
import { Gematria } from "./gematria";
import { WordsInside } from "./words-inside";
import { Quotes } from "./quotes";
import { Anagrams } from "./anagrams";

class Dashboard extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="dashboard">
        <Palindromes />
        <Clock />
        <Gematria />
        <WordsInside />
        <Quotes />
        <Anagrams />
      </section>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Dashboard />);
