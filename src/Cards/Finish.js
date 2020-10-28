import React from "react";
import { Card, PlayAgainButton, Score } from "./styled";

const Finish = ({ score }) => {
  function reload() {
    window.location.reload(true);
  }
  return (
    <Card>
      <Score size={25}>Score:</Score>
      <Score>{score}/10</Score>
      <PlayAgainButton onClick={(e) => reload()}>Play Again</PlayAgainButton>
    </Card>
  );
};

export default Finish;
