import styled from "styled-components";

const StyledWD = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

function GuessDisplayStyling({ children }) {
  return <StyledWD>{children}</StyledWD>;
}

export default GuessDisplayStyling;
