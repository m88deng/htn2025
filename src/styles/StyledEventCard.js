import styled from 'styled-components';

export const StyledProjectCard = styled.div`
    padding: 1.5rem 1rem 1rem;
    min-height: 100%;
    height: 300px; /* Set a fixed height for the card */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensure content is spaced evenly */
    align-items: center; /* Center content horizontally */
    text-align: center;
    
    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px; /* Set a fixed height for the image container */
    }

    img {
        max-width: 100%;
        max-height: 100%; /* Ensure the image does not exceed the container height */
        height: auto;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        object-fit: contain; /* Ensure the image is contained within the container */
    }
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
      height: auto; /* Adjust height as needed */
      background: white; /* Ensure modal content has a background */
      border-radius: 8px; /* Optional: Add border radius */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add shadow */
      margin-top: 10rem;
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem; /* Add padding to the modal body */
    }
    .modal-content{
      width: 100%;
      height: 50vh;
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