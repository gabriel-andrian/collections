import React, { useState } from "react";
import { Container } from "./components/styled-components";
import TopMenu from "./components/menu";
import Routers from "./routes";

function App() {
  const [collections, setCollections] = useState([]);

  return (
    <>
      <TopMenu />
      <Container>
        <Routers collections={collections} setCollections={setCollections} />
      </Container>
    </>
  );
}

export default App;
