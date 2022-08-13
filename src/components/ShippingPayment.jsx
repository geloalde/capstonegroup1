import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
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
const ShippingPaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 35vw;
`;
const InputField = styled.input`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;
const InputFieldAddress = styled.textarea`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

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

const SelectFiled = styled.select`
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
  width: 104%;
`;
const Option = styled.option``;

const PurchaseSummary = styled.div`
  border: 1px solid black;
  margin: 10px 0px;
  background-color: #edeaea;
  padding: 10px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PriceContianer = styled.div`
  display: flex;
  /* justify-content: center;
  align-content: center; */
`;
const PriceTitle = styled.p`
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
const PriceDetail = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
const SummaryTitle = styled.h3`
  text-align: center;
  margin: 5px 0px;
  padding: 5px 0px;
`;

const PaymentMethod = styled.div`
  height: 50px;
  width: 104%;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MessageContainer = styled.div`
  margin: 10px;
  background-color: #facfcf;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border: 1px solid red;
  display: none;
`;

const MessageText = styled.p`
  color: red;
  font-size: 15px;
`;

const ShippingPayment = ({ totalCartItems, totalPriceCartItems }) => {
  function ValidateShippingPayment() {
    // Register Form validation starts here.
    var validationCheck = true; // a variable which will be ture after all validation checkups
    var fullname = document.getElementById("fullname").value;
    var contact = document.getElementById("contact").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var paymentmethod = document.getElementById("paymentmethod").value;

    // Check input fileds invidually if they have a value or not. Marking them red if they don't have value.
    if (fullname === "") {
      document.getElementById("fullname").style.border = "1px solid red";
    } else {
      document.getElementById("fullname").style.border = "1px solid black";
    }
    if (contact === "") {
      document.getElementById("contact").style.border = "1px solid red";
    } else {
      document.getElementById("contact").style.border = "1px solid black";
    }
    if (address === "") {
      document.getElementById("address").style.border = "1px solid red";
    } else {
      document.getElementById("address").style.border = "1px solid black";
    }
    if (city === "City") {
      document.getElementById("city").style.border = "1px solid red";
    } else {
      document.getElementById("city").style.border = "1px solid black";
    }
    if (paymentmethod === "Payment Method") {
      document.getElementById("paymentmethod").style.border = "1px solid red";
    } else {
      document.getElementById("paymentmethod").style.border = "1px solid black";
    }

    //Complete form validation with multi-level chekcking
    if (
      //Checking if any of filed is not filled by user.
      fullname === "" ||
      contact === "" ||
      address === ""
    ) {
      document.getElementById("msgText").innerHTML = "Check your fields.";
      validationCheck = false;
    } else if (city === "City") {
      validationCheck = false;
      document.getElementById("city").style.border = "1px solid red";
      document.getElementById("msgText").innerHTML = "Select you city.";
    } else if (paymentmethod === "Payment Method") {
      validationCheck = false;
      document.getElementById("paymentmethod").style.border = "1px solid red";
      document.getElementById("msgText").innerHTML =
        "Select you payment method.";
    } else {
      validationCheck = true;
    }

    if (validationCheck) {
      document.getElementById("messageContainer").style.display = "none";
    } else {
      document.getElementById("messageContainer").style.display = "flex";
    }
  }

  totalPriceCartItems = totalPriceCartItems[totalPriceCartItems.length - 1];
  return (
    <Wrapper>
      <ShippingPaymentContainer>
        <Title>SHIPPING AND PAYMENT DETAILS</Title>
        <PurchaseSummary>
          <SummaryTitle>Summary</SummaryTitle>
          <PriceContianer>
            <PriceTitle>Subtotal </PriceTitle>
            <PriceDetail>{totalPriceCartItems} PHP</PriceDetail>
          </PriceContianer>
          <PriceContianer>
            <PriceTitle>Delivery </PriceTitle>
            <PriceDetail>1000 PHP</PriceDetail>
          </PriceContianer>
          <PriceContianer>
            <PriceTitle>{totalCartItems > 1 ? "Items" : "Item"}</PriceTitle>
            <PriceDetail>{totalCartItems}</PriceDetail>
          </PriceContianer>
          <PriceContianer>
            <PriceTitle style={{ fontSize: "30px" }}>Total </PriceTitle>
            <PriceDetail style={{ fontSize: "30px" }}>
              {totalPriceCartItems + 1000} PHP
            </PriceDetail>
          </PriceContianer>
        </PurchaseSummary>
        <InputField placeholder="Full Name" id="fullname"></InputField>
        <InputField
          placeholder="Contact"
          type="number"
          id="contact"
        ></InputField>
        <SelectFiled id="city">
          <Option disabled selected>
            City
          </Option>
          <Option>Angeles</Option>
          <Option>Bacolod</Option>
          <Option>Baguio</Option>
          <Option>Cagayan de Oro</Option>
          <Option>Caloocan</Option>
          <Option>Cebu City</Option>
          <Option>Davao City</Option>
          <Option>General Santos</Option>
          <Option>Iligan</Option>
          <Option>Iloilo City</Option>
          <Option>Lapu-Lapu</Option>
          <Option>Las Pinas</Option>
          <Option>Lucena</Option>
          <Option>Makati</Option>
          <Option>Malabon</Option>
          <Option>Mandaluyong</Option>
          <Option>Mandaue</Option>
          <Option>Manila</Option>
          <Option>Marikina</Option>
          <Option>Muntinlupa</Option>
          <Option>Navotas</Option>
          <Option>Olongapo</Option>
          <Option>Paranaque</Option>
          <Option>Pasay</Option>
          <Option>Pasig</Option>
          <Option>Puerto Princesa</Option>
          <Option>Quezon City</Option>
          <Option>San Juan</Option>
          <Option>Tacloban</Option>
          <Option>Taguig</Option>
          <Option>Valenzuela</Option>
          <Option>Zamboanga City</Option>




        </SelectFiled>
        <InputFieldAddress
          placeholder="Address"
          id="address"
        ></InputFieldAddress>
        <PaymentMethod>
          <SelectFiled id="paymentmethod">
            <Option disabled selected>
              Payment Method
            </Option>
            <Option>Cash On Delivery</Option>
            <Option>Online Transfer</Option>
          </SelectFiled>
        </PaymentMethod>
        <MessageContainer id="messageContainer">
          <MessageText id="msgText" />
        </MessageContainer>
        <SubmitButton onClick={ValidateShippingPayment}>
          PLACE ORDER
        </SubmitButton>
      </ShippingPaymentContainer>
    </Wrapper>
  );
};

export default ShippingPayment;
