import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage";
import Game from "./components/Game";
import NewQuestion from "./components/NewQuestion";
import TriviaGame from "./components/TriviaGame";

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
