import React from "react";
import Main from "./components/MainPage/Main";
import { Switch, Route, Redirect } from "react-router-dom";
import Stats from "./components/StatsPage/Stats.jsx";
import UserPage from "./components/UserPage/UserPage.jsx";

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/stats/:id" component={UserPage} />
      <Route path="/stats" component={Stats} />
      <Redirect to="" />
    </Switch>
  </div>
);

export default App;
