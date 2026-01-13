import { useContext } from 'react';
import LetterBox from '../ui/LetterBox';
import GuessDisplayStyling from '../ui/GuessDisplayStyling';
import { GameContext } from '../Pages/Game';

function GuessDisplay({ children }) {
  const { userWord, guessesList, userWordStr } = useContext(GameContext);
  return (
    <GuessDisplayStyling>
      {children && guessesList && guessesList.includes(children)
        ? children.map((letter, i) => (
            <LetterBox
              placement={
                guessesList.includes(children) ? letter.placement : 'Empty'
              }
              key={i}
            >
              {letter.letter}
            </LetterBox>
          ))
        : Array.from({ length: 5 }, (_, i) =>
            userWord[i] && children && children.split('')[i] ? (
              <LetterBox
                placement={
                  guessesList.includes(children)
                    ? userWord[i].placement
                    : 'Empty'
                }
                key={i}
              >
                {children.split('')[i]}
              </LetterBox>
            ) : (
              <LetterBox placement="empty" key={i}></LetterBox>
            )
          )}
    </GuessDisplayStyling>
  );
}

export default GuessDisplay;
