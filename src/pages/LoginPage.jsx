import { useContext, useState } from "react";
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledInputField,
  StyledLabel,
  StyledSubmit,
} from "../ui/formComponents";
import { login } from "../api/auth.api";
import { authContext } from "../Features/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "../../../Back-end/utils/toast";

function LoginPage() {
  const { setUser } = useContext(authContext);

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await login(emailInput, passwordInput);
      if (!data) return;
      setUser(data);
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.show("error", err.message || " Failed to login");
    }
  }
  return (
    <StyledContainer>
      <StyledHeader>Log in to your account</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
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
        <StyledSubmit type="submit" value="Log in" />
      </StyledForm>
    </StyledContainer>
  );
}

export default LoginPage;
