import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Cards from "./Cards";
import Customize from "./Customize";
import TriviaGame from "./TriviaGame";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/cards" component={Cards} />
        <Route path="/customize" component={Customize} />
        <Route path="/playGame" component={TriviaGame} />
      </div>
    </HashRouter>
  );
}

export default App;
