import styled, { createGlobalStyle } from 'styled-components';
import UniqloPro from '../assets/fonts/UniqloPro.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: UniqloPro;
  src: url(${UniqloPro}) format('truetype');
  font-style: normal;
  font-weight: 100;
}

div {
  border-style: solid;
  border-width: 2px;
  border-color: black;
}
`;

export const StyledP = styled.p`
  color: blue;
  font-family: UniqloPro;
`;

export const WriteRevBox = styled.div`
  height: 137px;
  width: 260px;
  text-transform: uppercase;
  font-family: DIN Next W01 Regular;
`;

// module.exports = {
//   GlobalStyle,
//   StyledP,
// };
