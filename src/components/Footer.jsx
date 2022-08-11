import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 15px 0px 0px 0px;
  border-top: 1px solid #b7b7b7;
  margin-top: auto;
`;

const FooterContainer = styled.div`
  display: flex;
`;
const Left = styled.div`
  border-right: 1px solid #b7b7b7;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  text-align: justify;
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 0%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const Center = styled.div`
  border-right: 1px solid #b7b7b7;
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    font-size: 120%;
    transition: all 0.3s ease;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    font-size: 120%;
    transition: all 0.3s ease;
  }
`;

const Payment = styled.img`
  width: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

const Copyrights = styled.div`
  height: 30px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
`;
const Developer = styled.div`
  height: 30px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;

  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: #d0fffa;
    transition: all 0.3s ease;
    font-size: 18px;
  }
`;

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <Left>
          <Logo>
            <Link to="/React-Project-e-commerce-app-estore.com/" className="CustomRouterLink">
              GGE Tech Store
            </Link>
          </Logo>
          <Desc>
            GGE Tech Store is your go to store for all your tech needs. A wide range of gadgets, computer hardware and mobile phones. Guaranteed new and with 1 year warranty.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <YouTube />
            </SocialIcon>
            <SocialIcon color="0A65C2">
              <LinkedIn />
            </SocialIcon>
            <SocialIcon color="B70A1B">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>
              <Link to="/React-Project-e-commerce-app-estore.com/" className="CustomRouterLink">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/React-Project-e-commerce-app-estore.com/cart" className="CustomRouterLink">
                Cart
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/React-Project-e-commerce-app-estore.com/productlist/laptops" className="CustomRouterLink">
                Laptops
              </Link>
            </ListItem>
            <ListItem>
              {/* <Link to="/React-Project-e-commerce-app-estore.com/dataapi" className="CustomRouterLink">
                Data API
              </Link> */}
            </ListItem>
            <ListItem>
              <Link to="/React-Project-e-commerce-app-estore.com/productlist/phones" className="CustomRouterLink">
                Phones
              </Link>
            </ListItem>
            <ListItem>
              {/* <Link to="/React-Project-e-commerce-app-estore.com/addproducttoapi" className="CustomRouterLink">
                Add Product API
              </Link> */}
            </ListItem>
            <ListItem>
              <Link to="/React-Project-e-commerce-app-estore.com/productlist/headphones" className="CustomRouterLink">
                Headphones
              </Link>
            </ListItem>
            <ListItem>
              {/* <Link to="/React-Project-e-commerce-app-estore.com/restfulapi" className="CustomRouterLink">
                Restful API Data
              </Link> */}
            </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Door 1, 777 Building, Somewhere in the 7,107 islands.
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            +6391 999 8888
          </ContactItem>
          <ContactItem>
            <Email style={{ marginRight: "10px" }} />
            contact@2getech
          </ContactItem>
          <Payment src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" />
        </Right>
      </FooterContainer>
      <Copyrights>
        © All Rights Reserved. On Development and Editing.
        <Developer> </Developer>
      </Copyrights>
    </Container>
  );
}

export default Footer;
