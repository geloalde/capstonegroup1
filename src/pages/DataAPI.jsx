import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import ProductFromAPI from "../components/ProductFromAPI";

const Container = styled.div`
  margin: 0px 20px;
  min-height: calc(100vh - 59px - 279px);
`;

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class DataAPI extends Component {
  state = {
    //For fetching the API data.
    items: [],
    DataisLoaded: false,
  };

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.products,
          DataisLoaded: true,
        });
      });
  }

  render() {
    let pagetitle = "API Data Fetch from Dummy JSON  (Products Data)";

    const { items } = this.state;
    console.log("State Items: ", items);

    return (
      <Container>
        <PageTitle title={pagetitle} />
        <ProductContainer>
          {items.map((item) => (
            <ProductFromAPI items={item} key={item.id} />
          ))}
        </ProductContainer>
      </Container>
    );
  }
}

export default DataAPI;
