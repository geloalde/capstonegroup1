import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid #b7b7b7;
  background-color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const SpaceDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  justify-content: space-between;
  padding: 0px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  height: 25px;
  cursor: pointer;
  display: flex;
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  color: #000000;
  font-weight: bold;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = ({ ItemsInCart }) => {
  const navigate = useNavigate();

  const navigateToSearch = (keyword) => {
    // 👇️ navigate to search with keyword
    if (keyword !== "") {
      navigate(`/React-Project-e-commerce-app-estore.com/searchresult/${keyword}`);
    }
  };

  // Getting the url to change search visibilty
  let urlCurrent = window.location.href;
  let visibiltySearch = true; // variable which make search visible or invisible
  if (
    // Add urls here as or condition where you want to disable search
    urlCurrent.match("register") ||
    urlCurrent.match("signin")
    // urlCurrent.match("cart")
  ) {
    visibiltySearch = false;
  }
  // console.log("Window Pathhhhhh", urlCurrent);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/React-Project-e-commerce-app-estore.com/" className="CustomRouterLink">
              <Logo>2GE Tech</Logo>
              
            </Link>
          </Left>
          <Center>
            {/* Visible Search based url */}
            {visibiltySearch ? (
              <SearchContainer>
                <Input
                  id="searchInput"
                  onKeyPress={(ev) => {
                    // Search work when enter is pressed.
                    if (ev.key === "Enter" && ev.target.value !== "") {
                      ev.preventDefault();
                      navigateToSearch(ev.target.value);
                    }
                  }}
                />
                <Search
                  style={{ color: "black", fontSize: 20 }}
                  onClick={() =>
                    navigateToSearch(
                      document.getElementById("searchInput").value
                    )
                  }
                />
              </SearchContainer>
            ) : (
              console.log("")
            )}
          </Center>
          <Right>
            <MenuItem to="/register">
              <Link to="/React-Project-e-commerce-app-estore.com/register" className="CustomRouterLink">
                REGISTER
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/React-Project-e-commerce-app-estore.com/signin" className="CustomRouterLink">
                SIGN IN
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/React-Project-e-commerce-app-estore.com/cart" className="CustomRouterLink">
                <Badge badgeContent={ItemsInCart} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
      {/* Dummy div for creating space behing the navbar so all content pushed to 60px below the navbar */}
      <SpaceDiv />
    </div>
  );
};

export default Navbar;
