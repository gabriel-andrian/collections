import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default Routers;
