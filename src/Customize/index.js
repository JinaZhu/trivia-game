import React, { useState } from "react";

import { Link } from "react-router-dom";
import Question from "./Question";
import Added from "./Added";
import Error from "./Error";

import {
  CustomizedPage,
  Addcontainer,
  WindowBar,
  CloseImage,
  WindowText,
} from "./styled";
import close from "../images/close.svg";

const Customize = () => {
  const [displayAnother, setDisplayAnother] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  return (
    <CustomizedPage>
      <Addcontainer>
        <WindowBar>
          <WindowText>Add A Question</WindowText>
          <Link to="/">
            <CloseImage src={close} alt="fake close" />
          </Link>
        </WindowBar>
        {!displayAnother && !displayError && (
          <Question
            setDisplayAnother={setDisplayAnother}
            setDisplayError={setDisplayError}
          />
        )}
        {displayAnother && <Added setDisplayAnother={setDisplayAnother} />}
        {displayError && <Error setDisplayError={setDisplayError} />}
      </Addcontainer>
    </CustomizedPage>
  );
};

export default Customize;
