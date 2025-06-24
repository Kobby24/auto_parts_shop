import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderNow from "./OrdeNow";
import CartSidebar from "../components/cart"; // <-- Import CartSidebar

const sections = [
  {
    id: 1,
    label: "Toyota",
    productName: "2020 1 corolla headlight",
    image: "/brands/toyota-headlight.jpg",
    viewLink: "/product/toyota/headlights/1",
    purchaseLink: `/purchase/`,
    price: 30,
    pairAvalible: true,
    leftAvalible: true,
    rightAvaible: true,
  },
  {
    id: 2,
    label: "Honda",
    productName: "2020 vivi headlight",
    image: "/brands/honda-headlight.jpg",
    viewLink: "/product/honda/headlights/2",
    purchaseLink: `/purchase/`,
    price: 34,
    pairAvalible: true,
    leftAvalible: true,
    rightAvaible: false,
  },
  {
    id: 3,
    label: "Benz",
    productName: "2020 Benz headlight",
    image: "/brands/benz-headlight.jpg",
    viewLink: "/product/benz/headlights/3",
    purchaseLink: `/purchase/`,
    price: 70,
    pairAvalible: false,
    leftAvalible: true,
    rightAvaible: true,
  },
  {
    id: 4,
    label: "Hyundai",
    productName: "2020 Hyundai headlight",
    image: "/brands/hyundai-headlight.jpg",
    viewLink: "/product/hyundai/headlights/4",
    purchaseLink: `/purchase/`,
    price: 31,
    pairAvalible: true,
    leftAvalible: false,
    rightAvaible: true,
  },
  {
    id: 5,
    label: "Ford",
    productName: "2020 Ford headlight",
    image: "/brands/ford-taillight.jpg",
    viewLink: "/product/ford/taillights/5",
    purchaseLink: `/purchase/`,
    price: 25,
    pairAvalible: false,
    leftAvalible: true,
    rightAvaible: false,
  },
  {
    id: 6,
    label: "BMW",
    productName: "2020 Ford headlight",
    image: "/brands/bmw-taillight.jpg",
    viewLink: "/product/bmw/taillights/6",
    purchaseLink: `/purchase/`,
    price: 38,
    pairAvalible: true,
    leftAvalible: true,
    rightAvaible: true,
  },
  {
    id: 7,
    label: "Honda",
    productName: "2020 Honda headlight",
    image: "/brands/honda-taillight.jpg",
    viewLink: "/product/honda/taillights/7",
    purchaseLink: `/purchase/`,
    price: 33,
    pairAvalible: false,
    leftAvalible: false,
    rightAvaible: true,
  },
  {
    id: 8,
    label: "KAI",
    productName: "2020 KAI headlight",
    image: "/brands/kai-taillight.jpg",
    viewLink: "/product/toyota/taillights/8",
    purchaseLink: `/purchase/`,
    price: 38,
    pairAvalible: true,
    leftAvalible: true,
    rightAvaible: false,
  },
  {
    id: 9,
    label: "Toyota",
    productName: "2020 Toyota headlight",
    image: "/brands/toyota-foglight.jpg",
    viewLink: "/product/toyota/foglights/9",
    purchaseLink: `/purchase/`,
    price: 12,
    pairAvalible: false,
    leftAvalible: true,
    rightAvaible: true,
  },
  {
    id: 10,
    label: "Nissan",
    productName: "2020 Nissan headlight",
    image: "/brands/nissan-foglight.jpg",
    viewLink: "/product/toyota/foglights/10",
    purchaseLink: `/purchase/`,
    price: 15,
    pairAvalible: true,
    leftAvalible: false,
    rightAvaible: true,
  },
  {
    id: 11,
    label: "Toyota",
    productName: "2020 Toyota headlight",
    image: "/logos/toyota.png",
    viewLink: "/product/toyota/headlights/11",
    purchaseLink: `/purchase/`,
    price: 30,
    pairAvalible: true,
    leftAvalible: true,
    rightAvaible: true,
  },
  {
    id: 12,
    label: "Honda",
    productName: "2020 Honda headlight",
    image: "/logos/honda.png",
    viewLink: "/product/toyota/headlights/12",
    purchaseLink: `/purchase/`,
    price: 30,
    pairAvalible: true,
    leftAvalible: true,
    rightAvaible: true,
  },
];
function Main({ cartItems, setCartItems }) {
  const { brandName, modelName } = useParams();
  const section = sections.filter(
    (s) => s.label.toLocaleLowerCase() === brandName.toLocaleLowerCase()
  );

  // Carousel images for the brand
  const carouselImages = section.slice(0, 3).map((item) => ({
    image: item.image,
    alt: item.productName,
  }));

  // Responsive: remove arrows on mobile
  const isMobile = window.innerWidth < 600;

  const sliderSettings = {
    dots: true,
    infinite: carouselImages.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile, // Hide arrows on mobile
    autoplay: true,
    autoplaySpeed: 3500,
  };

  // State for OrderNow popup
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderItem, setOrderItem] = useState(null);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Show cart sidebar if at least one item in cart
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);

  const handleOrderClick = (item) => {
    setOrderItem({
      name: item.productName,
      amount: item.price,
      pairAvalible: item.pairAvalible,
      leftAvalible: item.leftAvalible,
      rightAvaible: item.rightAvaible,
    });
    setOrderOpen(true);
  };

  const handleOrderClose = () => {
    setOrderOpen(false);
    setOrderItem(null);
  };

  // Add to Cart handler
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      // If item already in cart, increase qty
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      // Else add new item
      return [
        ...prev,
        {
          id: item.id,
          name: item.productName,
          price: item.price,
          qty: 1,
          pairAvalible: item.pairAvalible,
          leftAvalible: item.leftAvalible,
          rightAvaible: item.rightAvaible,
        },
      ];
    });
    setCartSidebarOpen(true);
  };

  // Close cart sidebar handler
  const handleCartSidebarClose = () => setCartSidebarOpen(false);

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,rgb(20, 113, 206) 0%, #fff 100%)",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* --- Carousel with overlayed text --- */}
        <Box sx={{ mb: 5, position: "relative" }}>
          <Slider {...sliderSettings}>
            {carouselImages.map((img, idx) => (
              <Box
                key={idx}
                sx={{
                  position: "relative",
                  height: { xs: 220, sm: 320, md: 380 },
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                  }}
                />
                {/* Overlayed text */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                      mb: 2,
                      letterSpacing: 1,
                    }}
                  >
                    Lighting Essentials
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                      fontWeight: 400,
                      letterSpacing: 1,
                      background: "rgba(0,0,0,0.35)",
                      borderRadius: 2,
                      px: 2,
                      py: 1,
                    }}
                  >
                    Headlights, Taillights & Foglights for Every{" "}
                    {brandName.toLocaleUpperCase()} Car
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
        {/* --- End Carousel --- */}

        <CardContent>
          <Grid
            container
            spacing={2}
            ml={{ xs: 0, sm: 1 }}
            justifyContent="center"
          >
            {section.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  alignItems={"center"}
                  display="flex"
                  flexDirection="row"
                  sx={{
                    minHeight: 200,
                    borderRadius: 3,
                    width: { xs: "100%", sm: 300 }, // changed from 350 to 300
                    maxWidth: 350,                  // changed from 400 to 350
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "transparent",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    border: "0px solid rgba(8, 85, 162, 0.03)",
                    m: { xs: 0, sm: 1 },
                  }}
                >
                  <Button
                    href={item.viewLink}
                    sx={{
                      textTransform: "none",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 0,
                      mb: 1,
                      background: "transparent",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.label}
                      sx={{
                        width: "100%",
                        maxWidth: 350,
                        height: { xs: 160, sm: 230 },
                        objectFit: "cover",
                        borderRadius: 3,
                        mb: 1,
                        background: "transparent",
                      }}
                    />
                  </Button>
                  <Typography mt={0} mb={1} fontWeight="bold" fontSize={{ xs: "1rem", sm: "1.1rem" }}>
                    {item.productName} - ${item.price}
                  </Typography>
                  <Card
                    alignItems={"center"}
                    flexDirection="column"
                    sx={{
                      minWidth: 120,
                      maxWidth: 360,
                      display: "flex",
                      alignItems: "center",
                      textTransform: "none",
                      p: 0,
                      flex: 1,
                      background: "transparent",
                    }}
                  >
                    <Button
                      sx={{
                        background: "rgba(8, 85, 162, 0.94)",
                        mr: { xs: 0, sm: 2 },
                        ml: { xs: 0, sm: 3 },
                        mb: 2,
                        width: { xs: "90%", sm: "100%" },
                      }}
                      onClick={() => handleAddToCart(item)}
                    >
                      <Typography color="white" fontWeight="bold">
                        Add to Cart
                      </Typography>
                    </Button>
                    <Button
                      onClick={() => handleOrderClick(item)}
                      sx={{
                        background: "rgba(1, 34, 67, 0.94)",
                        ml: { xs: 0, sm: 0 },
                        mr:{xs:0,sm:3},
                        mb: 2,
                        width: { xs: "90%", sm: "80%" },
                      }}
                    >
                      <Typography color="white" fontWeight="bold">
                        Order Now
                      </Typography>
                    </Button>
                  </Card>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>

        {/* OrderNow popup */}
        <OrderNow open={orderOpen} onClose={handleOrderClose} item={orderItem} />

        {/* Cart Sidebar */}
        <CartSidebar
          items={cartItems}
          open={cartSidebarOpen}
          onClose={handleCartSidebarClose}
        />
      </Container>
    </Box>
  );
}

export default Main;