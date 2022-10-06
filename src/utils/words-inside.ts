type Word = {
  letters: { letter: string; isRed: boolean }[];
  points: number;
  isCrossed: boolean;
};

const makeRedLetters = (word: string, masterWord: string) => {
  let redactedWord: Word = {
    letters: [],
    points: 0,
    isCrossed: false,
  };
  let containsRedLetters: boolean = false;
  const masterWordCopy = [...Array.from(masterWord)];
  if (word.length < 4) {
    Array.from(word).forEach((letter) => {
      redactedWord.letters.push({
        letter,
        isRed: true,
      });
    });
    return redactedWord;
  }
  for (let i = 0; i < word.length; i++) {
    let letterIndex = masterWordCopy.indexOf(word[i]);
    if (letterIndex === -1) {
      redactedWord.letters.push({ letter: word[i], isRed: true });
      containsRedLetters = true;
    } else {
      masterWordCopy.splice(letterIndex, 1);
      redactedWord.letters.push({ letter: word[i], isRed: false });
      redactedWord.points++;
    }
  }
  if (containsRedLetters === true) {
    redactedWord.points = 0;
  }
  return redactedWord;
};

export type GameData = {
  playerWords: Word[];
  AIWords: Word[];
  playerScore: number;
  AIScore: number;
};

export const checkWords = (
  words: string,
  vocab: string[],
  masterWord: string
) => {
  const wordsArray = words.split(/\s/);
  const gameData: GameData = {
    playerWords: [],
    AIWords: [],
    playerScore: 0,
    AIScore: 0,
  };
  const currentVocab = vocab.slice(0);
  wordsArray.forEach((word) => {
    const wordObj = makeRedLetters(word, masterWord);

    let isInVocab = false;
    let vocabIndex = -1;
    currentVocab.forEach((vocabWord, index) => {
      if (word === vocabWord) {
        isInVocab = true;
        vocabIndex = index;
        return;
      }
    });

    if (isInVocab) {
      wordObj.isCrossed = true;
      gameData.playerWords.push(wordObj);
      gameData.AIWords.push(wordObj);
      currentVocab.splice(vocabIndex, 1);
    } else {
      gameData.playerWords.push(wordObj);
      gameData.playerScore += wordObj.points;
    }
  });
  const restOfVocab = currentVocab.map((word) => {
    const newWord: Word = {
      letters: [],
      points: 0,
      isCrossed: false,
    };
    Array.from(word).forEach((letter) => {
      newWord.letters.push({ letter, isRed: false });
      newWord.points++;
      gameData.AIScore++;
    });
    return newWord;
  });
  gameData.AIWords = gameData.AIWords.concat(restOfVocab);
  return gameData;
};
