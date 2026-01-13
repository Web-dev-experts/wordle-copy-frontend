import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledInputField,
  StyledLabel,
  StyledSubmit,
} from '../ui/formComponents';
import { signup } from '../api/auth.api';
import { authContext } from '../Features/AuthContext';

function SignupPage() {
  const { setUser } = useContext(authContext);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordInput !== confirmPasswordInput) {
      alert('Passwords do not match');
      return;
    }
    const user = await signup({
      name: nameInput,
      email: emailInput,
      password: passwordInput,
      confirmPassword: confirmPasswordInput,
    });
    setUser(user);
    navigate('/login');
  }
  return (
    <StyledContainer>
      <StyledHeader>Create a new account</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputField>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(() => e.target.value)}
          />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(() => e.target.value)}
          />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(() => e.target.value)}
          />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel>Confirm password</StyledLabel>
          <StyledInput
            type="text"
            value={confirmPasswordInput}
            onChange={(e) => setConfirmPasswordInput(() => e.target.value)}
          />
        </StyledInputField>
        <StyledSubmit type="submit" value="Sign up" />
      </StyledForm>
    </StyledContainer>
  );
}

export default SignupPage;
