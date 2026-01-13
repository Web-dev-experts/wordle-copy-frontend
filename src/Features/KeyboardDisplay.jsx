import styled from "styled-components";
import KeyboardBox from "../ui/KeyboardBox";
import { useContext } from "react";
import { GameContext } from "../pages/Game";
import { guess } from "../api/game.api";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const KeyboardStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const KeyboardRowStyling = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const KeyboardBtn = styled.button`
  background: #b3b3b3;
  color: #ffffff;
  cursor: pointer;
  border: 2px solid #a7a5a5;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  width: 80px;
  height: 65px;

  @media (max-width: 768px) {
    width: 36px;
    height: 48px;
    font-size: 11px;
  }

  @media (max-width: 420px) {
    width: 30px;
    height: 44px;
    font-size: 10px;
  }
`;

function KeyboardDisplay() {
  const {
    userWordObj,
    userWord,
    setUserWord,
    word,
    setGuessesList,
    guessesList,
    setHasWon,
    setActiveRow,
    setHasEnded,
  } = useContext(GameContext);

  function onDelete() {
    if (userWord.length <= 0) return;
    setUserWord((prev) => prev.slice(0, -1));
  }
  async function onEnter() {
    if (userWord.length !== 5) return;
    const guessRes = await guess(userWord);

    setGuessesList(() => guessRes.attempts);
    setHasWon(() => guessRes.isWon);
    setHasEnded(() => guessRes.isFinished);
    setActiveRow((prev) => prev + 1);
    setUserWord([]);
  }
  return (
    <KeyboardStyle>
      <KeyboardRowStyling>
        {alphabet.slice(0, 10).map((letter, i) => (
          <KeyboardBox key={i}>{letter}</KeyboardBox>
        ))}
      </KeyboardRowStyling>
      <KeyboardRowStyling>
        {alphabet.slice(10, 19).map((letter, i) => (
          <KeyboardBox key={i}>{letter}</KeyboardBox>
        ))}
      </KeyboardRowStyling>
      <KeyboardRowStyling>
        <KeyboardBtn onClick={onEnter}>ENTER</KeyboardBtn>
        {alphabet.slice(19, 25).map((letter, i) => (
          <KeyboardBox key={i}>{letter}</KeyboardBox>
        ))}
        <KeyboardBtn onClick={onDelete}>⌫</KeyboardBtn>
      </KeyboardRowStyling>
    </KeyboardStyle>
  );
}

export default KeyboardDisplay;
