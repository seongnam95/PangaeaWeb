import { createGlobalStyle, css } from 'styled-components';

interface styleTypeProps {
  darkMode?: boolean;
  animation?: boolean;
}

const GlobalStyle = createGlobalStyle<styleTypeProps>`
  :root {
    ${({ darkMode }) =>
      darkMode &&
      css`
        --nav-color: var(--gray-900);
        --nav-color-accent: var(--gray-850);
        --nav-text: var(--gray-200);

        --primary-base: 208, 80%;
        --primary-color: hsla(var(--primary-base), 52%, 100%);
        --primary-color-light: hsla(var(--primary-base), 30%, 30%);
      `}

    ${({ darkMode }) =>
      !darkMode &&
      css`
        --nav-base: 0, 0%;
        --nav-color: hsla(var(--nav-base), 15%, 100%);
        --nav-color-light: hsla(var(--nav-base), 30%, 30%);
        --nav-text: hsla(var(--nav-base), 95%, 100%);

        --primary-base: 199, 95%;
        --primary-color: hsla(var(--primary-base), 31%, 100%);
        --primary-color-light: hsla(var(--base-black), 55%, 100%);
      `}

    /* Shadow */
    --shadow-gray-base: 155, 155, 155;

    // Gray
    --shadow-gray-100: 0 1px 2px rgb(var(--shadow-gray-base), 0.2);
    --shadow-gray-200: 0 2px 4px rgb(var(--shadow-gray-base), 0.2);
    --shadow-gray-300: 0 3px 6px rgb(var(--shadow-gray-base), 0.2);
    --shadow-gray-400: 0 4px 8px rgb(var(--shadow-gray-base), 0.2);
    --shadow-gray-500: 0 5px 12px rgb(var(--shadow-gray-base), 0.2);
    --shadow-gray-600: 0 6px 16px rgb(var(--shadow-gray-base), 0.2);
    --shadow-gray-700: 0 7px 24px rgb(var(--shadow-gray-base), 0.2);
    --shadow-gray-800: 0 8px 32px rgb(var(--shadow-gray-base), 0.2);

    // Primary
    

    /* Font Size */
    font-size: 10px;

    --font-size-xs: 1.3rem;
    --font-size-s: 1.4rem;
    --font-size-m: 1.5rem;
    --font-size-l: 1.6rem;
    --font-size-xl: 1.7rem;
    --font-size-2xl: 1.8rem;

    /* System Colors */
    --white: #fff;

    // Gray
    --gray-100: #F5F5F5;
    --gray-200: #EEEEEE;
    --gray-300: #E0E0E0;
    --gray-400: #BDBDBD;
    --gray-500: #9E9E9E;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-850: #333333;
    --gray-900: #212121;

    // Indigo
    --indigo-50: #E8EAF6;
    --indigo-100: #C5CAE9;
    --indigo-200: #9FA8DA;
    --indigo-300: #7986CB;
    --indigo-400: #5C6BC0;
    --indigo-500: #3F51B5;
    --indigo-600: #3949AB;
    --indigo-700: #303F9F;
    --indigo-800: #283593;
    --indigo-900: #1A237E;

    --indigo-a100: #8C9EFF;
    --indigo-a200: #536DFE;
    --indigo-a400: #3D5AFE;
    --indigo-a700: #304FFE;

    /* Animation */
    ${({ animation }) =>
      animation &&
      css`
        --ease-in-out-2: 0.2s ease-in-out;
        --ease-in-out-3: 0.3s ease-in-out;
        --ease-in-out-35: 0.35s ease-in-out;
      `}
  }

  /* Font */
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 300;
    src: url("../src/assets/fonts/NanumGothicLight.woff2") format('font-woff2'),
    url("../src/assets/fon/*  */ts/NanumGothicLight.woff") format('font-woff'),
    url("../*  *//src/assets/fonts/NanumGothicLight.otf") format('otf')
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
    font-family: 'GothicA1';
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
  html {
    height: 100vh;
    width: 100vw;
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
