import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const glow = css`
  box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
`;

export const CardsContainer = styled.div`
  ${flexCenter}
  height: 100vh;
  background: #ff4d52;
`;

//card

export const Card = styled.div`
  ${flexCenter}
  background: #2f2b32;
  color: #f2f2f2;
  padding: 0px 0px 20px 0px;
  width: 400px;
  height: 500px;
  justify-content: ${(props) => props.justify || "flex-start"};
`;

export const CardWindowBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "space-between"};
  background-color: #f2f2f2;
  width: 90%;
  height: 40px;
  color: #2f2b32;
  padding: 0 5% 0 5%;
  font-size: 25px;
`;

export const Question = styled.div`
  font-size: 25px;
  width: 90%;
  margin: 20px 0;
  text-align: left;
`;

export const Option = styled.div`
  background: #f2f2f2;
  color: #2f2b32;
  width: 90%;
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    ${glow}
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
      `
    );
  }}
  ${(props) => {
    return (
      props.isCorrect === "red" &&
      css`
        background-color: #b21336;
      `
    );
  }}

  ${(props) => {
    return (
      props.isCorrect === "green" &&
      css`
        background-color: #048574;
      `
    );
  }}
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  font-family: "Open Sans";
  font-weight: bold;
  padding: 10px 35px;
  font-size: 15px;
  background: #f2f2f2;
  color: #2f2b32;
  margin: 15px;
  cursor: pointer;
  border: none;
  font-family: "Cutive Mono", monospace;

  &:hover {
    ${glow}
  }
`;

//finish component

export const PlayAgainButton = styled.button`
  color: #2f2b32;
  background-color: #f2f2f2;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 10px 35px;
  margin-top: 50px;
  font-size: 25px;
  font-family: "Cutive Mono", monospace;
  &:hover {
    ${glow}
  }
`;

export const Score = styled.p`
  font-size: ${(props) => props.size || 50}px;
  margin: 0 0 20px 0;
`;
