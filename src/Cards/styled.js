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

export const CardsContainer = styled.div`
  ${flexCenter}
  min-height: 100vh;
  background: #a73e2b;
`;

//card

export const Card = styled.div`
  ${flexCenter}
  background: #2f2b32;
  color: #f2f2f2;
  padding: 0px 0px 20px 0px;
  width: 400px;
  height: 525px;
  box-shadow: 0 8px 6px -6px black;
  justify-content: ${(props) => props.justify || "flex-start"};

  @media screen and (max-width: 375px) {
    width: 90vw;
  }
  @media screen and (max-width: 320px) {
    width: 90vw;
    height: 90vh;
  }
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
  margin: 25px 0;
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
  outline: none;

  &:hover {
    ${glow}
  }
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
  cursor: pointer;
  &:hover {
    ${glow}
  }
`;

export const Score = styled.p`
  font-size: ${(props) => props.size || 50}px;
  margin: 0 0 20px 0;
`;
