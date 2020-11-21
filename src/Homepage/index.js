import React from "react";
import { Link } from "react-router-dom";
import {
  HomepageContainer,
  WindowContainer,
  WindowBar,
  ButtonDiv,
  Text,
  Title,
  GoButton,
  CardLink,
  Underscore,
} from "./styled";

import large from "../images/large.svg";
import plus from "../images/plus.svg";

const Homepage = () => {
  return (
    <HomepageContainer>
      <WindowContainer>
        <WindowBar>
          <Title>Test Your Knowledge</Title>
          <ButtonDiv>
            <Link to="/playGame">
              <img src={large} alt="fake large" width="25" />
            </Link>
            <Link to="/customize">
              <img src={plus} alt="fake close" width="25" />
            </Link>
          </ButtonDiv>
        </WindowBar>
        <Text>
          <h3>
            Ready<Underscore>_</Underscore>
          </h3>
          <GoButton>
            <CardLink to="/cards">Start</CardLink>
          </GoButton>
        </Text>
      </WindowContainer>
    </HomepageContainer>
  );
};

export default Homepage;
