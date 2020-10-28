import React, { useState, useEffect } from "react";
import { CardsContainer, CarouselContainer, Arrows } from "./styled";

import CurrentCard from "./CurrentCard";
import left from "../images/left.svg";
import right from "../images/right.svg";
import { triviaQuestions } from "./triviaQuestions";

const total_questions = triviaQuestions.length;
const currentRoundQuestions = [];

const question = {
  question: "What is the name for a cow-bison hybrid?",
  options: ["Cowson", "Bicow", "Beefalo", "Mooson"],
  correct: "Beefalo",
};

const Cards = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");
  const [isIncorrect, setIsIncorrect] = useState("");
  const [isFinish, setIsFinish] = useState(false);

  //   const questionn = currentRoundQuestions[currentQuestion];
  // console.log(questionn);

  function selectRandomQuestions() {
    while (currentRoundQuestions.length <= 10) {
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

  return (
    <CardsContainer>
      <p>Score: {score}</p>
      <CarouselContainer>
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
        />
      </CarouselContainer>
    </CardsContainer>
  );
};

export default Cards;
