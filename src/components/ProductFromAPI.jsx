import React from "react";
import styled from "styled-components";

const ProductInfoGeneral = styled.div`
  bottom: 0;
  width: 100%;
  height: 90px;
  background-color: #000000;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductTitle = styled.h3`
  color: white;
`;
const MainFeatures = styled.h3`
  font-size: 11px;
  color: white;
  margin: 2px;
`;
const ProductPrice = styled.h3`
  color: white;
  font-size: 13px;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 5px;
  height: 350px;
  background-color: #e6e6e6;
  position: relative;
  min-width: 300px;
  max-width: 300px;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${ProductTitle} {
    transition: all 0.3s ease;
    color: black;
  }
  &:hover ${MainFeatures} {
    transition: all 0.3s ease;
    color: black;
  }
  &:hover ${ProductPrice} {
    transition: all 0.3s ease;
    color: black;
  }
  &:hover ${ProductInfoGeneral} {
    transition: all 0.5s ease;
    background-color: white;
    border: 1px solid black;
    /* background-color: transparent; */
  }
`;

const Image = styled.img`
  height: 85%;
  width: 100%;
  /* padding-bottom: 100px; */
  object-fit: cover;
  position: absolute;
  top: 0;
`;

const ProductFromAPI = (props) => {
  const item = props.items;
  // Getting the url to change img src for data api and restful api
  let urlCurrent = window.location.href;
  return (
    <Container>
      {urlCurrent.match("restfulapi") ? (
        <Image src={item.img} />
      ) : (
        <Image src={item.images[0]} />
      )}

      <ProductInfoGeneral>
        <ProductTitle>{item.title}</ProductTitle>
        <MainFeatures>{item["description"]}</MainFeatures>
        <ProductPrice>{item.price} PKR</ProductPrice>
      </ProductInfoGeneral>
    </Container>
  );
};

export default ProductFromAPI;
