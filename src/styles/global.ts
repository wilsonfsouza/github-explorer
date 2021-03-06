import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *, body, input, button {
    transition: color .25s ease-out;
  }
  body {
    background: ${props =>
    props.theme.colors.background} url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smothing: antialiased;
  }
  body, input, button {
    font-size: ${props => props.theme.fonts.size};
    font-family: ${props => props.theme.fonts.paragraph};
  }
  button {
    cursor: pointer;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
