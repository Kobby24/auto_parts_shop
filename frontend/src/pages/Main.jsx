// In Main.js (or wherever your Main component is defined)
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
    CardContent,
    CardMedia,
    Button,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";

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
  const { brandName,modelName } = useParams();
  const section = sections.filter((s)=>s.label.toLocaleLowerCase()===brandName.toLocaleLowerCase()?s:null)
  // brandName will match the :brandName in your route

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
                          {brandName.toLocaleUpperCase()} Lighting Essentials
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#444" }}>
                          Headlights, Taillights & Foglights for Every {brandName.toLocaleUpperCase()} Car
                        </Typography>
                      </Box>
                      
                    </Box>
            
            <CardContent>
            
            <Grid container spacing={2} ml={3}>
                {section.map((item) => (
                  <Card
        alignItems={"center"} display="flex" flexDirection="row" 
        sx={{
            minHeight: 200,
            borderRadius: 3,
            
            maxWidth:350,
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
                        key={item.label}
                        href={item.viewLink}
                        sx={{
                            textTransform: "none",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 0,
                            mb:1,
                            background: "transparent"
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
                                background: "transparent"
                            }}
                            
                        />
                        
                        
                    </Button>
                            <Typography mt={0} mb={1} fontSize={"bold"}>{item.productName} - ${item.price}</Typography>
                            <Card alignItems={"center"} 
                            flexDirection="column" 
                            sx={{
                            minWidth: 120,
                            maxWidth:360,
                            display: "flex",
                            alignItems: "center",
                            textTransform: "none",
                           
                            p: 0,
                            flex: 1,
                            background: "transparent",
                          }}>
                              <Button 
                              sx={{
                                background: "rgba(8, 85, 162, 0.94)", 
                                mr:2, 
                                ml:3, 
                                mb:2}} >
                                <Typography color="white" fontSize={"bold"}>Add to Cart</Typography></Button>
                              <Button href={item.purchaseLink+item.id.toString()}
                              sx=

                              {{background:"rgba(1, 34, 67, 0.94)", ml:3,mb:2}}>
                              <Typography color="white" 
                              fontSize={"bold"} 
                              >
                              Order Now</Typography></Button>

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