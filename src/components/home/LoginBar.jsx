import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  background: #1e3932;
  padding: 5px;
`;
const LoadContainer = styled(Box)`
  display: flex;
  flex-direction : row;
  justify-content: space-between 

`
const LoginBar = () => {
  const { account } = useContext(DataContext);

  return (
    <Container>
      <Typography
        style={{ fontFamily: "Fredoka One", marginLeft: 20, color: "#fff" }}
      >
        {account ? (
          <LoadContainer>
            <Typography style={{padding: "10px", fontSize: 18}}>What would you like to order?</Typography>
            <Box style={{display: "flex", flexDirection:"row", padding: "10px"}}>
            {/* <Link to="/" style={{marginRight: 15, color: "#fff"}}>Cart</Link> */}
            <Link to="/cart" style={{ color: "#fff"}}>Previous Order</Link>
            </Box>
          </LoadContainer>
        ) : (
          <Link to="/login" style={{ color: "#fff" }}>
            Login/SignUp to Order Now
          </Link>
        )}
      </Typography>
    </Container>
  );
};

export default LoginBar;
