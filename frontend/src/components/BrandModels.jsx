import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  Button,
} from "@mui/material";


const BrandModelsSection = ({brandModels}) => (
    <Box mt={8}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Popular Models by Brand
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" mb={4}>
        Explore our most popular headlight, taillight, and foglight models for each brand.
      </Typography>
      <Grid container spacing={4}>
        {brandModels.map((brand) => (
          <Grid item xs={12} md={6} key={brand.brand}>
            <Card
              sx={{
                p: 2,
                background: "rgba(255,255,255,0.35)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <Box display="flex" alignItems="center" mb={2}>
                <Box
                  component="img"
                  src={brand.logo}
                  alt={brand.brand + " logo"}
                  sx={{ width: 48, height: 48, mr: 2 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {brand.brand}
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {["Headlight", "Taillight", "Foglight"].map((type) => (
                  <Grid item xs={12} sm={4} key={type}>
                    <Typography variant="subtitle2" align="center" gutterBottom fontWeight={"bold"}>
                      {type}
                    </Typography>
                    {/* Slider/scrollable container for models */}
                    <Box
                      sx={{
                        display: "flex",
                        overflowX: "auto",
                        gap: 2,
                        pb: 1,
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                          height: 8,
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#ccc",
                          borderRadius: 4,
                        },
                      }}
                    >
                      {brand.models[type].map((model) => (
                        <Button
                          key={model.name}
                          href={model.link}
                          sx={{
                            minWidth: 120,
                            maxWidth: 160,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textTransform: "none",
                            mb: 1,
                            p: 0,
                            background: "transparent",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={model.image}
                            alt={model.name}
                            sx={{
                              width: "100%",
                              height: 100,
                              objectFit: "cover",
                              borderRadius: 2,
                              mb: 0.5,
                            }}
                          />
                          <Typography variant="caption" color="text.primary" fontWeight={"bold"}>
                            {model.name}
                          </Typography>
                        </Button>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  export default BrandModelsSection;