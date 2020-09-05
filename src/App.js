import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Details } from "./pages/details";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id" children={<Details />} />
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
