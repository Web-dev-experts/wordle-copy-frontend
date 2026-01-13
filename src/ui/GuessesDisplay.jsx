import { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from '../Pages/Game';
import GuessDisplay from '../Features/GuessDisplay';

const StyledGuesses = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

function GuessesDisplay() {
  const { userWordStr, guessesList, activeRow } = useContext(GameContext);
  return (
    <StyledGuesses>
      {Array.from({ length: 5 }, (_, i) => {
        if (guessesList[i]) {
          return <GuessDisplay key={i}>{guessesList[i]}</GuessDisplay>;
        } else if (i === guessesList.length) {
          return <GuessDisplay key={i}>{userWordStr}</GuessDisplay>;
        } else {
          return <GuessDisplay key={i}>{''}</GuessDisplay>;
        }
      })}
    </StyledGuesses>
  );
}

export default GuessesDisplay;
