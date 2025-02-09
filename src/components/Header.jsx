import { StyledHeader } from "../styles/StyledHeader";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/login");
  };
  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <button onClick={handleHomeNavigation}>Home</button>
      <button onClick={handleLoginNavigation}>Login</button>
    </StyledHeader>
  );
}
