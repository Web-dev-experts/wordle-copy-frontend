import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GameContext } from "../pages/Game";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import winner from "../public/winner.png";
import loser from "../public/loser.png";
import { getWord } from "../api/game.api";

const DisabledBack = styled.div`
  width: 100%;
  height: 100vh;
  background: #000000ba;
  backdrop-filter: blur(10px);
  cursor: not-allowed;
  display: flex;
  justify-content: center;
  z-index: 1;
  align-items: center;
  position: absolute;
  top: 0;
`;

const GamePopupStyled = styled.div`
  background-color: #121213;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  top: 17%;
  padding: 20px 50px;
  height: 60%;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px;
    gap: 20px;
  }
`;

const GameImg = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

const GameHeader = styled.h1`
  font-size: 50px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const PopupParagraph = styled.p`
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const WordleStyling = styled.h1`
  font-size: 60px;
  font-weight: 900;
  letter-spacing: 13.1px;
  text-transform: uppercase;
  font-family: "BBH Hegarty", sans-serif;

  @media (max-width: 768px) {
    font-size: 36px;
    letter-spacing: 6px;
  }
`;

function GamePopup() {
  const {
    hasWon,
  } = useContext(GameContext);
  const navigate = useNavigate();
  const [wordle, setWordle] = useState("");

  useEffect(() => {
    async function fetch() {
      const res = await getWord();
      setWordle(() => res);
    }
    fetch();
  }, []);

  function handleBack() {
    navigate("/");
  }
  return (
    <>
      <DisabledBack />
      <GamePopupStyled>
        {hasWon ? (
          <>
            <GameImg src={winner} />
            <GameHeader>Congratulations!</GameHeader>
            <PopupParagraph>You've guessed the word:</PopupParagraph>
            <WordleStyling>{wordle}</WordleStyling>
          </>
        ) : (
          <>
            <GameImg src={loser} />
            <GameHeader>You've lost!</GameHeader>
            <PopupParagraph>The wordle was:</PopupParagraph>
            <WordleStyling>{wordle}</WordleStyling>
          </>
        )}
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Button color="white" handleClick={handleBack}>
            Back to menu &larr;
          </Button>
        </div>
      </GamePopupStyled>
    </>
  );
}

export default GamePopup;
