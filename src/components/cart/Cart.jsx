import { Box, Button, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { getOneProduct, getOrder } from "../../services/api";
import Header from "../header/Header";
import Item from "./Item";

const Content = styled(Box)`
  margin: 15px;
  border-radius: 10px;
  width: 94%;
  background: #fff;
  padding: 20px;
`;
const Items = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: 13px;
  padding: 8px;
`;

const Cart = () => {
  const { product, phone } = useContext(DataContext);
  const [productDetails, setProductDetails] = useState({});
  const [Order, setOrder] = useState({});
  const data = {
    phone: phone,
  };
  const getP = async () => {
    const details = await getOneProduct(product);
    const orders = await getOrder(data);
    console.log(orders.data.data)
    setOrder(orders.data.data);
    setProductDetails(details.data[0]);
  };
  useEffect(() => {
    getP();
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Box>
          <Typography style={{ fontSize: 22, fontWeight: 600 }}>
            Cart
          </Typography>
          <hr />
        </Box>
        <Item productDetails={productDetails} />
        {/* {
          productDetails.data[0].productId == '\0' ? (
        ) : ( */}
        {/* <Box>Cart Empty</Box> */}
        {/* )} */}
      </Content>
      <Content>
        <Box>
          <Typography style={{ fontSize: 22, fontWeight: 600 }}>
            Previous order
          </Typography>
          <hr />
        </Box>
        <Items>
          <img src={Order.url} style={{ height: 150 }} />
          <Typography style={{ padding: 15, fontSize: 18 }}>
            {Order.title}
            <br />
            <span style={{ padding: 10 }}>{Order.price}</span>
          </Typography>
        </Items>
      </Content>
    </>
  );
};

export default Cart;
