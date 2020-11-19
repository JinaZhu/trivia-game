import React, { useState } from "react";
import { WindowBody, Input, Textarea, Button } from "./styled";

const DEBUG = process.env.NODE_ENV === "development" ? true : false;
const PREFIX = DEBUG
  ? "http://0.0.0.0:8000"
  : "https://triviaknowledge.herokuapp.com/";
const api_path = PREFIX + "/api/question";

const Question = ({ setDisplayError, setDisplayAnother }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [newQuestionOption1, setNewQuestionOption1] = useState("");
  const [newQuestionOption2, setNewQuestionOption2] = useState("");
  const [newQuestionOption3, setNewQuestionOption3] = useState("");
  const [newQuestionAnswer, setNewQuestionAnswer] = useState("");

  async function addQuestion() {
    try {
      const response = await fetch(api_path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: newQuestion,
          options: [newQuestionOption1, newQuestionOption2, newQuestionOption3],
          answer: newQuestionAnswer,
        }),
      });
      const data = await response.json();
      if (data === "yayy") {
        setDisplayAnother(true);
      } else {
        setDisplayError(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <WindowBody align={"flex-start"}>
      <p>Question:</p>
      <Textarea onChange={(e) => setNewQuestion(e.target.value)} required />
      <p>Incorrect Options:</p>
      <div>
        <Input
          type="text"
          onChange={(e) => setNewQuestionOption1(e.target.value)}
          required
        />
        <br />
        <Input
          type="text"
          onChange={(e) => setNewQuestionOption2(e.target.value)}
          required
        />
        <br />
        <Input
          type="text"
          onChange={(e) => setNewQuestionOption3(e.target.value)}
          required
        />
        <br />
      </div>
      <p>Answer</p>
      <Input
        type="text"
        onChange={(e) => setNewQuestionAnswer(e.target.value)}
        required
      />
      <Button margin={"20px 0px 20px 150px"} onClick={() => addQuestion()}>
        Submit
      </Button>
    </WindowBody>
  );
};

export default Question;
