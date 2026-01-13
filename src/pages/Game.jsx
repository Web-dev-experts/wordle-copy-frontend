import { createContext, useEffect, useRef, useState } from "react";
import KeyboardDisplay from "../Features/KeyboardDisplay";
import GuessesDisplay from "../ui/GuessesDisplay";
import GamePopup from "../ui/GamePopup";
import GameLayout from "../ui/GameLayout";
import { getWord, play } from "../api/game.api";

export const GameContext = createContext();

function Game() {
  const [userWord, setUserWord] = useState([]);
  const [guessesList, setGuessesList] = useState([]);
  const [activeRow, setActiveRow] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  let userWordStr = toWordStr(userWord);
  let word = useRef("");

  useEffect(() => {
    async function startGame() {
      const game = await play();

      setGuessesList(() => game.attempts);
      setHasEnded(() => game.isFinished);
      setHasWon(() => game.isWon);

      word.current = await getWord();
    }
    startGame();
  }, []);

  function toWordStr(wordArr) {
    return wordArr.map((letterObj) => letterObj.letter).join("");
  }

  return (
    <GameContext.Provider
      value={{
        userWord,
        setUserWord,
        word,
        userWordStr,
        guessesList,
        setGuessesList,
        activeRow,
        setActiveRow,
        toWordStr,
        hasWon,
        setHasWon,
        hasEnded,
        setHasEnded,
      }}
    >
      <GameLayout>
        <GuessesDisplay />
        <KeyboardDisplay />
        {hasEnded && <GamePopup />}
      </GameLayout>
    </GameContext.Provider>
  );
}

export default Game;
