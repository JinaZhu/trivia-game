import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  GamePage,
  Window,
  WindowBar,
  WindowBody,
  Image,
  WindowTitle,
  Score,
} from "./styled";
import close from "../../images/close.svg";
import Start from "./Start";
import Play from "./Play";
import End from "./End";

const TriviaGame = () => {
  const [isStart, setIsStart] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [score, setScore] = useState(0);
  const [numberSelection, setNumberSelection] = useState("");

  return (
    <GamePage>
      <Score>Score: {score}</Score>
      <Window>
        <WindowBar>
          <WindowTitle>Trivia</WindowTitle>
          <Link to="/">
            <Image src={close} alt="home button" />
          </Link>
        </WindowBar>
        {isStart && (
          <Start
            setIsStart={setIsStart}
            setIsPlay={setIsPlay}
            setQuestions={setQuestions}
            setCurrentQuestion={setCurrentQuestion}
            numberSelection={numberSelection}
            setNumberSelection={setNumberSelection}
          />
        )}
        {isPlay && (
          <Play
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            score={score}
            questions={questions}
            setQuestions={setQuestions}
            setIsEnd={setIsEnd}
            setIsPlay={setIsPlay}
          />
        )}
        {isEnd && (
          <End
            score={score}
            numberSelection={numberSelection}
            setIsStart={setIsStart}
            setIsEnd={setIsEnd}
          />
        )}
      </Window>
    </GamePage>
  );
};

export default TriviaGame;
