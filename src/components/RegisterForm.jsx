import styled from "styled-components";
import { Checkbox } from "@mui/material";

const Wrapper = styled.div`
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
  width: 30vw;
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

const Agreement = styled.div`
  display: flex;
  align-items: center;
`;
const AgreementText = styled.p`
  font-size: 15px;
  color: #757575;
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
const RegisterForm = () => {
  function registerUser() {
    // Register Form validation starts here.
    var validationCheck = true; // a variable which will be ture after all validation checkups
    var registerUser = false; // a variable which will be ture after all validation checkups
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var pswd = document.getElementById("pswd").value;
    var confirmPswd = document.getElementById("confirmPswd").value;

    // Valid Email validation
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Check input fileds invidually if they have a value or not. Marking them red if they don't have value.
    if (firstName === "") {
      document.getElementById("firstName").style.border = "1px solid red";
    } else {
      document.getElementById("firstName").style.border = "1px solid black";
    }
    if (lastName === "") {
      document.getElementById("lastName").style.border = "1px solid red";
    } else {
      document.getElementById("lastName").style.border = "1px solid black";
    }
    if (email === "") {
      document.getElementById("email").style.border = "1px solid red";
    } else {
      document.getElementById("email").style.border = "1px solid black";
    }
    if (pswd === "") {
      document.getElementById("pswd").style.border = "1px solid red";
    } else {
      document.getElementById("pswd").style.border = "1px solid black";
    }
    if (confirmPswd === "") {
      document.getElementById("confirmPswd").style.border = "1px solid red";
    } else {
      document.getElementById("confirmPswd").style.border = "1px solid black";
    }

    //Complete form validation with multi-level chekcking
    if (
      //Checking if any of filed is not filled by user.
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      pswd === "" ||
      confirmPswd === ""
    ) {
      document.getElementById("msgText").innerHTML = "Check your fields.";
      validationCheck = false;
    } else if (!email.match(validRegex)) {
      //Checking if the email is valid or not.
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("msgText").innerHTML = "Enter a valid email.";
      validationCheck = false;
    } else if (pswd.length < 8) {
      //Checking if password is between 8 to 16 characters
      document.getElementById("pswd").style.border = "1px solid red";
      document.getElementById("msgText").innerHTML =
        "Password must be above 8 characters.";

      validationCheck = false;
    } else if (pswd !== confirmPswd) {
      //Checking if the password and confirm password field have the same input
      document.getElementById("confirmPswd").style.border = "1px solid red";
      document.getElementById("msgText").innerHTML = "Password did not match.";
      validationCheck = false;
    } else if (!document.getElementById("agreementCheckbox").checked) {
      //Cheking if the user accpeted the terms and agreement.
      document.getElementById("msgText").innerHTML =
        "Agree to the terms of service";
      validationCheck = false;
    } else {
      validationCheck = true;
      registerUser = true; // After complete validation this varibale will push data to databases to register new user.
    }

    if (validationCheck) {
      document.getElementById("messageContainer").style.display = "none";
    } else {
      document.getElementById("messageContainer").style.display = "flex";
    }

    if (registerUser) {
      document.getElementById("messageContainer").style.display = "flex";
      document.getElementById("messageContainer").style.background = "#d7fde2";
      document.getElementById("messageContainer").style.border =
        "1px solid #20f65d";
      document.getElementById("msgText").innerHTML =
        "Account registered successfully.";
      document.getElementById("msgText").style.color = "green";
      document.getElementById("registerFields").style.pointerEvents = "none";

      // Will load the signin page in 3 seconds
      setTimeout(() => {
        window.location.href = "/signin";
      }, 3000);
    }
  }

  return (
    <Wrapper>
      <RegisterFields id="registerFields">
        <Title>CREATE YOUR ACCOUNT</Title>
        <InputField placeholder="First Name" id="firstName"></InputField>
        <InputField placeholder="Last Name" id="lastName"></InputField>
        <InputField placeholder="Email" id="email"></InputField>
        <InputField
          placeholder="Password"
          type="password"
          id="pswd"
        ></InputField>
        <InputField
          placeholder="Confirm Password"
          type="password"
          id="confirmPswd"
        ></InputField>
        <Agreement>
          <Checkbox color="default" id="agreementCheckbox" type="checkbox" />
          <AgreementText>
            I have read and agree to the{" "}
            <a href="#termsOfServies" style={{ color: "black" }}>
              terms of service.
            </a>
          </AgreementText>
        </Agreement>
        <MessageContainer id="messageContainer">
          <MessageText id="msgText" />
        </MessageContainer>
        <SubmitButton onClick={registerUser}>REGISTER</SubmitButton>
      </RegisterFields>
    </Wrapper>
  );
};

export default RegisterForm;
