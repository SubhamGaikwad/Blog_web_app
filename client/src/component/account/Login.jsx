import React, { useState } from "react";

import { Box, TextField, Button, styled, Typography } from "@mui/material";

import { API } from "../../service/api";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  width: "100px",
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb6418;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const SignupButton = styled(Button)`
text-transform:none;
background:#fff:
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600px;
`;

const signinValue = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signinValue);
  const [error, setError] = useState("");

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const inputValueChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setSignup(signinValue);
      toggleAccount("login");
    } else {
      setError("Something went wrong: please try agian later");
    }
  };

  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter user name" />
            <TextField variant="standard" label="Enter password" />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton variant="text" onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => inputValueChange(e)}
              name="name"
              label="Enter name"
            />
            <TextField
              variant="standard"
              onChange={(e) => inputValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => inputValueChange(e)}
              name="password"
              label="Enter password"
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
