import React from "react";
import {
  HomepageContainer,
  WindowContainer,
  WindowBar,
  FakeButton,
  Text,
  Title,
  GoButton,
  ReadyH2,
  CardLink,
} from "./styled";

import close from "../images/close.svg";
import large from "../images/large.svg";
import minimize from "../images/minimize.svg";

const Homepage = () => {
  return (
    <HomepageContainer>
      <WindowContainer>
        <WindowBar>
          <FakeButton>
            <img src={minimize} alt="fake minimize" width="25" />
            <img src={large} alt="fake large" width="25" />
            <img src={close} alt="fake close" width="25" />
          </FakeButton>
        </WindowBar>
        <Text>
          <Title>Test Your Knowledge.</Title>
          <ReadyH2>Ready_</ReadyH2>
          <GoButton>
            <CardLink to="/cards">START</CardLink>
          </GoButton>
        </Text>
      </WindowContainer>
    </HomepageContainer>
  );
};

export default Homepage;
