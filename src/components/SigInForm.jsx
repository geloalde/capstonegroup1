import styled from "styled-components";

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

const SignInFields = styled.div`
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

const ForgetPassword = styled.p`
  display: flex;
  font-size: 15px;
  color: #757575;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
    color: black;
  }
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

const SigInForm = () => {
  function signInUser() {
    // SignIn Form validation starts here.
    var validationCheck = true; // a variable which will be ture after all validation checkups
    var email = document.getElementById("email").value;
    var pswd = document.getElementById("pswd").value;

    // Valid Email validation
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Check input fileds invidually if they have a value or not. Marking them red if they don't have value.
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

    //Complete form validation with multi-level chekcking
    if (
      //Checking if any of filed is not filled by user.
      email === "" ||
      pswd === ""
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
      document.getElementById("msgText").innerHTML = "Enter a valid password.";
      validationCheck = false;
    } else {
      validationCheck = true;
    }

    if (validationCheck) {
      document.getElementById("messageContainer").style.display = "none";
    } else {
      document.getElementById("messageContainer").style.display = "flex";
    }
  }
  return (
    <div>
      <Wrapper>
        <SignInFields>
          <Title>SIGN IN TO YOUR ACCOUNT</Title>
          <InputField placeholder="Email" id="email"></InputField>
          <InputField
            placeholder="Password"
            type="password"
            id="pswd"
          ></InputField>
          <ForgetPassword>FORGET PASSWORD</ForgetPassword>
          <MessageContainer id="messageContainer">
            <MessageText id="msgText" />
          </MessageContainer>
          <SubmitButton onClick={signInUser}>SIGN IN</SubmitButton>
        </SignInFields>
      </Wrapper>
    </div>
  );
};

export default SigInForm;
