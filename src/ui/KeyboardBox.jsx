import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../pages/Game";

const KeyStyling = styled.button`
  background: #b3b3b3;
  color: #ffffff;
  cursor: pointer;
  border: 2px solid #a7a5a5;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  width: 50px;
  height: 65px;

  @media (max-width: 767px) {
    width: 40px;
    height: 55px;
    font-size: 18px;
  }

  @media (max-width: 450px) {
    width: 30px;
    height: 40px;
    font-size: 14px;
  }
`;

function KeyboardBox({ children }) {
  const { userWord, setUserWord, word, userWordStr } = useContext(GameContext);
  function onKeyClick() {
    if (userWord.length >= 5) return;
    setUserWord((prev) => {
      const index = prev.length;

      let placement;

      if (!word.current.toLowerCase().includes(children.toLowerCase())) {
        placement = "Not in word";
      } else if (
        word.current[index]?.toLowerCase() === children.toLowerCase()
      ) {
        placement = "In place";
      } else {
        placement = "Not in place";
      }

      return [
        ...prev,
        {
          letter: children,
          placement,
        },
      ];
    });
  }
  return <KeyStyling onClick={onKeyClick}>{children}</KeyStyling>;
}

export default KeyboardBox;
