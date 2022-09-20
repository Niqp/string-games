import React from "react";
import ReactDOM from "react-dom/client";

export class Quotes extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="quotes">
        <h2>Great quotes</h2>
        <div className="the-quote"></div>
        <button className="get-quote">New Quote</button>
        <p className="desc">
          Want another quote? Press button "New Quote". As well, you can choose
          a theme of the quote.
        </p>
      </div>
    );
  }
}
