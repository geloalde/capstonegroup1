import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SearchItem from "../components/SearchItem";
import { allProducts } from "../data";

const Container = styled.div`
  margin: 0px 20px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

const NoProduct = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

const SearchResult = () => {
  let { keyword } = useParams();
  
  //Serail Number for the search product.
  let Sno = 0;

  return (
    <Container>
      {/* Search Results with title */}
      {allProducts.map((item) =>
        item.title.toLowerCase().match(keyword.toLocaleLowerCase()) ? (
          <SearchItem keyword={keyword} item={item} key={item.id} Sn={++Sno} />
        ) : (
          // Just making condition dead - will not do anything for other products
          console.log()
        )
      )}
      {/* Search Results with Main features */}
      {allProducts.map((item) =>
        item["Main Features"]
          .toLowerCase()
          .match(keyword.toLocaleLowerCase()) ? (
          <SearchItem keyword={keyword} item={item} key={item.id} Sn={++Sno} />
        ) : (
          // Just making condition dead - will not do anything for other products
          console.log()
        )
      )}
      {Sno === 0 ? (
        <NoProduct id="noproduct">
          <h1>No Product Found!</h1>
          <h4>Try searching with different keywords.</h4>
        </NoProduct>
      ) : (
        // Just making condition dead - will not do anything for other products
        console.log()
      )}
    </Container>
  );
};

export default SearchResult;
