import styled from "styled-components";

export const StyledLoginPage = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "background"
})`
  width: 100vw;
  height: 100vh;
  overscroll-behavior: none;
  padding: 5% 10% 5% 10%;
  position: fixed;
  z-index: 1;
  top: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: var(--background-color);
  color: var(--text-color);
`;

export const StyledLoginForm = styled.form`
  width: 500px;
  height: 380px;
  padding: 2rem;
  margin-top: 125px;
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-color);
  box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);

  .error-message {
    position: absolute;
    top: 100%;
    color: red;
  }

  .error {
    border: solid 1px red;
  }

  .login-button {
    width: 100% !important;
    transition: 300ms ease;
  }

  .login-button:hover {
    background-color: var(--blue);
  }
`;