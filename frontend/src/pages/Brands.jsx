import React from "react";
import { Container, Typography, Grid, Button, Box, Paper } from "@mui/material";

const brands = [
  {
    name: "Toyota",
    logo: "/logos/toyota.png",
    link: "/brands/toyota",
  },
  {
    name: "Honda",
    logo: "/logos/honda.png",
    link: "/brands/honda",
  },
  {
    name: "Ford",
    logo: "/logos/ford.png",
    link: "/brands/ford",
  },
  {
    name: "BMW",
    logo: "/logos/bmw.png",
    link: "/brands/bmw",
  },
  {
    name: "Mercedes",
    logo: "/logos/mercedes.png",
    link: "/brands/mercedes",
  },
  {
    name: "Nissan",
    logo: "/logos/nissan.png",
    link: "/brands/nissan",
  },
  {
    name: "Chevrolet",
    logo: "/logos/chevrolet.png",
    link: "/brands/chevrolet",
  },
  {
    name: "Hyundai",
    logo: "/logos/hyundai.png",
    link: "/brands/hyundai",
  },
  {
    name: "Kia",
    logo: "/logos/kia.png",
    link: "/brands/kia",
  },
  {
    name: "Volkswagen",
    logo: "/logos/volkswagen.png",
    link: "/brands/volkswagen",
  },
];

function Brands() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Brands We Carry
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={4}>
          We offer headlights, taillights, and fog lights for these top automotive brands. Click a brand logo to explore available parts!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {brands.map((brand) => (
            <Grid item xs={6} sm={4} md={3} key={brand.name}>
              <Button
                href={brand.link}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  background: "#fff",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.06)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  component="img"
                  src={brand.logo}
                  alt={brand.name + " logo"}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                    mb: 1,
                  }}
                />
                <Typography variant="subtitle1" fontWeight="medium" color="primary">
                  {brand.name}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Brands;