import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLoginForm } from "../styles/Login.styled";

export function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      formRef.current.reset();
      console.log("Logged in");
      navigate("/");
    } else {
      onLogin(false);
      console.log("Invalid credentials");
    }
  };

  return (
    <StyledLoginForm ref={formRef}>
      <div>
        <h1 className="h3">Login to your account</h1>
      </div>

      <div>
        <div>
          <input
            id="email"
            type="text"
            className="form-control"
            placeholder="Username"
            required
            value={username}
            onChange={handleUsername}
          />
        </div>

        <div>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={handlePassword}
          />
        </div>

        <button className="mt-3" type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </StyledLoginForm>
  );
}
