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

import close from "../../images/close.svg";

const CurrentQuestion = ({
  question,
  setScore,
  score,
  getNextQuestion,
  hasSubmitted,
  setHasSubmitted,
  questionNumber,
  selectedOption,
  setSelectedOption,
}) => {
  const [isEmpty, setIsEmpty] = useState(false);

  function setSelectedValue(option) {
    if (!hasSubmitted) {
      setSelectedOption(option);
    }
  }

  function checkSelected(option) {
    if (option === selectedOption) {
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

  function submitAnswer(finalSelectedOption) {
    if (finalSelectedOption === "") {
      setIsEmpty(true);
      return;
    } else {
      setHasSubmitted(true);
    }
    if (finalSelectedOption === question.correct) {
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
            isActive={checkSelected(option)}
            isEmpty={isEmpty}
            hasSubmitted={hasSubmitted}
            onClick={() => setSelectedValue(option)}
            onAnimationEnd={() => setIsEmpty(false)}
          >
            <p>{option}</p>
          </Option>
        );
      })}
      <ButtonContainer>
        {!hasSubmitted && (
          <SubmitButton
            onClick={(e) => submitAnswer(selectedOption)}
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

export default CurrentQuestion;
