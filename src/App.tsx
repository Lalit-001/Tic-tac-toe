import { FC, useEffect, useState } from "react";
import Square from "./Square";

const InitialGameState = ["", "", "", "", "", "", "", "", ""];
const App: FC = () => {
  const [gameState, setGameState] = useState(InitialGameState);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  useEffect(() => {
    checkForWinner();
  }, [gameState]);

  
  const resetGame = () => {
    setGameState(InitialGameState);
  };

  const handleWin = () => {
    window.alert(`congrats palyer ${currentPlayer} ! you are the winner`);
    resetGame();
  };
  const handleDraw = () => {
    window.alert("game has been draw");
    resetGame();
  };

  const checkForWinner = () => {
    let roundWon = false;
    for (let i = 0; i < winningCombos.length; i++) {
      const winCombo = winningCombos[i];
      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];
      if ([a, b, c].includes("")) {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      setTimeout(() => handleWin(), 500);
      return;
    }
    if (!gameState.includes("")) {
      setTimeout(() => handleDraw(), 500);
      return;
    }
    changePlayer();
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  };

  const handleClick = (event: any) => {
    const cellIndex = event.target.getAttribute("data-cell-index");
    const currentValue = gameState[cellIndex];
    if (currentValue) {
      return;
    }

    const newValue = [...gameState];
    newValue[cellIndex] = currentPlayer;
    setGameState(newValue);
  };

  return (
    <div className="overflow-hidden p-4 bg-gradient-to-r from-cyan-500 to-green-400 h-full text-slate-800 ">
      <h1
        className="font-bold text-3xl md:text-6xl text-center text-blue-700 mt-6 font-Lobster
  "
      >
        Tic-Tac Toe
      </h1>
      <div className="grid grid-cols-3 gap-3 mx-auto w-48 md:w-96">
        {gameState.map((player, index) => (
          <Square key={index} onClick={handleClick} {...{ index, player }} />
        ))}
      </div>
    </div>
  );
};

export default App;
