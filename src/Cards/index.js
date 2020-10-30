import React, { useState } from "react";
import { CardsContainer, Score } from "./styled";

import CurrentCard from "./CurrentCard";
import Finish from "./Finish";
import triviaQuestions from "./triviaQuestions";

function selectRandomQuestions() {
  const questions = [];
  const totalQuestions = triviaQuestions.length;

  while (questions.length !== 10) {
    const random_index = Math.floor(Math.random() * Math.floor(totalQuestions));
    if (!questions.includes(random_index)) {
      questions.push(random_index);
    }
  }
  return questions;
}

const currentRoundQuestions = selectRandomQuestions();
const firstQuestion = triviaQuestions[currentRoundQuestions.pop()];

const Cards = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(firstQuestion);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  function getNextQuestion() {
    if (currentRoundQuestions.length === 0) {
      setIsFinished(true);
    } else {
      const lastIndexQuestion = currentRoundQuestions.pop();
      setCurrentQuestion(triviaQuestions[lastIndexQuestion]);
      setQuestionNumber(questionNumber + 1);
      setHasSubmitted(false);
    }
  }

  if (currentQuestion === undefined) {
    return null;
  }

  return (
    <CardsContainer>
      {!isFinished && <Score size={25}>Score: {score}</Score>}
      {!isFinished && (
        <CurrentCard
          question={currentQuestion}
          setScore={setScore}
          score={score}
          getNextQuestion={getNextQuestion}
          hasSubmitted={hasSubmitted}
          setHasSubmitted={setHasSubmitted}
          questionNumber={questionNumber}
        />
      )}
      {isFinished && <Finish score={score} />}
    </CardsContainer>
  );
};

export default Cards;
