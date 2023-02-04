import { Box, styled } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Category from "./Category";
import LoginBar from "./LoginBar";
import Products from "./Products";

const Container = styled(Box)`
  background: #f0f0f0;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <LoginBar />
      <Category />
      <Products />
      <Box style={{ heigth: 15 }}>{"."}</Box>
      <Footer/>
    </Container>
  );
};

export default Home;
