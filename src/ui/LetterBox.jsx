import styled from "styled-components";

const StyledLetterBox = styled.div`
  background: ${(props) => {
    switch (props.placement) {
      case "Not in word":
        return "#787c7e";
      case "Not in place":
        return "#c9b458";
      case "In place":
        return "#6aaa64";
      case "Empty":
        return "#121213";
      default:
        break;
    }
  }};

  border: 2px solid
    ${(props) => {
      switch (props.placement) {
        case "Not in word":
          return "#35353a";
        case "Not in place":
          return "#c9b458";
        case "In place":
          return "#6aaa64";
        case "Empty":
          return "#787c7e";
        default:
          break;
      }
    }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  width: 80px;
  height: 80px;

  @media (max-width: 767px) {
    width: 55px;
    height: 55px;
    font-size: 22px;
  }
`;

function LetterBox({ children, placement }) {
  return <StyledLetterBox placement={placement}>{children}</StyledLetterBox>;
}

export default LetterBox;
