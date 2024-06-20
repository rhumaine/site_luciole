import { createGlobalStyle } from 'styled-components';
import { keyframes } from 'styled-components';
import backgroundImage from '../img/fond.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fredoka', cursive;
    background: url(${backgroundImage}),linear-gradient(39deg, #FFA7A7 0%, #FD8686 100%);
    background-size: contain;
    background-position: center, 0% 0%;
    font-size: 22px;

    @media (max-width : 768px){
      font-size:18px;
    }
  }
 
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  .title-section{
    margin: 20px auto;
    color: #320F13;
    font-family: 'Fredoka', sans-serif;
    font-size: 1.55em;
    line-height: 1.75;
    font-weight: 500;
    text-align: center;
    animation: ${fadeIn} 1s ease-in-out forwards;
  }

`;



export default GlobalStyles;
