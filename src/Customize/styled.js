import styled from "styled-components";

export const CustomizedPage = styled.div`
  background-color: #2f615e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Addcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  width: 325px;
  height: 525px
  flex-direction: column;
  border: 1px solid #2f2b32;
  background-color: #f2f2f2;
  box-shadow: 0 8px 6px -6px black;
`;

export const WindowBar = styled.div`
  border: 1px solid #2f2b32;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

export const CloseImage = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

export const WindowText = styled.p`
  margin: 0 0 0 15px;
  font-weight: bold;
  font-size: 20px;
`;

export const WindowBody = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  height: 475px;
`;

export const Input = styled.input`
  outline: none;
  height: 20px;
  width: 200px;
  font-family: "Cutive Mono", monospace;
  margin-left: 20px;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Textarea = styled.textarea`
  width: 200px;
  font-family: "Cutive Mono", monospace;
  margin-left: 20px;
  height: 100px;
  font-size: 15px;
  outline: none;
`;

export const Button = styled.button`
  outline: none;
  padding: 10px;
  font-family: "Cutive Mono", monospace;
  font-size: 15px;
  cursor: pointer;
  margin: ${(props) => props.margin};
`;
