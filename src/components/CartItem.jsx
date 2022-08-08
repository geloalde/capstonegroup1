import { Add, DeleteOutline, Remove } from "@mui/icons-material";
import styled from "styled-components";
import React, { Component } from "react";

const CartProduct = styled.div`
  display: flex;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 20px;
  padding-top: 20px;
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

const QuantityPrice = styled.div`
  margin-top: 10px;
  display: flex;
  align-content: center;
  align-items: center;
`;

const QuantityButtonContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const QuantityButton = styled.button`
  padding: 3px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: 1px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;
const Quantity = styled.p`
  font-size: 25px;
  margin: 0px 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 25px;
`;

const DeleteProductContainer = styled.div`
  background-color: black;
  padding: 2px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

class CartItem extends Component {
  state = {};
  render() {
    const {
      item,
      Sn,
      item_quantity_price,
      item_quantity,
      RemoveQuantity,
      AddQuantity,
      DeleteProduct,
      itemid,
    } = this.props;

    return (
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
          <Price>{item_quantity_price} PHP</Price>
          <QuantityPrice>
            <QuantityButtonContainer>
              <QuantityButton>
                <Remove onClick={() => RemoveQuantity(itemid)} />
              </QuantityButton>
              <Quantity>{item_quantity}</Quantity>
              <QuantityButton>
                <Add onClick={() => AddQuantity(itemid)} />
              </QuantityButton>
            </QuantityButtonContainer>
          </QuantityPrice>
        </ProdctPrice>
        <DeleteProductContainer
          onClick={() => DeleteProduct(item.id, item.quantity)}
        >
          <DeleteOutline />
        </DeleteProductContainer>
      </CartProduct>
    );
  }
}

export default CartItem;
