import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "./Home";
import About from "./About";
import Article from "./Article";
import Routes from "../utils/routes";

const App = () => {
  return (
    <Router>
      <Navigation linkMap={Routes} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Article">
          <Article />
        </Route>
        {/* <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
