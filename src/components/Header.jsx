import { StyledHeader } from "../styles/Header.styled";
import { useNavigate } from "react-router-dom";

export default function Header({ isAuthenticated, onLogout }) {
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

      {/* Conditionally render the login/logout button */}
      {!isAuthenticated ? (
        <button onClick={handleLoginNavigation}>Login</button>
      ) : (
        <button onClick={onLogout}>Logout</button>
      )}
    </StyledHeader>
  );
}
