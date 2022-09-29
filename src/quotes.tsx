import React, { useState, useRef } from "react";
import { getRandomInt } from "./utils/common";
import { QUOTES } from "./vocab";
import parse from "html-react-parser";


export function Quotes() {
  const [currentQuote, setCurrentQuote] = useState<
  string | JSX.Element | JSX.Element[]
  >();
  let quoteArray = useRef(QUOTES.slice());

  const handleNewQuoteButtonPress = () => {
    if (quoteArray.current.length < 1) {
      quoteArray.current = QUOTES.slice();
    }
    const randomIndex = getRandomInt(0, quoteArray.current.length - 1);
    const parsedQuote = parse(quoteArray.current[randomIndex]);
    setCurrentQuote(parsedQuote);
    quoteArray.current.splice(randomIndex, 1);
  };

  return (
    <div className="quotes">
      <h2>Great quotes</h2>
      <div className="the-quote">{currentQuote}</div>
      <button className="get-quote" onClick={handleNewQuoteButtonPress}>
        New Quote
      </button>
      <p className="desc">
        Want another quote? Press button "New Quote". As well, you can choose a
        theme of the quote.
      </p>
    </div>
  );
}
