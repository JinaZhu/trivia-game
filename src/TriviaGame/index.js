import React, { useState } from "react";

import {
  GamePage,
  Window,
  WindowBar,
  WindowBody,
  Image,
  WindowTitle,
  Score,
} from "./styled";
import close from "../images/close.svg";
import Start from "./Start";
import Play from "./Play";

const TriviaGame = () => {
  const [isStart, setIsStart] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [score, setScore] = useState(0);

  return (
    <GamePage>
      <Score>Score: {score}</Score>
      <Window>
        <WindowBar>
          <WindowTitle>Trivia</WindowTitle>
          <Image src={close} alt="home button" />
        </WindowBar>
        {isStart && (
          <Start
            setIsStart={setIsStart}
            setIsPlay={setIsPlay}
            setQuestions={setQuestions}
            setCurrentQuestion={setCurrentQuestion}
          />
        )}
        {isPlay && (
          <Play
            currentQuestion={currentQuestion}
            setScore={setScore}
            score={score}
            questions={questions}
            setCurrentQuestion={setCurrentQuestion}
          />
        )}
      </Window>
    </GamePage>
  );
};

export default TriviaGame;
