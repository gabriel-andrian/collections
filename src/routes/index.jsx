import React from "react";
import { Switch, Route } from "react-router-dom";
import CharactersPage from "../pages/characters";
import Home from "../pages/home";
import Chart from "../pages/chart";

const Routers = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/chart">
        <Chart />
      </Route>
      <Route path="/characters/:page">
        <CharactersPage />
      </Route>
    </Switch>
  );
};

export default Routers;
