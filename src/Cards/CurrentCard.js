import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Question,
  Option,
  SubmitButton,
  CardWindowBar,
  ButtonContainer,
} from "./styled";

import close from "../images/close.svg";

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
  questionNumber,
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
      <CardWindowBar>
        <p>Question {questionNumber}:</p>
        <Link to="/">
          <img src={close} alt="to home" width="20" />
        </Link>
      </CardWindowBar>
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
      <ButtonContainer>
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
      </ButtonContainer>
    </Card>
  );
};

export default CurrentCard;
