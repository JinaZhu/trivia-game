import React, { useState } from "react";
import {
  WindowBody,
  QuestionNum,
  NumContainer,
  WhiteText,
  GameButton,
} from "./styled";

const numberSelectionOptions = [10, 15, 20];

const Start = ({
  setIsStart,
  setIsPlay,
  setQuestions,
  setCurrentQuestion,
  setNumberSelection,
  numberSelection,
}) => {
  function isSelected(option) {
    if (option === numberSelection) {
      return true;
    } else {
      return false;
    }
  }

  async function getQuestions() {
    try {
      const response = await fetch(
        "https://triviaknowledgeapi.herokuapp.com/api/getQuestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(numberSelection),
        }
      );
      const data = await response.json();
      const first_question = data.pop();
      setCurrentQuestion(first_question);
      setQuestions(data);
      setIsStart(false);
      setIsPlay(true);
    } catch (error) {
      console.log("error:", error);
    }
  }

  return (
    <WindowBody>
      <WhiteText>
        Please select the number of questions for this round.
      </WhiteText>
      <NumContainer>
        {numberSelectionOptions.map((option) => {
          return (
            <QuestionNum
              isActive={isSelected(option)}
              key={option}
              onClick={() => setNumberSelection(option)}
            >
              {option}
            </QuestionNum>
          );
        })}
      </NumContainer>
      <GameButton onClick={getQuestions}>Start</GameButton>
    </WindowBody>
  );
};

export default Start;
