import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionCard from "../components/Section"
import BrandModelsSection from "../components/BrandModels";

// Example data for sections
const sections = [
  {
    title: "Headlights for Every Drive",
    items: [
      {
        label: "Toyota",
        image: "/brands/toyota-headlight.jpg",
        link: "/brands/toyota/headlights",
      },
      {
        label: "Honda",
        image: "/brands/honda-headlight.jpg",
        link: "/brands/honda/headlights",
      },
      {
        label: "Benz",
        image: "/brands/benz-headlight.jpg",
        link: "/brands/benz/headligts",
      },
      {
        label: "Hyundai",
        image: "/brands/hyundai-headlight.jpg",
        link: "/brands/hyundai/headlight",
      },
    ],
  },
  {
    title: "Taillights Collection",
    items: [
      {
        label: "Ford",
        image: "/brands/ford-taillight.jpg",
        link: "/brands/ford/taillight",
      },
      {
        label: "BMW",
        image: "/brands/bmw-taillight.jpg",
        link: "/brands/bmw/taillight",
      },{
        label: "Honda",
        image: "/brands/honda-taillight.jpg",
        link: "/brands/honda/taillight",
      },
      {
        label: "KAI",
        image: "/brands/kai-taillight.jpg",
        link: "/brands/kai/taillight",
      },
    ],
  },
  {
    title: "Foglights for All Weather",
    items: [
      {
        label: "Toyota",
        image: "/brands/toyota-foglight.jpg",
        link: "/brands/toyota/foglight",
      },
      {
        label: "Nissan",
        image: "/brands/nissan-foglight.jpg",
        link: "/brands/nissan/foglight",
      },
    ],
  },
  {
    title: "Shop by Brand",
    items: [
      {
        label: "Toyota",
        image: "/logos/toyota.png",
        link: "/brands/toyota",
      },
      {
        label: "Honda",
        image: "/logos/honda.png",
        link: "/brands/honda",
      },
    ],
  },
];

// Example data for brand models section
const brandModels = [
  {
    brand: "Toyota",
    logo: "/logos/toyota.png",
    models: {
      Headlight: [
        { name: "Camry", image: "/models/toyota-camry-headlight.jpg", link: "/brands/toyota/camry/headlight" },
        { name: "Corolla", image: "/models/toyota-corolla-headlight.jpg", link: "/brands/toyota/corolla/headlight" },
        { name: "RAV4", image: "/models/toyota-rav4-headlight.jpg", link: "/brands/toyota/rav4/headlight" },
      ],
      Taillight: [
        { name: "Camry", image: "/models/toyota-camry-taillight.jpg", link: "/brands/toyota/camry/taillight" },
        { name: "Corolla", image: "/models/toyota-corolla-taillight.jpg", link: "/brands/toyota/corolla/taillight" },
        { name: "RAV4", image: "/models/toyota-rav4-taillight.jpg", link: "/brands/toyota/rav4/taillight" },
      ],
      Foglight: [
        { name: "Camry", image: "/models/toyota-camry-foglight.jpg", link: "/brands/toyota/camry/foglight" },
        { name: "Corolla", image: "/models/toyota-corolla-foglight.jpg", link: "/brands/toyota/corolla/foglight" },
        { name: "RAV4", image: "/models/toyota-rav4-foglight.jpg", link: "/brands/toyota/rav4/foglight" },
      ],
    },
  },
  {
    brand: "Honda",
    logo: "/logos/honda.png",
    models: {
      Headlight: [
        { name: "Civic", image: "/models/honda-civic-headlight.jpg", link: "/brands/honda/civic/headlight" },
        { name: "Accord", image: "/models/honda-accord-headlight.jpg", link: "/brands/honda/accord/headlight" },
        { name: "CR-V", image: "/models/honda-crv-headlight.jpg", link: "/brands/honda/crv/headlight" },
      ],
      Taillight: [
        { name: "Civic", image: "/models/honda-civic-taillight.jpg", link: "/brands/honda/civic/taillight" },
        { name: "Accord", image: "/models/honda-accord-taillight.jpg", link: "/brands/honda/accord/taillight" },
        { name: "CR-V", image: "/models/honda-crv-taillight.jpg", link: "/brands/honda/crv/taillight" },
      ],
      Foglight: [
        { name: "Civic", image: "/models/honda-civic-foglight.jpg", link: "/brands/honda/civic/foglight" },
        { name: "Accord", image: "/models/honda-accord-foglight.jpg", link: "/brands/honda/accord/foglight" },
        { name: "CR-V", image: "/models/honda-crv-foglight.jpg", link: "/brands/honda/crv/foglight" },
      ],
    },
  },
  // Add more brands as needed
];

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  // Section Card
 

  // Brand Models Section
  

  return (
    <Box sx={{ background: "linear-gradient(180deg,rgb(20, 113, 206) 0%, #fff 100%)", minHeight: "100vh", py: 4}}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            gap: 2,
          }}
        >
          <Box alignItems={"center"} display="flex" flexDirection="column" sx={{ flex: 1 }}>
            <Typography variant="h3" fontWeight="bold" sx={{ color: "#222" }}>
              Auto Lighting Essentials
            </Typography>
            <Typography variant="h6" sx={{ color: "#444" }}>
              Headlights, Taillights & Foglights for Every Car
            </Typography>
          </Box>
          
        </Box>
        {isMobile ? (
          <Slider {...sliderSettings}>
            {sections.map((section, idx) => (
              <Box key={idx} px={1}>
                <SectionCard section={section} />
              </Box>
            ))}
          </Slider>
        ) : (
          <Grid container spacing={3} alignItems={"center"} display="flex" ml={"6%"}  sx={{ flex: 2 }}>
            {sections.map((section, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <SectionCard section={section} />
              </Grid>
            ))}
          </Grid>
        )}
        <Divider sx={{ my: 6 }} />
        <BrandModelsSection brandModels={brandModels}/>
      </Container>
    </Box>
  );
}

export default Home;
