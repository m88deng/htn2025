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
    background-color: var(--white);

    
`;

export const StyledLoginForm = styled.form`
    width: 500px;
    height: 380px;
    padding: 4em;
    margin-top: 125px;
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    border-radius: 20px; 

    box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);    
`;