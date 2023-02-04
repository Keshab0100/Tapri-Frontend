import { Box, Container, Grid, styled, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        background: "#282828",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h7" style={{ color: "#fff" }}>
              Made with ❤️
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              style={{ color: "#fff" }}
            >
              {`${new Date().getFullYear()} | Instagram | Facebook | Twitter`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
