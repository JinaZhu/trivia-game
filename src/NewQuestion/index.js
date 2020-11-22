import React, { useState } from "react";

import { Link } from "react-router-dom";
import Adding from "./Adding";
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

const NewQuestion = () => {
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
          <Adding
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

export default NewQuestion;
