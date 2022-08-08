import styled from "styled-components";
import { useParams } from "react-router-dom";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductFilter = (props) => {
  //Getting category from URL
  let { category } = useParams();
  // console.log("category", category);
  let categoryLowerCase = category.toLowerCase();
  category = category.toUpperCase();
  return (
    <FilterContainer>
      {category === "HEADPHONES" ? (
        <Filter></Filter>
      ) : (
        <Filter>
          <FilterText>FILTER {category}</FilterText>
          <Select
            id="filter_1"
            onChange={() =>
              props.filterProducts(
                document.getElementById("filter_1").value,
                document.getElementById("filter_2").value,
                categoryLowerCase,
                document.getElementById("sortBy").value
              )
            }
          >
            <Option disabled selected>
              RAM
            </Option>
            <Option>2 GB</Option>
            <Option>3 GB</Option>
            <Option>4 GB</Option>
            <Option>6 GB</Option>
            <Option>8 GB</Option>
            <Option>16 GB</Option>
            <Option>32 GB</Option>
            <Option>64 GB</Option>
            <Option>126 GB</Option>
            <Option>All</Option>
          </Select>
          <Select
            id="filter_2"
            onChange={() =>
              props.filterProducts(
                document.getElementById("filter_1").value,
                document.getElementById("filter_2").value,
                categoryLowerCase,
                document.getElementById("sortBy").value
              )
            }
          >
            <Option disabled selected>
              ROM
            </Option>
            <Option>8 GB</Option>
            <Option>16 GB</Option>
            <Option>32 GB</Option>
            <Option>64 GB</Option>
            <Option>128 GB</Option>
            <Option>256 GB</Option>
            <Option>512 GB</Option>
            <Option>1 TB</Option>
            <Option>2 TB GB</Option>
            <Option>4 TB GB</Option>
            <Option>All</Option>
          </Select>
        </Filter>
      )}
      <Filter>
        <FilterText>SORT {category}</FilterText>
        <Select
          id="sortBy"
          onChange={() =>
            props.sortByPorduct(document.getElementById("sortBy").value)
          }
        >
          <Option disabled selected>
            Sort by
          </Option>
          <Option>Price Low to High</Option>
          <Option>Price High to Low</Option>
        </Select>
      </Filter>
    </FilterContainer>
  );
};

export default ProductFilter;
