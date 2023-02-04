import { Button, styled, Typography, Box } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { addOrder } from "../../services/api";

const CusBut = styled(Button)`
  background: #1dad4a;
  color: #fff;
  fontsize: 12;
  margin-left: 90%;
`;
const Items = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: 13px;
  padding: 8px;
`;

const Item = ({productDetails}) => {
    const {product, phone } = useContext(DataContext)
    const navigate = useNavigate()

    const confirmOrder= ()=>{
        const data = {
            "phone" : phone,
            "productId" : product
        }
        addOrder(data)
        console.log(data)
        alert("Congratulations 🎉, Order Successfull")
        navigate('/')
    }

  return (
    <>
      {
          (productDetails)? (
        <>
          <Items>
            <img src={productDetails.url} style={{ height: 150 }} />
            <Typography style={{ padding: 15, fontSize: 22 }}>
              {productDetails.title}
              <br />
            </Typography>
          </Items>
          <hr />
          <h2>Total : {productDetails.price}</h2>
          <CusBut variant="outlined" onClick={()=>confirmOrder()}>Pay Now</CusBut>
        </>
      ) : (
        <Box>Cart Empty</Box>
      )}
    </>
  );
};

export default Item;
