import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    padding: 5px 10% 5px; /* Reduce padding to decrease height */
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; /* Center align items vertically */
    z-index: 20;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;

    &.scrolled {
        background-color: var(--white);
    }

    button {
        margin: 0 10px; /* Add margin to buttons */
        padding: 10px 20px; /* Add padding to buttons */
        border: none;
        background-color: var(--button-bg-color);
        color: var(--button-text-color);
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        font-weight: 600;
    }

    button:hover {
        background-color: var(--button-hover-bg-color);
        color: var(--blue);
    }
`;