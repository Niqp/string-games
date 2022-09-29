import React, { useState, useRef } from "react";
import { checkAnagram } from "./utils/anagrams";
import { getRandomInt } from "./utils/common";
import { ANAGRAMS } from "./vocab";

export function Anagrams() {
  const [anagramInput, setAnagramInput] = useState("");
  const [currentAnagram, setCurrentAnagram] = useState("");
  const [anagramState, setAnagramState] = useState("");

  const anagramList = useRef(ANAGRAMS.slice());

  const handleAnagramInputChange = (ev: React.ChangeEvent) => {
    if (ev.target instanceof HTMLInputElement) setAnagramInput(ev.target.value);
  };

  const handleNewAnagramButtonClick = () => {
    const index = getRandomInt(0, anagramList.current.length - 1);
    setCurrentAnagram(anagramList.current[index]);
  };

  const handleCheckAnagramButtonClick = () => {
    setAnagramState(checkAnagram(anagramInput, currentAnagram));
  };

  return (
    <div className="anagrams">
      <h2>Anagrams</h2>
      <div className="flex-container">
        <button className="new-anagram" onClick={handleNewAnagramButtonClick}>
          New
          <br />
          Anagram
        </button>
        <div className="anagram-container1">
          <label className="anagram-lbl" htmlFor="anagram">
            Find anagram of:
          </label>
          <input
            type="text"
            id="anagram"
            readOnly={true}
            value={currentAnagram}
          />
        </div>
      </div>
      <div className="anagram-container2">
        <label className="your-try" htmlFor="your-anagram">
          Your try:
        </label>
        <input
          onChange={handleAnagramInputChange}
          type="text"
          id="your-anagram"
          value={anagramInput}
        />
      </div>
      <button className="check-anagram" onClick={handleCheckAnagramButtonClick}>
        Check
        <br />
        Anagram
      </button>
      <label className="the-answer" htmlFor="comp-anagram">
        The Answer:
      </label>
      <input
        type="text"
        id="comp-anagram"
        readOnly={true}
        value={anagramState}
      />
      <p className="anagram-reaction"></p>
      <p className="desc">
        Press the button "New Anagram". Try as hard as you can. Have you
        succeded in finding anagram? (If there is more than one, type them with
        commas)
      </p>
    </div>
  );
}

// меня зовут лена а тебя хлвут никита я печата. вслепую это интересно и даже почти не делаю ощтбочек тлолько немногго но я обычно и так из делаю 