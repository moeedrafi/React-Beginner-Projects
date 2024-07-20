import { useState } from "react";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
  winning?: boolean;
}

const Square = ({ value, onSquareClick, winning = false }: SquareProps) => {
  return (
    <button
      onClick={onSquareClick}
      className={`bg-white px-2 border font-bold leading-8 w-10 h-10 ${
        winning ? "bg-green-200" : ""
      }`}
    >
      {value}
    </button>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }

  return null;
};

const Board = ({ squares, xIsNext, onPlay }) => {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, i);
  };

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo[0] : null;
  const winningLine = winnerInfo ? winnerInfo[1] : [];
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Player: " + (xIsNext ? "X" : "O");
  }

  const boardLength = 3;
  const boardRows = [...Array(boardLength).keys()].map((row) => {
    const boardCols = [...Array(boardLength).keys()].map((col) => {
      const i = boardLength * row + col;

      return (
        <Square
          key={i}
          value={squares[i]}
          onSquareClick={() => handleClick(i)}
          winning={winningLine.includes(i)}
        />
      );
    });

    return (
      <div key={row} className="grid grid-cols-3">
        {boardCols}
      </div>
    );
  });

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p className="mb-3">{status}</p>
      {boardRows}
    </div>
  );
};

const Game = () => {
  const [ascending, setAscending] = useState(true);
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), index: -1 },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;
  const displayOrder = ascending ? "Ascending" : "Descending";

  const toggleDisplay = () => {
    setAscending(!ascending);
  };

  const handlePlay = (nextSquares, i) => {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, index: i },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((turnInfo, move) => {
    let description;
    if (move > 0) {
      const row = Math.floor(turnInfo.index / 3);
      const col = turnInfo.index % 3;
      const symbol = turnInfo.index % 2 === 0 ? "X" : "O";
      description =
        "Go to move #" + move + " - " + symbol + "(" + row + ", " + col + ")";
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        {move === currentMove ? (
          <>you are at #{move}</>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <button onClick={toggleDisplay}>{displayOrder}</button>
        <ol className="bg-gray-500">
          {ascending ? moves : moves.slice().reverse()}
        </ol>
      </div>
    </div>
  );
};

export default Game;
