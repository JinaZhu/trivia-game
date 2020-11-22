import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Game from "./Game";
import NewQuestion from "./NewQuestion";
import TriviaGame from "./TriviaGame";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/cards" component={Game} />
        <Route path="/customize" component={NewQuestion} />
        <Route path="/playGame" component={TriviaGame} />
      </div>
    </HashRouter>
  );
}

export default App;
