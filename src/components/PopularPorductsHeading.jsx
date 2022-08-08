import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  padding: 20px 0px 0px 0px;
  border-top: 1px solid #b7b7b7;
  font-size: 50px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PopularPorductsHeading = () => {
  return (
    <Container>
      <Title>Popular Products</Title>
    </Container>
  );
};

export default PopularPorductsHeading;
