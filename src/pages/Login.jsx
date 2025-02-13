import { LoginForm } from "../components/LoginForm";
import { StyledLoginPage } from "../styles/Login.styled";
import picture from "../assets/tree.png";

export default function Login({ onLogin }) {
  return (
    <StyledLoginPage background={picture}>
      <LoginForm onLogin={onLogin} />
    </StyledLoginPage>
  );
}
