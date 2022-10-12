import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* font size */
    --font-size-s: 14px;
    --font-size-m: 15px;
    --font-size-l: 16px;

    /* color */
    --base-blue: 216, 60%;
    --base-black: 0, 0%;
    --base-white: 255, 0%;

    --color-blue-light: hsla(var(--base-blue), 55%, 90%);
    --color-blue: hsla(var(--base-blue), 40%, 100%);
    --color-white: hsla(var(--base-white), 98%, 100%);

    --border-color-dark: hsla(var(--base-black), 70%, 100%);
    --border-color: hsla(var(--base-black), 80%, 100%);
    --border-color-light: hsla(var(--base-black), 90%, 100%);

    --primary-colors: 245, 30%;
    --primary-color: rgb(29, 27, 49);
    --primary-color: hsla(var( --base-black), 15%, 100%);
    --primary-color-light: hsla(var( --base-black), 19%, 100%);
    --primary-text: rgb(33, 33, 33);

    --accent-color: rgb(83, 109, 254);    
    --text-color: rgb(255, 255, 255);
    --text-sub-color: rgb(117, 117, 117);
    --divider-color: rgb(189, 189, 189);

    --gray-color: rgb(245, 245, 245);
    --gray-color-light: rgb(250, 250, 250);
    --gray-color-dark: rgb(240, 240, 240);

    --shadow-color: rgb(155, 155, 155, 0.2);
    --shadow-color-dark: rgb(180, 180, 180, 0.3);
    --shadow-color-white: rgb(255, 255, 255, 0.3);

  }

  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 300;
    src: url("../src/assets/fonts/NanumGothicLight.woff2") format('font-woff2'),
    url("../src/assets/fonts/NanumGothicLight.woff") format('font-woff'),
    url("../src/assets/fonts/NanumGothicLight.otf") format('otf')
  }

  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: normal;
    src: url("../src/assets/fonts/NanumGothic.woff2") format('font-woff2'),
    url("../src/assets/fonts/NanumGothic.woff") format('font-woff'),
    url("../src/assets/fonts/NanumGothic.otf") format('otf')
  }

  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: bold;
    src: url("../src/assets/fonts/NanumGothicBold.woff2") format('font-woff2'),
    url("../src/assets/fonts/NanumGothicBold.woff") format('font-woff'),
    url("../src/assets/fonts/NanumGothicBold.otf") format('otf')
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: 'Nanum Gothic';
    font-size: 100%;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none
  }
`;

export default GlobalStyle;
