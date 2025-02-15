import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  padding: 10px 10%; /* Increase padding to make the navbar taller */
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  background-color: var(--header-background-color);
  transition: background-color 0.3s ease-in-out;

  &.scrolled {
    background-color: var(--header-background-color-scrolled);
  }

  .left-buttons {
    display: flex;
    gap: 10px;
  }

  .right-buttons {
    display: flex;
    gap: 10px;
  }

  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    background-color: var(--button-bg-color);
    color: var(--button-text-color);
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--button-hover-bg-color);
  }

  .theme-toggle {
    margin-left: 0;
  }
`;