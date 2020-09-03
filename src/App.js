import React from "react";
import { Container } from "./components/styled-components";
import TopMenu from "./components/menu";
import Routers from "./routes";

function App() {
  return (
    <>
      <TopMenu />
      <Container>
        <Routers />
      </Container>
    </>
  );
}

export default App;
