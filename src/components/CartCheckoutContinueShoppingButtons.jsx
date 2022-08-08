import { AddShoppingCart, ShoppingBasket } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const ContinueShopping = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-right: 40px;
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Checkout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const CartCheckoutContinueShoppingButtons = () => {
  return (
    <ButtonsContainer>
      <Link to="/React-Project-e-commerce-app-estore.com/" className="CustomRouterLink">
        <ContinueShopping>
          <AddShoppingCart style={{ marginRight: "20px" }} />
          CONTINUE SHOPPING
        </ContinueShopping>
      </Link>
      <Link to="/React-Project-e-commerce-app-estore.com/checkout" className="CustomRouterLink">
        <Checkout>
          <ShoppingBasket style={{ marginRight: "20px" }} />
          CHECKOUT
        </Checkout>
      </Link>
    </ButtonsContainer>
  );
};

export default CartCheckoutContinueShoppingButtons;
