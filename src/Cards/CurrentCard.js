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
  hasSubmitted,
  setHasSubmitted,
  questionNumber,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  function setSelectedValue(option) {
    if (!hasSubmitted) {
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

  function checkCorrectAnswer(option) {
    if (option === question.correct) {
      return true;
    } else {
      return false;
    }
  }

  function matchAnswer(e, finalAnswer) {
    e.preventDefault();
    if (finalAnswer === "") {
      setIsEmpty(true);
      return;
    }
    setHasSubmitted(true);
    if (finalAnswer === question.correct) {
      setScore(score + 1);
    }
  }

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
            isCorrect={checkCorrectAnswer(option)}
            onClick={() => setSelectedValue(option)}
            isActive={checkSelect(option)}
            isEmpty={isEmpty}
            onAnimationEnd={() => setIsEmpty(false)}
            hasSubmitted={hasSubmitted}
          >
            <p>{option}</p>
          </Option>
        );
      })}
      <ButtonContainer>
        {!hasSubmitted && (
          <SubmitButton
            onClick={(e) => matchAnswer(e, selectedOption)}
            disabled={hasSubmitted}
          >
            Submit
          </SubmitButton>
        )}
        {hasSubmitted && (
          <SubmitButton onClick={getNextQuestion} disabled={!hasSubmitted}>
            Next
          </SubmitButton>
        )}
      </ButtonContainer>
    </Card>
  );
};

export default CurrentCard;
