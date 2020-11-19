import React from "react";
import { WindowBody, Button } from "./styled";

const Error = ({ setDisplayError }) => {
  return (
    <WindowBody align={"center"}>
      <h2>There was an issue adding a question, please try again</h2>
      <Button onClick={() => setDisplayError(false)} margin={"10px"}>
        Try Again
      </Button>
    </WindowBody>
  );
};

export default Error;
