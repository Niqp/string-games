import React, { useState } from "react";
import { getRandomInt } from "./utils/common";
import { checkWords, GameData } from "./utils/words-inside";
import { MASTER_WORDS, VOCAB } from "./vocab";

export function WordsInside() {
  const [yourWords, setYourWords] = useState("");
  const [masterWord, setMasterWord] = useState("");
  const [gameState, setGameState] = useState("write");
  const [gameData, setGameData] = useState<GameData>({
    playerWords: [],
    AIWords: [],
    playerScore: 0,
    AIScore: 0,
  });

  const handleCheckWordsButtonPress = () => {
    if (masterWord !== "" && yourWords !== "" && gameState === "write") {
      setGameState("check");
      setGameData(checkWords(yourWords, VOCAB, masterWord));
    }
  };

  const handleStartGamePress = () => {
    if (gameState === "check") {
      setGameState("write");
      const newGameData: GameData = {
        playerWords: [],
        AIWords: [],
        playerScore: 0,
        AIScore: 0,
      };
      setGameData(newGameData);
    }
    setMasterWord(MASTER_WORDS[getRandomInt(0, MASTER_WORDS.length - 1)]);
  };

  const generatePlayerWords = (gameData: GameData) => {
    const playerWords = gameData.playerWords.map((word,index) => {
      if (word.isCrossed) {
        const wordString = word.letters.reduce(
          (previousValue, currentValue) => {
            return (previousValue += currentValue.letter);
          },
          ""
        );
        return (
          <div key={index} className="crossed-word">
            {wordString} {word.points}
          </div>
        );
      } else {
        const wordArray: JSX.Element[] = [];
        word.letters.forEach((letterObj, index) => {
          if (letterObj.isRed) {
            wordArray.push(
              <span key={index} className="red-letter">{letterObj.letter}</span>
            );
          } else {
            wordArray.push(<span key={index}>{letterObj.letter}</span>);
          }
        });
        return (
          <div key={index}>
            {wordArray} {word.points}
          </div>
        );
      }
    });
    return playerWords;
  };

  const generateAIWords = (gameData: GameData) => {
    const AIWords = gameData.AIWords.map((word, index) => {
      const wordString = word.letters.reduce((previousValue, currentValue) => {
        return (previousValue += currentValue.letter);
      }, "");
      if (word.isCrossed) {
        return (
          <div key={index} className="crossed-word">
            {wordString} {word.points}
          </div>
        );
      } else {
        return (
          <div key={index}>
            {wordString} {word.points}
          </div>
        );
      }
    });
    return AIWords;
  };

  return (
    <div className="words-inside">
      <div className="col one">
        <h2>Words in Words</h2>
        <button className="start-game" onClick={handleStartGamePress}>
          Start Game
        </button>
        <label className="master-lbl">Master word:</label>
        <input
          type="text"
          className="master-word"
          readOnly={true}
          value={masterWord}
        />
        <button className="check-words" onClick={handleCheckWordsButtonPress}>
          Check the Words
        </button>
        <p className="desc">
          Press the button "Start Game". Write down as many as you can nouns
          consisting of no less than 4 letters of the master word. Press the
          button "Check the Words".
        </p>
      </div>
      <div className="col two">
        <label>Your Words</label>
        {gameState === "write" ? (
          <textarea
            className="your-words"
            onChange={(ev) => {
              if (ev.target instanceof HTMLTextAreaElement) {
                setYourWords(ev.target.value);
              }
            }}
          ></textarea>
        ) : (
          <div className="your-words">{generatePlayerWords(gameData)}</div>
        )}
        <div className="y-words-div"></div>
        <p className="your-points">{gameData?.playerScore}</p>
      </div>
      <div className="col three">
        <label>My Words</label>
        <div className="comp-words">{generateAIWords(gameData)}</div>
        <div className="c-words-div"></div>
        <p className="comp-points">{gameData?.AIScore}</p>
      </div>
    </div>
  );
}
