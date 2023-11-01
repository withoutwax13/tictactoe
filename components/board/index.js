"use client";
import { useState } from "react";
import Wad from "web-audio-daw";

const saw = new Wad({ source: "sawtooth" });

// Define the Board component
export default function Board() {
  // Initialize the state for the board and the current player
  const [gameBoard, setGameBoard] = useState(
    Array(3).fill(Array(3).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Function to check for a winner
  const checkWinner = (board) => {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== null
      ) {
        return board[i][0];
      }
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== null
      ) {
        return board[0][i];
      }
    }
    // Check diagonals
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== null
    ) {
      return board[0][0];
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== null
    ) {
      return board[0][2];
    }
    // Check if all cells have been marked
    if (board.flat().every((cell) => cell !== null)) {
      // Return a special value to indicate a draw
      return "draw";
    }
    return null;
  };

  // Define the function to handle a player's move
  const handlePlayerMove = (rowIndex, columnIndex) => {
    // Only allow the move if the selected cell is empty
    if (!gameBoard[rowIndex][columnIndex]) {
      // Create a new copy of the game board
      const newGameBoard = JSON.parse(JSON.stringify(gameBoard));

      // Update the board with the current player's symbol
      newGameBoard[rowIndex][columnIndex] = currentPlayer;

      // Update the state with the new game board
      setGameBoard(newGameBoard);

      // Check for a winner
      const winner = checkWinner(newGameBoard);
      if (winner) {
        if (winner === "draw") {
          alert("The game is a draw!");
        } else {
          saw.play({
            volume: 0.8,
            wait: 0, // Time in seconds between calling play() and actually triggering the note.
            loop: false, // This overrides the value for loop on the constructor, if it was set.
            pitch: "A4", // A4 is 440 hertz.
            label: "A", // A label that identifies this note.
            env: { hold: 9001 },
            panning: [1, -1, 10],
            filter: { frequency: 900 },
            delay: { delayTime: 0.8 },
          });
          alert(`Player ${winner} has won!`);
          saw.stop();
        }
        // Reset the game
        resetGame();
        return;
      }

      // Switch to the other player
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setGameBoard(Array(3).fill(Array(3).fill(null)));
    setCurrentPlayer("X");
  };

  // Render the game board as a table
  return (
    <div className="flex justify-center mb-4">
      <button onClick={resetGame} className=" reset p-2 text-white">
        Reset Game
      </button>
      <div className="flex justify-center items-center bg-gray-200">
        <table className="table-fixed border-separate space-y-6">
          <tbody>
            {gameBoard.map((row, rowIndex) => (
              <tr key={rowIndex} className="space-x-6">
                {row.map((cell, columnIndex) => (
                  <td
                    key={columnIndex}
                    className="w-24 h-24 border-4 border-gray-600"
                  >
                    <button
                      className="w-full h-full text-4xl font-bold text-center"
                      onClick={() => handlePlayerMove(rowIndex, columnIndex)}
                    >
                      {gameBoard[rowIndex][columnIndex]}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
