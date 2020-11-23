import React from "react";
import { selectRandomQuestions, getRandomizedOptions } from "../index";
import triviaQuestions from "../triviaQuestions";

describe("selectRandomQuestions()", () => {
  it("should return an array of ten items", () => {
    const result = selectRandomQuestions(triviaQuestions);
    const resultLength = result.length;
    expect(resultLength).toBe(10);
  });

  it("should return an array with unique items", () => {
    const result = selectRandomQuestions(triviaQuestions);
    const uniqueArray = new Set(result);
    expect(uniqueArray.size === result.length).toBe(true);
  });
});

describe("getRandomizedOptions()", () => {
  const test_question = triviaQuestions[0];
  it("should return an array the length of incorrect and correct options", () => {
    const result = getRandomizedOptions(test_question);
    const length = test_question.incorrect.length + 1;
    expect(result.length).toBe(length);
  });
  it("should contain the correct answer", () => {
    const result = getRandomizedOptions(test_question);
    expect(result.includes(test_question.correct)).toBe(true);
  });
});
