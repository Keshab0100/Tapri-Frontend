import { Box, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { authLogin } from "../../services/api";

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

const loginInitialValues = {
  phone: "",
  password: "",
};

const LoginForm = () => {
  const [login, setLogin] = useState(loginInitialValues);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const { setAccount, setPhone } = useContext(DataContext);

  const loginUser = async () => {
    let response = await authLogin(login);
    if (!response) alert("no user found");
    else{
      setAccount(true)
      setPhone(login.phone)
      alert("login success");
    } 
      
  };

  return (
    <>
      <Container>
        <Content>
          <LeftContainer>
            <img src="https://picsum.photos/200" style={{ width: "80%" }} />
          </LeftContainer>
          <RightContainer>
            <div>
              <h2>Login</h2>
                <p>
                  <label>Phone Number</label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    required
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                  />
                </p>
                <p>
                  <label>Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={(e) => onValueChange(e)}
                  />
                </p>
                <p><Link to="/">
                  <button id="sub_btn" type="submit" onClick={loginUser}>
                    Login
                  </button>
                  </Link>
                </p>
              <footer>
                <p>
                  First time? <Link to="/signup">Create an account</Link>.
                </p>
                <p>
                  <Link to="/">Back to Homepage</Link>.
                </p>
              </footer>
            </div>
          </RightContainer>
        </Content>
      </Container>
    </>
  );
};

export default LoginForm;
