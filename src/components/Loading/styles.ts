import styled from "styled-components";

export const LoadingContainer = styled.div`
display:flex;
justify-content:center;
bottom: 20px;
.spinner {
  width: 4.5rem;
  height: 4.5rem;
  border-top-color:var(--title-color);
  border-left-color: var(--title-color);

  animation: spinner 400ms linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  box-sizing: border-box;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


.spinner-large {
  width: 5rem;
  height: 5rem;
  border-width: 6px;
}

.spinner-slow {
  animation: spinner 1s linear infinite;
}

.spinner-blue {
  border-top-color: #09d;
  border-left-color: #09d;
}
`
