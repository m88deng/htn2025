import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLoginForm } from "../styles/Login.styled";

export function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      username === import.meta.env.VITE_USERNAME &&
      password === import.meta.env.VITE_PASSWORD
    ) {
      onLogin(true);
      setShowError(false);
      formRef.current.reset();
      console.log("Logged in");
      navigate("/");
    } else {
      setShowError(true);
      console.log("Invalid credentials");
    }
  };

  return (
    <StyledLoginForm ref={formRef}>
      <div>
        <h1 className="h3 text-center">Login to your account</h1>
      </div>

      <p className="small mt-3 text-center">Login to see all private events.</p>
      <div>
        <div>
          <input
            id="email"
            type="text"
            className={`form-control mt-3 ${showError ? "error" : ""}`}
            placeholder="Username"
            required
            value={username}
            onChange={handleUsername}
          />
        </div>

        <div className="position-relative text-center">
          <input
            id="password"
            type="password"
            className={`form-control mt-2 ${showError ? "error" : ""}`}
            placeholder="Password"
            required
            value={password}
            onChange={handlePassword}
          />
          {showError && (
            <div className="error-message mt-1">
              <p className="small">Invalid username or password</p>
            </div>
          )}
        </div>

        <div className="text-center mt-3">
          <button
            className="mt-3 login-button"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </StyledLoginForm>
  );
}
