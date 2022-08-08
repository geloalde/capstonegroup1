import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>SALE UPTO 40% OFF ON DIFFERENT PRODUCTS</Container>;
};

export default Announcement;
