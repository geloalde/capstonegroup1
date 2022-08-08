import styled from "styled-components";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { allProducts } from "../data";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  border: 2px solid black;
  padding: 2px;
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h2`
  font-weight: 100;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
`;
const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SpecContianer = styled.div`
  display: flex;
  /* justify-content: center;
  align-content: center; */
`;
const SpectTitle = styled.p`
  background-color: black;
  border-bottom: 0.2px solid white;
  color: white;
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 15px;
`;
const SpecDetail = styled.p`
  display: flex;
  align-items: center;
  padding: 5px;
  flex: 3;
  background-color: white;
  border-bottom: 0.2px solid black;
  font-size: 15px;
  &:hover {
    background-color: #e4e3e3;
    transition: all 0.2s ease;
  }
`;

const QuantityPrice = styled.div`
  margin-top: 10px;
  display: flex;
  align-content: center;
  align-items: center;
`;

const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  font-weight: 100;
  font-size: 30px;
`;

const Currency = styled.span`
  font-size: 20px;
  flex: 1;
  margin-left: 10px;
  color: #707070;
`;

const AddCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    /* transform: scale(1.1); */
    transition: all 0.5s ease;
  }
`;
const ProductViewDetails = (props) => {
  // Fetching the product id from url
  let { id } = useParams();
  // Converting URL id(String) to number to fetch details below
  id = parseInt(id);

  // Getting the specs of the product and pushing them in arry to visible in them spec UI table
  const specs = [];
  for (const key in allProducts[id].specs) {
    specs.push(
      <SpecContianer key={key}>
        <SpectTitle>{key}</SpectTitle>
        <SpecDetail>{allProducts[id].specs[key]}</SpecDetail>
      </SpecContianer>
    );
  }
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={allProducts[id].img} />
      </ImageContainer>
      <InfoContainer>
        <Title>{allProducts[id].title}</Title>
        <Desc>{allProducts[id].desc}</Desc>
        {/* Getting Specs for the product through for in loop */}
        {specs}
        <QuantityPrice>
          <Price id="prodcut_total_price">{allProducts[id].price}</Price>
          <Currency>PHP</Currency>
        </QuantityPrice>
        <AddCart onClick={() => props.addItemCart(allProducts[id])}>
          <ShoppingCartOutlined style={{ marginRight: "20px" }} />
          Add to Cart
        </AddCart>
      </InfoContainer>
    </Wrapper>
  );
};

export default ProductViewDetails;
