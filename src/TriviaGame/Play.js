import React, { useState } from "react";
import {
  WindowBody,
  Question,
  Option,
  ButtonContainer,
  SubmitButton,
} from "./styled";

const Play = ({
  currentQuestion,
  setScore,
  score,
  setCurrentQuestion,
  setQuestions,
  questions,
  setIsEnd,
  setIsPlay,
}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);

  function isSelected(option) {
    if (option === selectedOption) {
      return true;
    } else {
      return false;
    }
  }

  function checkAnswer(option) {
    if (option === currentQuestion.answer) {
      return true;
    } else {
      return false;
    }
  }

  function submitQuestion() {
    if (selectedOption === "") {
      setIsEmpty(true);
      return;
    } else {
      setHasSubmitted(true);
    }
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
  }

  function getNextQuestion() {
    if (questions.length === 0) {
      setIsEnd(true);
      setIsPlay(false);
    } else {
      let updatedQuestions = [...questions];
      const nextQuestion = updatedQuestions.pop();
      setCurrentQuestion(nextQuestion);
      setQuestions(updatedQuestions);
      setQuestionNumber(questionNumber + 1);
      setHasSubmitted(false);
      setSelectedOption("");
    }
  }

  console.log("selectedOption", selectedOption);
  return (
    <WindowBody>
      <Question>Question: {questionNumber}</Question>
      <Question>{currentQuestion.question}</Question>
      {currentQuestion.options.map((option) => {
        return (
          <Option
            key={option}
            isActive={isSelected(option)}
            onClick={() => setSelectedOption(option)}
            isCorrect={checkAnswer(option)}
            isEmpty={isEmpty}
            hasSubmitted={hasSubmitted}
            onAnimationEnd={() => setIsEmpty(false)}
          >
            <p>{option}</p>
          </Option>
        );
      })}
      <ButtonContainer>
        {!hasSubmitted && (
          <SubmitButton onClick={submitQuestion} disabled={hasSubmitted}>
            Submit
          </SubmitButton>
        )}
        {hasSubmitted && (
          <SubmitButton onClick={getNextQuestion}>Next</SubmitButton>
        )}
      </ButtonContainer>
    </WindowBody>
  );
};

export default Play;
