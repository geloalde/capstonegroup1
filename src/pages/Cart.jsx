import styled from "styled-components";
import CartCheckoutContinueShoppingButtons from "../components/CartCheckoutContinueShoppingButtons";
import CartItem from "../components/CartItem";
import TotalPriceCart from "../components/TotalPriceCart";
import { totaPriceOfCartItemsData } from "../data";
import React, { Component } from "react";

const Container = styled.div`
  margin: 0px 20px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

const NothingCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  min-height: calc(100vh - 59px - 279px);
`;

class Cart extends Component {
  render() {
    //Serail Number for the product.
    let Sno = 0;
    let totalPriceCartItems = 0;
    let totalCartItems = 0;

    // function for calculating the total data and also pushing data to App.js state to send as prop to checkout page.
    function totalPrice(item) {
      totalPriceCartItems += item.priceQuantity;
      // totaPriceOfCartItemsData = totalPriceCartItems;
      totaPriceOfCartItemsData.push(totalPriceCartItems);
      return totalPriceCartItems;
    }

    //Item id to fetch and modify data for the copy of cartitems in state CartItemsData
    let itemid = 0;
    const { cartItems, AddQuantity, RemoveQuantity, DeleteProduct } =
      this.props;
    return (
      <div>
        <Container>
          {/* Cart Items are loaded from the data.js */}
          {cartItems.map((item) => (
            <CartItem
              item_quantity={cartItems[itemid].quantity}
              item_quantity_price={cartItems[itemid].priceQuantity}
              item={item}
              itemid={itemid++}
              key={item.id}
              Sn={++Sno}
              AddQuantity={AddQuantity}
              RemoveQuantity={RemoveQuantity}
              DeleteProduct={DeleteProduct}
              totalPriceCartItems={totalPrice(item)}
              totalCartItems={(totalCartItems += item.quantity)}
            />
          ))}

          {Sno > 0 ? (
            <div>
              <TotalPriceCart
                totalItems={totalCartItems}
                totalPriceCartItems={totalPriceCartItems}
              />
              <CartCheckoutContinueShoppingButtons />
            </div>
          ) : (
            <NothingCart>
              <h1>Nothing In Cart!</h1>
              <h4>Go back to add items to cart.</h4>
            </NothingCart>
          )}
        </Container>
      </div>
    );
  }
}

export default Cart;
