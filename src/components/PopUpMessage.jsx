import React from "react";
import styled from "styled-components";

const PopMessage = styled.div`
  margin: 10px;
  background-color: #facfcf;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid red;
  position: fixed;
  left: 590px;
  z-index: 50;
  width: 30vw;
`;

const PopUpMessage = () => {
  return <PopMessage>Error</PopMessage>;
};

export default PopUpMessage;
