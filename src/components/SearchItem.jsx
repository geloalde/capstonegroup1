import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const CartProduct = styled.div`
  display: flex;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ececec;
    transition: all 0.5s ease;
  }
`;
const ProducImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
  flex: 1;
`;
const SNumber = styled.h4`
  position: absolute;
  padding-left: 20px;
  left: 0;
  font-size: 20px;
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProdctDetails = styled.div`
  /* background-color: #9ca141; */
  flex: 6;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const Title = styled.h2``;
const Desc = styled.p`
  margin: 3px;
  color: #565656;
`;

const ProdctPrice = styled.div`
  /* background-color: #09c40f; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 25px;
`;

class SearchItem extends Component {
  state = {};
  render() {
    const { item, Sn } = this.props;

    return (
      <Link to={"/productview/" + item.id} className="CustomRouterLink">
        <CartProduct>
          <ProducImage>
            <SNumber>{Sn}</SNumber>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
          </ProducImage>
          <ProdctDetails>
            <Title>{item.title}</Title>
            <Desc>{item["Main Features"]}</Desc>
            <Desc>{item.desc}</Desc>
          </ProdctDetails>
          <ProdctPrice>
            <Price>{item.price} PKR</Price>
          </ProdctPrice>
        </CartProduct>
      </Link>
    );
  }
}

export default SearchItem;
