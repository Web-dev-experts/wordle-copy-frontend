import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

export const StyledForm = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #121213;
  font-size: 20px;
  outline: none;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledSubmit = styled.input`
  width: 50%;
  background-color: #121213;
  color: #fefefe;
  padding: 10px 20px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 700;
`;

export const StyledHeader = styled.h1`
  font-size: 42px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
