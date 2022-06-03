import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --title-color: #52525B;
    --shadow-color: 286deg 09% 58%;
    --shadow-elevation-low:
      0px 0.6px 0.7px hsl(var(--shadow-color) / 0.34),
      0px 1px 1.1px -1.3px hsl(var(--shadow-color) / 0.33),
      0px 2.3px 2.6px -2.6px hsl(var(--shadow-color) / 0.32);
    --shadow-elevation-medium:
    0px 0.6px 0.7px hsl(var(--shadow-color) / 0.27),
    0px 2.7px 3px -0.4px hsl(var(--shadow-color) / 0.27),
    0.1px 5px 5.6px -0.7px hsl(var(--shadow-color) / 0.26),
    0.1px 8.2px 9.1px -1.1px hsl(var(--shadow-color) / 0.26),
    0.2px 13.1px 14.5px -1.5px hsl(var(--shadow-color) / 0.26),
    0.3px 20.6px 22.9px -1.9px hsl(var(--shadow-color) / 0.26),
    0.5px 31.4px 34.9px -2.2px hsl(var(--shadow-color) / 0.25),
    0.7px 46.2px 51.3px -2.6px hsl(var(--shadow-color) / 0.25);
    --shadow-elevation-high:
      0px 0.6px 0.7px hsl(var(--shadow-color) / 0.33),
      0px 3.2px 3.6px -0.4px hsl(var(--shadow-color) / 0.32),
      0.1px 5.9px 6.5px -0.7px hsl(var(--shadow-color) / 0.32),
      0.1px 9.8px 10.9px -1.1px hsl(var(--shadow-color) / 0.32),
      0.2px 15.7px 17.4px -1.5px hsl(var(--shadow-color) / 0.31),
      0.4px 24.7px 27.4px -1.9px hsl(var(--shadow-color) / 0.31),
      0.6px 37.7px 41.9px -2.2px hsl(var(--shadow-color) / 0.31),
      0.8px 55.7px 61.8px -2.6px hsl(var(--shadow-color) / 0.31);
  }


  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
    transition: background 300ms ease-in-out;
  }

  html.dark{
    --shadow-color: 0;

    .map{
      background-color: #1F1F1F;
    }

    --title-color: #fff;
  }

  html,
  body {
    height: 100%;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar{
    width: 1px;
    height: 1px;
  }


  body {

    color: #222;
  }



  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  input ,
  select {
    appearance: none;
  }

  ul {
    list-style: none;
  }

  .infinite-scroll-component{
    overflow: unset !important;
  }
`
