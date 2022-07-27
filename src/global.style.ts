import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'SpoqaHanSansNeo',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  #root{
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: auto;
    &::-webkit-scrollbar {
    display: none;
    }
  }

  * {
    box-sizing: border-box;
    --primary-purple:#6732ff; /* main1 */
    --primary-mint: #62fee2; /* main2 */
    --purple-sub01:#f1edff;
    --purple-sub02:#ac8eff;
    --gray-01:#f3f2f4;
    --gray-02:#d4d2d9;
    --gray-03:#adacb1;
    --gray-04:#565658;
    --gray-00:#f9f9f9;
    --black:#101010;
    --error:#ff0000;
    --bg:#f9f9f9;
    --bg-linear01: linear-gradient(132.6deg, #E2DCFA 37.18%, #F0EDFA 73.49%, #F2EFFA 98.19%);
    --bg-linear02:linear-gradient(180deg, rgba(103, 50, 255, 0.12) 0%, rgba(235, 235, 235, 0) 190.21%);
    --bg-linear03:linear-gradient(180deg, rgba(227, 227, 255, 0.6) 0%, rgba(227, 227, 255, 0) 112.34%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    font-family:'SpoqaHanSansNeo';
  }

  pre{
    margin:0;
    font-family:'SpoqaHanSansNeo';
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;
  }

  hr {
    border: 0.5px solid #D4D2D9;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
      font-family: 'SpoqaHanSansNeo';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
`;
