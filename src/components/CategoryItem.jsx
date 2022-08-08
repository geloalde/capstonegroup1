import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 670px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleBackground = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  &:hover ${TitleBackground} {
    height: 100%;
    transition: all 0.5s ease;
  }
`;

const Title = styled.h1`
  position: absolute;
  bottom: 330px;
  margin-bottom: 300px;
  color: white;
  margin: 15px;
  opacity: none;
`;

const Button = styled.button`
  position: absolute;
  bottom: 295px;
  border: none;
  padding: 10px;
  background-color: white;
  border: 2px solid white;
  color: #000000;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #000000;
    color: white;
    transform: scale(1.4);
    transition: all 0.3s ease;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={item.link} className="CustomRouterLink">
        <Image src={item.img} />
        <Info>
          <TitleBackground />
          <Title>{item.title}</Title>
          <Button>BUY NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
