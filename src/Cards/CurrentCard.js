import React, { useState } from "react";
import { Card, Question, Option, SubmitButton } from "./styled";

const CurrentCard = ({
  question,
  setScore,
  score,
  getNextQuestion,
  isSubmit,
  setIsSubmit,
  isCorrect,
  setIsCorrect,
  isIncorrect,
  setIsIncorrect,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  function setSelectedValue(option) {
    if (!isSubmit) {
      setSelectedOption(option);
    }
  }
  function checkSelect(selected) {
    if (selected === selectedOption) {
      return true;
    } else {
      return false;
    }
  }

  function checkCorrect(option) {
    if (option === question.correct) {
      return isCorrect;
    } else {
      return isIncorrect;
    }
  }

  function matchAnswer(e, finalAnswer) {
    e.preventDefault();
    setIsCorrect("green");
    setIsIncorrect("red");
    setIsSubmit(true);
    if (finalAnswer === question.correct) {
      setScore(score + 1);
    }
  }
  console.log(isSubmit);
  return (
    <Card>
      <Question>{question.question}</Question>
      {question.options.map((option) => {
        return (
          <Option
            key={option}
            isCorrect={checkCorrect(option)}
            onClick={() => setSelectedValue(option)}
            isActive={checkSelect(option)}
          >
            <p>{option}</p>
          </Option>
        );
      })}
      {!isSubmit && (
        <SubmitButton
          onClick={(e) => matchAnswer(e, selectedOption)}
          disabled={isSubmit}
        >
          Submit
        </SubmitButton>
      )}
      {isSubmit && (
        <SubmitButton onClick={(e) => getNextQuestion()} disabled={!isSubmit}>
          Next
        </SubmitButton>
      )}
    </Card>
  );
};

export default CurrentCard;
