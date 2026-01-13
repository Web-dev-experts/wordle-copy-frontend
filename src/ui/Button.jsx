import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.color === "black" ? "#0e0e0e" : "#fefefe"};
  color: ${(props) => (props.color === "black" ? "#fefefe" : "#0e0e0e")};
  border: 1px solid
    ${(props) => (props.color === "black" ? "#fefefe" : "#0e0e0e")};
  padding: 13px 44px;
  font-size: 15px;
  font-weight: 900;
  border-radius: 50px;
  cursor: pointer;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    padding: 10px 28px;
    font-size: 13px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 450px) {
    padding: 10px 28px;
    font-size: 10px;
    letter-spacing: 1.5px;
  }
`;

function Button({ children, color, handleClick }) {
  return (
    <StyledButton color={color} onClick={() => handleClick && handleClick()}>
      {children}
    </StyledButton>
  );
}

export default Button;
