import React, { Component } from "react";
import styled from "styled-components";
import { allProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
`;
class Products extends Component {
  state = {};
  render() {
    return (
      <Container>
        <ProductContainer>
          {allProducts.map((item) =>
            // This will just fetch popular products for the Home
            item.popular === "yes" ? (
              <Product
                items={item}
                key={item.id}
                addItemCart={this.props.addItemCart}
              />
            ) : (
              // Just making condition dead - will not do anything for other produts
              console.log()
            )
          )}
        </ProductContainer>
      </Container>
    );
  }
}

export default Products;
