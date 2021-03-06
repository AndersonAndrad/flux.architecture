import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px open-sans, sans-serif;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
