import { Box, styled } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authSign } from "../../services/api";

const Container = styled(Box)`
  background: #f0f0f0;
  height: 97%;
  padding: 20px 20px 40px 20px;
`;
const Content = styled(Box)`
  margin: 15px;
  border-radius: 10px;
  width: 98%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const LeftContainer = styled(Box)`
  padding: 20px;
  width: 48%;
`;
const RightContainer = styled(Box)`
  padding: 20px;
  width: 48%;
`;

const signupInitialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const SignUpForm = () => {
  const [signup, setSignup] = useState(signupInitialValues);

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authSign(signup);
    if (!response) alert("not success signup")
    else alert("sign up successful, please login to continue")
  };
  return (
    <>
      <Container>
        <Content>
          <LeftContainer>
            <img src="https://picsum.photos/200" style={{ width: "80%" }} />
          </LeftContainer>
          <RightContainer>
            <Box>
              <h2>Sign Up</h2>
              <h5>Create your account</h5>
                <p>
                  <label>Username</label>
                  <br />
                  <input type="text" name="name" required onChange={(e)=>onInputChange(e)}/>
                </p>
                <p>
                  <label>Email address</label>
                  <br />
                  <input type="email" name="email" required onChange={(e)=>onInputChange(e)}/>
                </p>
                <p>
                  <label>Password</label>
                  <br />
                  <input type="password" name="password" required onChange={(e)=>onInputChange(e)}/>
                </p>
                <p>
                  <label>Phone</label>
                  <br />
                  <input type="number" name="phone" required onChange={(e)=>onInputChange(e)}/>
                </p>
                <p>
                  <Link to="/login" id="sub_btn" type="submit" onClick={signupUser} >
                    Register
                  </Link>
                </p>
              <footer>
                <p>
                  <Link to="/">Back to Homepage</Link>.
                </p>
              </footer>
            </Box>
          </RightContainer>
        </Content>
      </Container>
    </>
  );
};

export default SignUpForm;
