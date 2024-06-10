import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../img/fond.png';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: url(${backgroundImage}),linear-gradient(39deg, #FFD5B6 0%, #72076A 100%);
    background-size: cover;
  }
 
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }


`;

export default GlobalStyles;
