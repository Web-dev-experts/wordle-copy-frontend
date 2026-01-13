import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonCont, StyledAuth } from '../ui/landingComponent';

function AuthPage() {
  let navigate = useNavigate();
  function handleBtn(page) {
    navigate(`/${page}`);
  }
  return (
    <StyledAuth>
      <ButtonCont>
        <Button color="black" handleClick={() => handleBtn('signup')}>
          Sign up
        </Button>
        <Button color="white" handleClick={() => handleBtn('login')}>
          Log in
        </Button>
      </ButtonCont>
    </StyledAuth>
  );
}

export default AuthPage;
