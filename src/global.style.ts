import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'SpoqaHanSansNeo-Regular',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
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
    --primary-purple:#6732ff;
    --primary-mint: #62fee2;
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
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
      font-family: 'SpoqaHanSansNeo-Bold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
`;
