import { createGlobalStyle } from "styled-components";
import { Header } from "../components/Header/Header";
import Head from "next/head";
import Context from "../lib/context";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

`;

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Head>
        <title>Delivery App</title>
      </Head>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </Context>
  );
}
