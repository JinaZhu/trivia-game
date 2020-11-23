import styled, { css, keyframes } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const glow = css`
  box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
`;

const shake = keyframes` 
10%, 90% {
  transform: translate3d(-5px, 0, 0);
}

20%, 80% {
  transform: translate3d(5px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-5px, 0, 0);
}

40%, 60% {
  transform: translate3d(5px, 0, 0);
}
  `;

export const GamePage = styled.div`
  height: 100vh;
  background-color: #e9deb0;
  ${flexCenter}
`;

export const Window = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 525px;
  width: 350px;
  border: 1px solid #2f2b32;
  flex-direction: column;
`;

export const WindowBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #2f2b32;
  background-color: #f2f2f2;
`;

export const WindowBody = styled.div`
  background-color: #2f2b32;
  height: 90%;
  width: 100%;
  ${flexCenter}
`;

export const Image = styled.img`
  width: 25px;
  margin-right: 15px;
`;

export const WindowTitle = styled.h2`
  font-weight: bold;
  margin-left: 15px;
`;

export const NumContainer = styled.div`
  ${flexCenter};
  flex-direction: row;
`;
export const QuestionNum = styled.div`
  padding: 10px;
  font-size: 25px;
  margin: 10px;
  font-weight: bold;
  background-color: #f2f2f2;
  cursor: pointer;

  &:hover {
    ${glow}
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        ${glow}
      `
    );
  }}
`;

export const WhiteText = styled.p`
  font-size: 25px;
  color: #f2f2f2;
  margin: 20px;
`;

export const GameButton = styled.button`
  outline: none;
  padding: 5px;
  font-family: "Cutive Mono", monospace;
  font-size: 25px;
  margin: 20px;
  font-weight: bold;
  border: none;
  color: #2f2b32;

  &:hover {
    ${glow}
  }
`;

export const Question = styled.div`
  font-size: 20px;
  width: 90%;
  margin: 10px 0;
  text-align: left;
  color: #f2f2f2;
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
        ${glow}
      `
    );
  }}

  ${(props) => {
    return (
      props.isEmpty &&
      css`
        animation: ${shake} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      `
    );
  }}

  ${(props) => {
    return (
      props.hasSubmitted &&
      !props.isCorrect &&
      css`
        background-color: #a73e2b;
      `
    );
  }}

  ${(props) => {
    return (
      props.hasSubmitted &&
      props.isCorrect &&
      css`
        background-color: #2f615e;
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
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  padding: 10px 35px;
  font-size: 15px;
  background: #f2f2f2;
  color: #2f2b32;
  margin: 15px;
  cursor: pointer;
  border: none;
  font-family: "Cutive Mono", monospace;
  outline: none;

  &:hover {
    ${glow}
  }
`;

export const Score = styled.p`
  font-weight: bold;
  font-size: ${(props) => props.size || 20}px;
  color: ${(props) => props.color || "#2f2b32"};
`;
