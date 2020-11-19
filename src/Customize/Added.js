import React from "react";
import { WindowBody, Button } from "./styled";

const Added = ({ setDisplayAnother }) => {
  return (
    <WindowBody align={"center"}>
      <h2>Question added!</h2>
      <p>What's next?</p>
      <div>
        <Button onClick={() => setDisplayAnother(false)} margin={"10px"}>
          Add Another
        </Button>
        <Button margin={"10px"}>Start Game</Button>
      </div>
    </WindowBody>
  );
};

export default Added;
