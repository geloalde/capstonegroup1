import styled from "styled-components";
import { useParams } from "react-router-dom";

const Title = styled.h1`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 20px;
`;

const PageTitle = (props) => {
  //Getting category from URL
  let { category } = useParams();

  //Setting the Page Title
  let pagetitle = props.title;
  if (category === "laptops") {
    pagetitle = "LAPTOPS";
  } else if (category === "phones") {
    pagetitle = "PHONES";
  } else if (category === "headphones") {
    pagetitle = "HEADPHONES";
  }
  return <Title>{pagetitle}</Title>;
};

export default PageTitle;
