import React from "react";
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
