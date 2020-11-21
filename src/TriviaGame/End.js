import React from "react";
import { Link } from "react-router-dom";
import { WindowBody, Score, GameButton } from "./styled";

const End = ({ score, numberSelection, setIsEnd, setIsStart }) => {
  function reload() {
    setIsEnd(false);
    setIsStart(true);
    window.location.reload(true);
  }
  return (
    <WindowBody>
      <Score size="50" color="#f2f2f2">
        {score}/{numberSelection}
      </Score>
      <GameButton onClick={(e) => reload()}>Play Again</GameButton>
      <Link to="/customize">
        <GameButton>Add a question</GameButton>
      </Link>
    </WindowBody>
  );
};

export default End;
