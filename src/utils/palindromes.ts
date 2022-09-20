export const checkPalindrome = (palindrome: string) => {
  const HEBREW_ENDINGS: { [key: string]: string } = {
    ך: "כ",
    ם: "מ",
    ן: "נ",
    ץ: "צ",
  };

  function isLetter(char: string) {
    return (
      (char < "z" && char > "A") ||
      (char < "я" && char > "А") ||
      (char > String.fromCharCode(1488) && char < String.fromCharCode(1514))
    );
  }

  function replaceSpecialHebrewLetter(str: string) {
    return HEBREW_ENDINGS[str] || str;
  }

  let i = 0;
  let j = palindrome.length - 1;

  while (i < j) {
    if (!isLetter(palindrome[i])) {
      i++;
      continue;
    }
    if (!isLetter(palindrome[j])) {
      j--;
      continue;
    }

    if (
      replaceSpecialHebrewLetter(palindrome[i]).toLowerCase() !==
      replaceSpecialHebrewLetter(palindrome[j]).toLowerCase()
    ) {
      return false;
    }

    i++;
    j--;

    return true;
  }
};
