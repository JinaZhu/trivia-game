import React from "react";
import { Link } from "react-router-dom";
import { Card, PlayAgainButton, Score, CardWindowBar } from "./styled";
import close from "../../images/close.svg";

const Finish = ({ score }) => {
  function reload() {
    window.location.reload(true);
  }
  return (
    <Card justify={"space-between"}>
      <CardWindowBar justify={"flex-end"}>
        <Link to="/">
          <img src={close} alt="to home" width="20" />
        </Link>
      </CardWindowBar>
      <div>
        <Score size={25}>Score:</Score>
        <Score>{score}/10</Score>
      </div>
      <PlayAgainButton onClick={(e) => reload()}>Play Again</PlayAgainButton>
    </Card>
  );
};

export default Finish;
