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
        max-height: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        object-fit: cover; 
    }
`;

export const StyledEventImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "background"
})`
    display: block;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    width: inherit;
    height: 280px;   
    background-image: url(${({ background }) => background});
    background-blend-mode: color;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
`;
export const StyledModalImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "background"
})`
    display: block;
    border-radius: 20px;
    width: 100%;
    height: 260px;   
    background-image: url(${({ background }) => background});
    background-blend-mode: color;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 992px) {
      display: none;
  }
`;

export const StyledEventModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 1050; 
    display: flex; 
    justify-content: center;
    align-items: center;

    .modal-dialog {
      max-width: 900px; 
      width: 70vw;
      height: 70vh; 
      max-height: 680px;
      background-color: var(--modal-bg-color);
      color: var(--modal-text-color);
      border-radius: 8px; 
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
      margin-top: 6rem;
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 100%;
      padding: 1rem; /* Add padding to the modal body */
      padding-bottom: 2rem;
      background-color: var(--modal-bg-color);
    }
    .modal-content{
      width: 100%;
      height: 100%;
    }

    .modal-body {
      max-width: 100%;
      height: auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow-y: auto; /* Enable scrolling */
      max-height: 100%; /* Prevent overflow outside the modal */
    }

    .modal-header {
      background-color: var(--modal-bg-color);
    }

    /* Specific styles for smaller screens */
    @media screen and (max-width: 583px) {
      .modal-dialog {
        width: 88vw;
        max-width: 100%; /* Use full width on small screens */
        height: auto; /* Allow height to adjust automatically */
        margin-top: 4rem;
      }

      .modal-header{
        height: 20% !important;
        background-color: var(--modal-bg-color);
      }

      .modal-body {
        max-height: 100%; /* Allow scrolling inside the body */
        padding: 0.5rem;
        padding-bottom: 1.5rem !important;
        overflow-y: auto; /* Ensure scrolling inside modal body */
      }

      /* Optional: Adjust the height of modal content if needed */
      .modal-content {
        height: 100%;
      }
      .event-related-container{
        flex-direction: column;
        row-gap: 0.5rem !important;
        justify-content: center !important;
      }   
    }
    @media screen and (max-width: 420px) {
      .modal-dialog {
        width: 88vw;
        max-width: 100%; /* Use full width on small screens */
        height: auto; /* Allow height to adjust automatically */
        margin-top: 2rem;
      }

      .modal-header{
        height: 25% !important;
        background-color: var(--modal-bg-color);
      }

      .modal-body {
        max-height: 100%; /* Allow scrolling inside the body */
        padding: 0.5rem;
      }

      /* Optional: Adjust the height of modal content if needed */
      .modal-content {
        height: 100%;
      }

      .event-related-container{
        flex-direction: column;
        row-gap: 0.5rem !important;
        justify-content: center !important;
      }   
    }

    .event-left{
      height: 260px;
    }
    .event-info{
      padding: 2rem;
      border-radius: 20px;
      background-color: var(--modal-bg-color);
    }

    .event-url{
      padding: 0.8rem;
      border-radius: 10px;
      background-color: lavender;
    }

    .event-related-container{
      display: flex;
      column-gap: 1rem;
    }

    .event-related{
      color: black;
      padding: 0.4rem 0.7rem;
      background-color: lavender;
      border-radius: 5px;
    }

    .event-related:hover{
      color: var(--blue);
      cursor: pointer;
    }

    a{
      text-decoration: none;
    }

    .event-description{
      text-align: left;
    }

    @media screen and (max-width: 768px) {
      .event-info{
        padding: 1rem;
      }
      .event-left{
        height: 100%;
        justify-content: start !important;
      }
    
    } 
`;