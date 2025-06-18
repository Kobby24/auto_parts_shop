import React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const products = [
  {
    id: 1,
    name: "Headlight",
    price: 120,
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=600",
  },
  {
    id: 2,
    name: "Taillight",
    price: 80,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Foglight",
    price: 60,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "LED Headlight",
    price: 150,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Halogen Taillight",
    price: 90,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=1200",
  },
  {
    id: 6,
    name: "Xenon Foglight",
    price: 110,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=500&q=80",
  },
];

// Replace with your desired background image URL
const backgroundImageUrl = "/bg.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Image background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          opacity: 0.89,
        }}
      />
      {/* Overlay for slight darkening */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.3)",
          zIndex: -1,
        }}
      />
      <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ color: "#fff", textShadow: "0 2px 8px #000" }}>
         24 Auto Parts
        </Typography>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                bgcolor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: 8 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  ${product.price}
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
};

export default Home;
