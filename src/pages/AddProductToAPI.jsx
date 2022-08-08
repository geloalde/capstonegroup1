import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

const Title = styled.h1`
  padding: 20px 0px 20px 0px;
  font-size: 20px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RegisterFields = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputField = styled.input`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 200%;
`;

const InputFieldTextArea = styled.textarea`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 200%;
`;

const SelectFiled = styled.select`
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
  width: 210%;
`;
const Option = styled.option``;

const SubmitButton = styled.button`
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const MessageContainer = styled.div`
  margin: 10px;
  background-color: #facfcf;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;
  height: 30px;
  border: 1px solid red;
  display: none;
`;

const MessageText = styled.p`
  color: red;
  font-size: 15px;
`;
const AddProductToAPI = () => {
  // Getting Data from form.
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [main_features, setMain_features] = useState("");
  const AddProduct = () => {
    const category = document.getElementById("category").value;
    const popular = document.getElementById("popular").value;

    const priceQuantity = price;
    const quantity = 1;
    let product = {
      title,
      desc,
      img,
      price,
      priceQuantity,
      quantity,
      category,
      popular,
      "Main Features": main_features,
    };
    console.log(product);
    if (
      title === "" ||
      desc === "" ||
      img === "" ||
      price === "" ||
      main_features === ""
    ) {
      //Erorr message if any field is empty
      document.getElementById("messageContainer").style.background = "#f6a6a6";
      document.getElementById("messageContainer").style.border =
        "1px solid red";
      document.getElementById("msgText").style.color = "red";
      document.getElementById("msgText").innerHTML = "Check your fields.";
      document.getElementById("messageContainer").style.display = "flex";
    } else {
      //Submit the Produt to API
      //Fetch POST
      fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((result) => {
        // console.warn("result", result);
        result.json().then((resp) => {
          console.log("Response ", resp);
        });
      });

      document.getElementById("messageContainer").style.display = "flex";
      document.getElementById("messageContainer").style.background = "#d7fde2";
      document.getElementById("messageContainer").style.border =
        "1px solid #20f65d";
      document.getElementById("msgText").innerHTML =
        "Product Added successfully.";
      document.getElementById("msgText").style.color = "green";
    }
  };
  return (
    <Container>
      <RegisterFields id="registerFields">
        <Title>ADD PRODUCT TO API</Title>
        <InputField
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="title"
        ></InputField>
        <InputFieldTextArea
          placeholder="Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          name="desc"
        ></InputFieldTextArea>
        <InputField
          placeholder="Image URL"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
          name="img"
        ></InputField>
        <InputField
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          name="price"
        ></InputField>
        <SelectFiled id="category">
          <Option disabled>Cateogory</Option>
          <Option>laptops</Option>
          <Option>phones</Option>
          <Option>headphones</Option>
        </SelectFiled>
        <SelectFiled id="popular">
          <Option disabled>Popular</Option>
          <Option>Yes</Option>
          <Option>No</Option>
        </SelectFiled>
        <InputField
          placeholder="Main Features"
          value={main_features}
          onChange={(e) => {
            setMain_features(e.target.value);
          }}
          name="main_features"
        ></InputField>
        <MessageContainer id="messageContainer">
          <MessageText id="msgText" />
        </MessageContainer>
        <SubmitButton onClick={AddProduct}>SUBMIT</SubmitButton>
      </RegisterFields>
    </Container>
  );
};

export default AddProductToAPI;
