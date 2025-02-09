import styled from "styled-components";

export const StyledLoading = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
   /* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.03);
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 12px;
  width: 1em;
  height: 1em;
  margin-top: -2em;
  -webkit-animation: spinner 2000ms infinite linear;
  -moz-animation: spinner 2000ms infinite linear;
  -ms-animation: spinner 2000ms infinite linear;
  -o-animation: spinner 2000ms infinite linear;
  animation: spinner 2000ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.45) 1.5em 0 0 0, rgba(0, 0, 0, 0.45) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.45) 0 1.5em 0 0, rgba(0, 0, 0, 0.45) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.45) 0 -1.5em 0 0, rgba(0, 0, 0, 0.45) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.45) 1.5em 0 0 0, rgba(0, 0, 0, 0.45) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.45) 0 1.5em 0 0, rgba(0, 0, 0, 0.45) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.45) -1.5em 0 0 0, rgba(0, 0, 0, 0.45) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.45) 0 -1.5em 0 0, rgba(0, 0, 0, 0.45) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

    
`