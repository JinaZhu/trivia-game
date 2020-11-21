import React, { useState } from "react";
import {
  WindowBody,
  Question,
  Option,
  ButtonContainer,
  SubmitButton,
} from "./styled";

const Play = ({ currentQuestion, setScore, score }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);

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
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setHasSubmitted(true);
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
            hasSubmitted={hasSubmitted}
          >
            <p>{option}</p>
          </Option>
        );
      })}
      <ButtonContainer>
        {!hasSubmitted && (
          <SubmitButton onClick={submitQuestion}>Submit</SubmitButton>
        )}
        {hasSubmitted && <SubmitButton>Next</SubmitButton>}
      </ButtonContainer>
    </WindowBody>
  );
};

export default Play;
