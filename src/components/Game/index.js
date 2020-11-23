import React, { useState } from "react";
import { CardsContainer, Score } from "./styled";

import Question from "./Question";
import Finish from "./Finish";
import triviaQuestions from "./triviaQuestions";

export function selectRandomQuestionIndexes(triviaQuestions) {
  const questionIndexes = [];
  const totalQuestions = triviaQuestions.length;

  while (questionIndexes.length !== 10) {
    const random_index = Math.floor(Math.random() * Math.floor(totalQuestions));
    if (!questionIndexes.includes(random_index)) {
      questionIndexes.push(random_index);
    }
  }
  return questionIndexes;
}

const currentRoundQuestionsIndexes = selectRandomQuestionIndexes(
  triviaQuestions
);
const firstQuestion = triviaQuestions[currentRoundQuestionsIndexes.pop()];

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
  const [currentQuestion, setCurrentQuestion] = useState(firstQuestion);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  function getNextQuestion() {
    if (currentRoundQuestionsIndexes.length === 0) {
      setIsFinished(true);
    } else {
      const nextQuestion = triviaQuestions[currentRoundQuestionsIndexes.pop()];
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
