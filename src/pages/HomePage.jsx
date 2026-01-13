import { useContext } from 'react';
import styled from 'styled-components';
import { authContext } from '../Features/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ButtonCont, StyledAuth } from '../ui/landingComponent';
import Button from '../ui/Button';
import { logout } from '../api/auth.api';

const UserGreeting = styled.h1`
  font-size: 75px;
  font-weight: 700;
  font-family: inherit;
  width: 75%;
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 38px;
    width: 100%;
  }
`;

const ConceptParagraph = styled.p`
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

function HomePage() {
  const { user, setUser, setIsLogged } = useContext(authContext);
  let navigate = useNavigate();

  function handleBtn(page) {
    navigate(`/${page}`);
  }
  async function handleLogout() {
    await logout();
    setUser(null);
  }
  return (
    <StyledAuth>
      <UserGreeting>
        Good
        {new Date(Date.now()).getHours() > 6 &&
        new Date(Date.now()).getHours() < 12
          ? ' morning'
          : new Date(Date.now()).getHours() > 12 &&
            new Date(Date.now()).getHours() < 17
          ? ' afternoon'
          : ' night'}
        , {user?.name}
      </UserGreeting>
      <ConceptParagraph>
        Get 5 chances to guess a 5-letter word.
      </ConceptParagraph>
      <ButtonCont>
        <Button color="black" handleClick={() => handleBtn('play')}>
          Play
        </Button>
        <Button color="white" handleClick={handleLogout}>
          Log out
        </Button>
      </ButtonCont>
    </StyledAuth>
  );
}

export default HomePage;
