import { useState } from "react";

const App = () => {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [mistake, setMistakes] = useState(0);
  const mistakeLimit = 6;
  const word = "HANGMAN";
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const maskedWord = word
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  const handleClick = (input: string) => {
    if (mistake === mistakeLimit) {
      return;
    }
    if (word.includes(input)) {
      setCorrectGuesses([...correctGuesses, input]);
    } else {
      setMistakes(mistake + 1);
    }
  };

  return (
    <div>
      <p>{maskedWord}</p>
      {alphabets.map((alphabet, index) => (
        <button
          key={index}
          className={correctGuesses.includes(alphabet) ? "red" : ""}
          onClick={() => handleClick(alphabet)}
        >
          {alphabet}
        </button>
      ))}
      {!maskedWord.includes("_") && <p>You won!</p>}
      <p>Total Mistakes: {mistakeLimit}</p>
      <p>Mistakes Done: {mistake}</p>
      {mistake === mistakeLimit && <p>You Lost, the word is: {word}</p>}
    </div>
  );
};

export default App;
