import Square from "../Square/Square";
import { useState } from "react";
import s from "./Board.module.css";
const Board = () => {
  const [cells, setCell] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (cells[index] === null && !winner) {
      const newCell = cells.slice();
      newCell[index] = player;
      setCell(newCell);
      setPlayer(player === "X" ? "O" : "X");

      const newWinner = calculateWinner(newCell);
      if (newWinner) {
        setWinner(newWinner);
      }
    }
  };

  const calculateWinner = (cells) => {
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
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    if (cells.every((cell) => cell !== null)) {
      return "draw";
    }
    return null;
  };

  return (
    <>
      <div className={s.player}>
        Player <span>{player}</span> turn
      </div>
      <div className={s.wrapper}>
        {cells.map((value, index) => {
          return (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          );
        })}
        {winner && <div>Winner: {winner}</div>}
        <button
          className={s.reset}
          onClick={() => {
            setCell(Array(9).fill(null));
            setWinner();
            setPlayer("X");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Board;
