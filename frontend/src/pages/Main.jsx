import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  useMediaQuery,
  Divider,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sections = [
  
    
      {id:1,
        label: "Toyota",
        productName:"2020 corolla headlight",
        image: "/brands/toyota-headlight.jpg",
        viewLink: "/product/toyota/headlights",
        purchaseLink:`/purchase/`,
        price:30
      },
      {
        id:2,
        label: "Honda",
        productName:"2020 civi headlight",
        image: "/brands/honda-headlight.jpg",
        viewLink: "/product/honda/headlights",
        purchaseLink:`/purchase/`,
        price:34
      },
      {
        id:3,
        label: "Benz",
        productName:"2020 Benz headlight",
        image: "/brands/benz-headlight.jpg",
        viewLink: "/product/benz/headlights",
        purchaseLink:`/purchase/`,
        price:70
      },
      {
        id:4,
        label: "Hyundai",
        productName:"2020 Hyundai headlight",
        image: "/brands/hyundai-headlight.jpg",
        viewLink: "/product/hyundai/headlights",
        purchaseLink:`/purchase/`,
        price:31
      },
    
  
      {
        id:5,
        label: "Ford",
        productName:"2020 Ford headlight",
        image: "/brands/ford-taillight.jpg",

        viewLink: "/product/ford/taillights",
        purchaseLink:`/purchase/`,
        price:25
      },
      {
        id:6,
        label: "BMW",
        productName:"2020 Ford headlight",
        image: "/brands/bmw-taillight.jpg",
        viewLink: "/product/bmw/taillights",
        purchaseLink:`/purchase/`,
        price:38
      },{
        id:7,
        label: "Honda",
        productName:"2020 Honda headlight",
        image: "/brands/honda-taillight.jpg",
        viewLink: "/product/honda/taillights",
        purchaseLink:`/purchase/`,
        price:33
      },
      {
        id:8,
        label: "KAI",
        productName:"2020 KAI headlight",
        image: "/brands/kai-taillight.jpg",
        viewLink: "/product/toyota/taillights",
        purchaseLink:`/purchase/`,
        price:38
      },
   
    
      {
        id:9,
        label: "Toyota",
        productName:"2020 Toyota headlight",
        image: "/brands/toyota-foglight.jpg",
        viewLink: "/product/toyota/foglights",
        purchaseLink:`/purchase/`,
        price:12
      },
      {
        id:10,
        label: "Nissan",
        productName:"2020 Nissan headlight",
        image: "/brands/nissan-foglight.jpg",
        viewLink: "/product/toyota/foglights",
        purchaseLink:`/purchase/`,
        price:15
      },
   
  
      {
        id:11,
        label: "Toyota",
        productName:"2020 Toyota headlight",
        image: "/logos/toyota.png",
        viewLink: "/product/toyota/headlights",
        purchaseLink:`/purchase/`,
        price:30
      },
      {
        id:12,
        label: "Honda",
        productName:"2020 Honda headlight",
        image: "/logos/honda.png",
        viewLink: "/product/toyota/headlights",
        purchaseLink:`/purchase/`,
        price:30
      },
    
];
function Main() {
  const { brandName, modelName } = useParams();
  const section = sections.filter(
    (s) => s.label.toLocaleLowerCase() === brandName.toLocaleLowerCase()
  );

  // Carousel images for the brand
  const carouselImages = section.slice(0, 3).map((item) => ({
    image: item.image,
    alt: item.productName,
  }));

  const sliderSettings = {
    dots: true,
    infinite: carouselImages.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };

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
                    Headlights, Taillights & Foglights for Every {brandName.toLocaleUpperCase()} Car
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
        {/* --- End Carousel --- */}

        <CardContent>
          <Grid container spacing={2} ml={3}>
            {section.map((item) => (
              <Card
                key={item.id}
                alignItems={"center"}
                display="flex"
                flexDirection="row"
                sx={{
                  minHeight: 200,
                  borderRadius: 3,
                  maxWidth: 350,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "transparent",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "0px solid rgba(8, 85, 162, 0.03)",
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
                      width: 350,
                      height: 230,
                      objectFit: "cover",
                      borderRadius: 3,
                      mb: 1,
                      background: "transparent",
                    }}
                  />
                </Button>
                <Typography mt={0} mb={1} fontSize={"bold"}>
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
                      mr: 2,
                      ml: 3,
                      mb: 2,
                    }}
                  >
                    <Typography color="white" fontSize={"bold"}>
                      Add to Cart
                    </Typography>
                  </Button>
                  <Button
                    href={item.purchaseLink + item.id.toString()}
                    sx={{
                      background: "rgba(1, 34, 67, 0.94)",
                      ml: 3,
                      mb: 2,
                    }}
                  >
                    <Typography color="white" fontSize={"bold"}>
                      Order Now
                    </Typography>
                  </Button>
                </Card>
              </Card>
            ))}
          </Grid>
        </CardContent>

      </Container>

    </Box>
  );
}

export default Main;