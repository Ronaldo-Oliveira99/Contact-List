import React from "react";
// import { BrowserRouter } from "react-router-dom";
import "./pages/style.css";
import GlobalStyles from "../src/components/GlobalStyles";
import Container from "../src/components/Container";

import Routes from "./routes";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Routes />
    </Container>
  );
}

export default App;
