import React, { useState, useEffect } from "react";
import { CardsContainer, Score } from "./styled";

import CurrentCard from "./CurrentCard";
import Finish from "./Finish";
import { triviaQuestions } from "./triviaQuestions";

const total_questions = triviaQuestions.length;
const currentRoundQuestions = [];

const Cards = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");
  const [isIncorrect, setIsIncorrect] = useState("");
  const [isFinish, setIsFinish] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  //   const questionn = currentRoundQuestions[currentQuestion];
  // console.log(questionn);

  function selectRandomQuestions() {
    while (currentRoundQuestions.length !== 10) {
      const random_index = Math.floor(
        Math.random() * Math.floor(total_questions)
      );
      if (!currentRoundQuestions.includes(random_index)) {
        currentRoundQuestions.push(random_index);
      }
    }
    getNextQuestion();
  }

  function getNextQuestion() {
    if (currentRoundQuestions.length === 0) {
      setIsFinish(true);
    } else {
      const last_index_question = currentRoundQuestions.pop();
      setCurrentQuestion(triviaQuestions[last_index_question]);
      setQuestionNumber(questionNumber + 1);
      setIsSubmit(false);
      setIsCorrect("");
      setIsIncorrect("");
    }
  }

  useEffect(() => {
    selectRandomQuestions();
  }, []);

  if (currentQuestion === undefined) {
    return null;
  }
  console.log(currentRoundQuestions);

  return (
    <CardsContainer>
      {!isFinish && <Score size={25}>Score: {score}</Score>}
      {!isFinish && (
        <CurrentCard
          question={currentQuestion}
          setScore={setScore}
          score={score}
          getNextQuestion={getNextQuestion}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
          isCorrect={isCorrect}
          setIsCorrect={setIsCorrect}
          isIncorrect={isIncorrect}
          setIsIncorrect={setIsIncorrect}
          questionNumber={questionNumber}
        />
      )}
      {isFinish && <Finish score={score} />}
    </CardsContainer>
  );
};

export default Cards;
