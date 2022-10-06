import { replaceSpecialHebrewLetter } from "./palindromes";

export const checkAnagram = (anagram: string, mainWord: string) => {
  if (anagram.length !== mainWord.length) {
    return "false";
  }
  const mainWordCopy = Array.from(mainWord).map((letter) => {
    return replaceSpecialHebrewLetter(letter);
  });
  const anagramCopy = Array.from(anagram).map((letter) => {
    return replaceSpecialHebrewLetter(letter);
  });

  for (let i = 0; i < anagramCopy.length; i++) {
    let letterIndex = mainWordCopy.indexOf(anagramCopy[i]);
    if (letterIndex === -1) {
      return "false";
    } else {
      mainWordCopy.splice(letterIndex, 1);
    }
  }
  return "true";
};
