import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Tapri from '../../asset/images/tapri.png'

const Name = styled(Link)`
  background: #fff;
  display: flex;
  padding: 10px;
  justify-content: center;
`;
const Header = () => {
  return (
    <>
      <Name to="/">
        <img
          src={Tapri}
          style={{ width: 155, height: 65 }}
        />
      </Name>
    </>
  );
};

export default Header;
