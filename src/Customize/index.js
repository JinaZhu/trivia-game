import React, { useState } from "react";

const DEBUG = process.env.NODE_ENV === "development" ? true : false;
const PREFIX = DEBUG
  ? "http://0.0.0.0:8000"
  : "https://triviaknowledge.herokuapp.com/";
const api_path = PREFIX + "/api/question";

const Customize = () => {
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
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <p>Question</p>
      <input type="text" onChange={(e) => setNewQuestion(e.target.value)} />
      <p>Wrong Options</p>
      <div>
        <input
          type="text"
          onChange={(e) => setNewQuestionOption1(e.target.value)}
        />
        <input
          type="text"
          onChange={(e) => setNewQuestionOption2(e.target.value)}
        />
        <input
          type="text"
          onChange={(e) => setNewQuestionOption3(e.target.value)}
        />
      </div>
      <p>Answer</p>
      <input
        type="text"
        onChange={(e) => setNewQuestionAnswer(e.target.value)}
      />
      <button onClick={() => addQuestion()}>Submit</button>
      <p>Thank you for contributing</p>
    </div>
  );
};

export default Customize;
