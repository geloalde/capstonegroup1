import styled from "styled-components";
import { Add, Remove, ShoppingCartOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { allProducts } from "../data";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  border: 2px solid black;
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
  display: flex;
  justify-content: flex-end;
  flex: 5;
  font-weight: 100;
  font-size: 30px;
`;

const Currency = styled.span`
  font-size: 20px;
  margin-left: 10px;
  color: #707070;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  padding: 10px 10px;
  border-bottom: 1px solid black;
  /* justify-content: ; */
`;
const Color = styled.div`
  background-color: #${(props) => props.color};
  border: 1px solid black;
  margin-left: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
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
const ProductViewDetails = () => {
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

  // Getting the colors of the product and pushing them in arry to visible in them as color for the device
  // const colors = [];
  // for (const key in allProducts[id].colors) {
  //   colors.push(<Color color={allProducts[id].colors[key]} key={key}></Color>);
  // }

  //Product Quantity and total price
  var quantity = 1;
  var product_total_price = allProducts[id].price * quantity;
  function AddQuantity() {
    quantity = quantity + 1;
    var total_price = product_total_price * quantity;
    document.getElementById("product_quanity").innerHTML = quantity;
    document.getElementById("prodcut_total_price").innerHTML = total_price;
  }
  function RemoveQuantity() {
    quantity = quantity - 1;
    if (quantity <= 1) {
      quantity = 1;
    }
    var total_price = product_total_price * quantity;
    document.getElementById("product_quanity").innerHTML = quantity;
    document.getElementById("prodcut_total_price").innerHTML = total_price;
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

        <ColorContainer>
          Color
          <Color color="6EA3C5" style={{ border: "3px solid black" }}></Color>
          {colors}
        </ColorContainer>

        <QuantityPrice>
          <QuantityButtonContainer>
            <QuantityButton>
              <Remove onClick={RemoveQuantity} />
            </QuantityButton>
            <Quantity id="product_quanity">{quantity}</Quantity>
            <QuantityButton>
              <Add onClick={AddQuantity} />
            </QuantityButton>
          </QuantityButtonContainer>
          <Price id="prodcut_total_price">{product_total_price}</Price>
          <Currency>PKR</Currency>
        </QuantityPrice>
        <AddCart>
          <ShoppingCartOutlined style={{ marginRight: "20px" }} />
          Add to Cart
        </AddCart>
      </InfoContainer>
    </Wrapper>
  );
};

export default ProductViewDetails;
