import React from "react";
import { Switch, Route } from "react-router-dom";
import CharactersPage from "../pages/characters";
import Home from "../pages/home";
import Chart from "../pages/chart";

const Routers = ({ collections, setCollections }) => {
  return (
    <Switch>
      <Route path="/home">
        <Home collections={collections} setCollections={setCollections} />
      </Route>
      <Route path="/chart">
        <Chart collections={collections} />
      </Route>
      <Route path="/characters/:page">
        <CharactersPage
          collections={collections}
          setCollections={setCollections}
        />
      </Route>
    </Switch>
  );
};

export default Routers;
