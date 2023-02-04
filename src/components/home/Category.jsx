import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Chai from '../../asset/images/chai.png'
import More from '../../asset/images/More.png'
import Coffee from '../../asset/images/coffee.jpg'
import Snacks from '../../asset/images/snacks.png'
import Best from '../../asset/images/Best.png'

const Container = styled(Box)`
  margin: 15px 25px;
  display: flex;
  background: #fff;
  padding: 15px;
  flex-direction: row;
  justify-content: space-around;
`;

const Category = () => {
  return (
    <Container>
      <Box>
        <img
          src={Best}
          style={{ borderRadius: "50%", width: 120 }}
        />
        <Typography style={{ marginLeft: "18%" }}>Best Seller</Typography>
      </Box>
      <Box>
        <img
          src={Chai}
          style={{ borderRadius: "50%", width: 120 }}
        />
        <Typography style={{ marginLeft: "33%" }}>Chai</Typography>
      </Box>
      <Box>
        <img
          src={Coffee}
          style={{ borderRadius: "50%", width: 120 }}
        />
        <Typography style={{ marginLeft: "28.5%" }}>Coffee</Typography>
      </Box>
      <Box>
        <img
          src={Snacks}
          style={{ borderRadius: "50%", width: 120 }}
        />
        <Typography style={{ marginLeft: "27%" }}>Snacks</Typography>
      </Box>
      <Box>
        <img
          src={More}
          style={{ borderRadius: "50%", width: 120 }}
        />
        <Typography style={{ marginLeft: "33%" }}>More</Typography>
      </Box>
    </Container>
  );
};

export default Category;
