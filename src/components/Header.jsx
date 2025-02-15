import { useEffect, useState } from "react";
import { StyledHeader } from "../styles/Header.styled";
import { useNavigate } from "react-router-dom";

export default function Header({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const handleLoginNavigation = () => {
    navigate("/login");
  };
  const handleHomeNavigation = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader className={scrolled ? "scrolled" : ""}>
      <button onClick={handleHomeNavigation}>Home</button>

      {!isAuthenticated ? (
        <button onClick={handleLoginNavigation}>Login</button>
      ) : (
        <button onClick={onLogout}>Logout</button>
      )}
    </StyledHeader>
  );
}
