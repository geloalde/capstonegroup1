import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductListContainer = (props) => {
  //Getting category from URL
  let { category } = useParams();
  return (
    <ProductContainer>
      {props.finalStateProducts.map((item) =>
        item.category === category ? (
          <Product items={item} key={item.id} addItemCart={props.addItemCart} />
        ) : (
          // Just making condition dead - will not do anything for other products
          console.log()
        )
      )}
    </ProductContainer>
  );
};

export default ProductListContainer;
