import React, { Component } from "react";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { allProducts } from "../data";
import ProductListContainer from "../components/ProductListContainer";

const Container = styled.div`
  margin: 0px 20px;
  min-height: calc(100vh - 59px - 279px);
`;

const NoProduct = styled.div`
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

class ProductList extends Component {
  state = {
    finalStateProducts: allProducts,
    sortedProducts: allProducts,
    filteredProdcuts: allProducts,
  };

  handleSortBy = (sort) => {
    console.log("Sorting selection : ", sort);
    let sortedProducts = this.state.finalStateProducts;
    if (sort === "Price Low to High") {
      sortedProducts.sort((a, b) => {
        return a.price - b.price; // FOR  LOW TO HIGH
      });
      this.setState({ finalStateProducts: sortedProducts });
    } else if (sort === "Price High to Low") {
      sortedProducts.sort((a, b) => {
        return b.price - a.price; // FOR HIGH TO LOW
      });
      this.setState({ finalStateProducts: sortedProducts });
    }
  };

  //Handling sorted filterted products - a seprate function
  handleFilSort = (products, sort) => {
    console.log("New function called :", products, sort);
    let sortedProducts = products;
    if (sort === "Price Low to High") {
      sortedProducts.sort((a, b) => {
        return a.price - b.price; // FOR  LOW TO HIGH
      });
      this.setState({ finalStateProducts: sortedProducts });
    } else if (sort === "Price High to Low") {
      sortedProducts.sort((a, b) => {
        return b.price - a.price; // FOR HIGH TO LOW
      });
      this.setState({ finalStateProducts: sortedProducts });
    } else if (sort === "Sort by") {
      this.setState({ finalStateProducts: products });
    }
  };

  handlefilterProducts = (filter_1, filter_2, category, sort) => {
    console.log("Both Filters and sort : ", filter_1, filter_2, category, sort);
    let filteredProdcuts = allProducts;
    let filter_products;
    if (filter_1 === "RAM") {
      filter_products = filteredProdcuts.filter(function (product) {
        return product.specs.ROM === filter_2 && product.category === category;
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    } else if (filter_2 === "ROM") {
      filter_products = filteredProdcuts.filter(function (product) {
        return product.specs.RAM === filter_1 && product.category === category;
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    } else {
      filter_products = filteredProdcuts.filter(function (product) {
        return (
          product.specs.RAM === filter_1 &&
          product.specs.ROM === filter_2 &&
          product.category === category
        );
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    }

    if (filter_1 === "All" && filter_2 === "ROM") {
      filter_products = filteredProdcuts.filter(function (product) {
        return product.category === category;
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    } else if (filter_1 === "All" && filter_2 !== "ROM") {
      filter_products = filteredProdcuts.filter(function (product) {
        return product.specs.ROM === filter_2 && product.category === category;
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    }

    if (filter_2 === "All" && filter_1 === "RAM") {
      filter_products = filteredProdcuts.filter(function (product) {
        return product.category === category;
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    } else if (filter_2 === "All" && filter_1 !== "RAM") {
      filter_products = filteredProdcuts.filter(function (product) {
        return product.specs.RAM === filter_1 && product.category === category;
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    }

    if (filter_1 === "All" && filter_2 === "All") {
      filter_products = filteredProdcuts.filter(function (product) {
        return product.category === category;
      });
      //Calling another function
      this.handleFilSort(filter_products, sort);
    }

    // Showing Message if nothing matches to the filters.
    if (filter_products.length === 0) {
      document.getElementById("noproduct").style.display = "flex";
      console.log("no product as per selected filters");
    } else {
      document.getElementById("noproduct").style.display = "none";
    }
  };

  render() {
    return (
      <Container>
        <PageTitle />
        <ProductFilter
          sortByPorduct={this.handleSortBy}
          filterProducts={this.handlefilterProducts}
        />
        <NoProduct id="noproduct">
          <h1>No Product Found!</h1>
          <h4>Try changing product filters.</h4>
        </NoProduct>
        <ProductListContainer
          addItemCart={this.props.addItemCart}
          finalStateProducts={this.state.finalStateProducts}
        />
      </Container>
    );
  }
}

export default ProductList;

// ----------------------------------------------------------------
