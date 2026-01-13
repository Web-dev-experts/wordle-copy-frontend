import styled from "styled-components";

const StyledGameCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 100.1vh;
  background-color: #121213;
  color: #fefefe;

  @media (max-width: 767px) {
    justify-content: space-between;
    padding: 150px 0 20px 0;
  }

  @media (max-width: 450px) {
    justify-content: center;
    padding: 0px;
    gap: 20%;
  }
`;

function GameLayout({ children }) {
  return <StyledGameCont>{children}</StyledGameCont>;
}

export default GameLayout;
