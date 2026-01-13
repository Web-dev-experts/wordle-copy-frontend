import styled from "styled-components";
import AuthPage from "./AuthPage";
import { authContext } from "../Features/AuthContext";
import { useContext } from "react";
import HomePage from "./HomePage";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LandingMenu() {
  const { user } = useContext(authContext);
  return (
    <>
      <StyledContainer>{user ? <HomePage /> : <AuthPage />}</StyledContainer>
    </>
  );
}

export default LandingMenu;
