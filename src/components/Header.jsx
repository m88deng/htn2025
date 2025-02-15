import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { StyledHeader } from "../styles/Header.styled";
import { useNavigate } from "react-router-dom";

export default function Header({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
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
      <div className="left-buttons">
        <button onClick={handleHomeNavigation}>Home</button>
      </div>
      <div className="right-buttons">
        {!isAuthenticated ? (
          <button onClick={handleLoginNavigation}>Login</button>
        ) : (
          <button onClick={onLogout}>Logout</button>
        )}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </StyledHeader>
  );
}
