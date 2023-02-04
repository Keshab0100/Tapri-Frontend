import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { getProduct } from "../../services/api";

const Container = styled(Box)`
  margin: 15px 25px;
  display: flex;
  background: #fff;
  padding: 15px;
  justify-content: space-around;
`;

const Products = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getProduct();
    setData(data.data);
  };
  const { setProduct, product, account} = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <Container>
      {Data.map((item) => (
        <Card sx={{ maxWidth: 220 }}>
          <img src={item.url} style={{ height: 170 }} />
          <CardContent style={{ background: "#f0f0f0" }}>
            <Typography gutterBottom variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
          <CardActions style={{ background: "#f0f0f0" }}>
            <Button
              size="small"
              style={{ background: "#1dad4a", color: "#fff", fontSize: 12 }}
              onClick={async () => {
                if (account != null) {
                  await setProduct(item.productId);
                  navigate("/cart");
                } else {
                  alert("Please Login/Signup First");
                }
              }}
            >
              Order Now
            </Button>
            {/* <Button
              size="small"
              style={{ background: "#1dad4a", color: "#fff", fontSize: 12 }}
            >
              Add to Cart
            </Button> */}
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Products;
