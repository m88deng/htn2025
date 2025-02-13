import styled from 'styled-components';

export const StyledProjectCard = styled.div`
    min-height: 100%;
    height: 370px; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    text-align: center;
    border-radius: 20px;

    .card-body{
      width: 100%;
      padding: 0;
      margin: 0;
    }
    
    img {
        max-width: 100%;
        max-height: 100%; /* Ensure the image does not exceed the container height */
        height: auto;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        object-fit: cover; /* Ensure the image is contained within the container */
    }
`;

export const StyledEventImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "background"
})`
    display: block;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    width: inherit;
    display: flex;
    justify-content: center;
    height: 280px;   
    background-image: url(${({ background }) => background});
    background-blend-mode: color;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const StyledEventModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Dimming effect */
    z-index: 1050; /* Ensures modal is on top of other content */
    display: flex; /* Flex to center content */
    justify-content: center;
    align-items: center;

    .modal-dialog {
      max-width: 75vw; /* Optional: Define a maximum width for the modal */
      width: 75vw; /* Ensure it takes up the full available width within max-width */
      height: 68vh; /* Adjust height as needed */
      background: white; /* Ensure modal content has a background */
      border-radius: 8px; /* Optional: Add border radius */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add shadow */
      margin-top: 6rem;
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 100%;
      padding: 1rem; /* Add padding to the modal body */
    }
    .modal-content{
      width: 100%;
      height: 100%;
    }

    .modal-body img {
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .fade-enter {
    opacity: 0;
    }
    .fade-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in-out;
    }
    .fade-exit {
      opacity: 1;
    }
    .fade-exit-active {
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }

    .modal-fade-enter {
      opacity: 0;
    }
    .modal-fade-enter-active {
      opacity: 1;
      transition: opacity 300ms;
    }
    .modal-fade-exit {
      opacity: 1;
    }
    .modal-fade-exit-active {
      opacity: 0;
      transition: opacity 300ms;
    }
`;