import React, { useState } from "react";
import { CardsContainer, Score } from "./styled";

import Question from "./Question";
import Finish from "./Finish";
import triviaQuestions from "./triviaQuestions";

export function selectRandomQuestions(triviaQuestions) {
  const question_indexes = [];
  const totalQuestions = triviaQuestions.length;

  while (question_indexes.length !== 10) {
    const random_index = Math.floor(Math.random() * Math.floor(totalQuestions));
    if (!question_indexes.includes(random_index)) {
      question_indexes.push(random_index);
    }
  }
  return question_indexes;
}

const currentRoundQuestions = selectRandomQuestions(triviaQuestions);
const firstQuestion = triviaQuestions[currentRoundQuestions.pop()];

export function getRandomizedOptions(question) {
  const allOptions = question.incorrect.concat(question.correct);
  const randomizedAllOptions = [];
  while (randomizedAllOptions.length !== allOptions.length) {
    const selectedOption =
      allOptions[Math.floor(Math.random() * allOptions.length)];
    if (!randomizedAllOptions.includes(selectedOption)) {
      randomizedAllOptions.push(selectedOption);
    }
  }
  return randomizedAllOptions;
}

const options = getRandomizedOptions(firstQuestion);
firstQuestion["options"] = options;

const Game = () => {
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(firstQuestion);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  function getNextQuestion() {
    if (currentRoundQuestions.length === 0) {
      setIsFinished(true);
    } else {
      const nextQuestion = triviaQuestions[currentRoundQuestions.pop()];
      const nextOptions = getRandomizedOptions(nextQuestion);
      nextQuestion["options"] = nextOptions;
      setCurrentQuestion(nextQuestion);
      setQuestionNumber(questionNumber + 1);
      setHasSubmitted(false);
      setSelectedOption("");
    }
  }

  if (currentQuestion === undefined) {
    return null;
  }

  return (
    <CardsContainer>
      {!isFinished && <Score size={25}>Score: {score}</Score>}
      {!isFinished && (
        <Question
          question={currentQuestion}
          setScore={setScore}
          score={score}
          getNextQuestion={getNextQuestion}
          hasSubmitted={hasSubmitted}
          setHasSubmitted={setHasSubmitted}
          questionNumber={questionNumber}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
      {isFinished && <Finish score={score} />}
    </CardsContainer>
  );
};

export default Game;
