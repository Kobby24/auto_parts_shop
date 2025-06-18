import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Paper, Fade, Slide, Grow } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

function AboutUs() {
    return (
        <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
            <Grow in timeout={700}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Slide direction="down" in timeout={600}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <DirectionsCarIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                            <Typography variant="h3" component="h1" fontWeight="bold">
                                About Us
                            </Typography>
                        </Box>
                    </Slide>
                    <Fade in timeout={900}>
                        <Typography variant="body1" color="text.secondary" mb={3}>
                            Welcome to <b>BrightDrive Auto Parts</b>, your trusted destination for high-quality headlights, taillights, and fog lights.
                            With years of experience in the automotive lighting industry, we are dedicated to helping drivers see and be seen on the road.
                        </Typography>
                    </Fade>
                    <Slide direction="right" in timeout={800}>
                        <Typography variant="h5" component="h2" color="primary" gutterBottom>
                            Our Mission
                        </Typography>
                    </Slide>
                    <Fade in timeout={1000}>
                        <Typography variant="body1" mb={3}>
                            Our mission is to provide reliable, affordable, and stylish lighting solutions for all types of vehicles.
                            Whether you need to replace a broken headlight, upgrade your taillights, or enhance your visibility with new fog lights,
                            we have the right products for you.
                        </Typography>
                    </Fade>
                    <Slide direction="right" in timeout={900}>
                        <Typography variant="h5" component="h2" color="primary" gutterBottom>
                            Why Choose Us?
                        </Typography>
                    </Slide>
                    <List>
                        {[
                            "Wide selection of headlights, taillights, and fog lights for most car makes and models",
                            "Top brands and quality-tested products",
                            "Expert advice and friendly customer service",
                            "Fast shipping and hassle-free returns",
                            "Competitive prices"
                        ].map((text, idx) => (
                            <Grow in timeout={700 + idx * 200} key={text}>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </Grow>
                        ))}
                    </List>
                    <Box mt={4} display="flex" alignItems="center">
                        <Slide direction="left" in timeout={1000}>
                            <ContactSupportIcon color="primary" sx={{ mr: 1 }} />
                        </Slide>
                        <Fade in timeout={1200}>
                            <Typography variant="h6" component="h3">
                                Contact Us
                            </Typography>
                        </Fade>
                    </Box>
                    <Fade in timeout={1300}>
                        <Typography variant="body1" mt={1}>
                            Have questions or need help finding the right part? Our knowledgeable team is here to assist you.
                            Reach out to us anytime and experience the BrightDrive difference!
                        </Typography>
                    </Fade>
                </Paper>
            </Grow>
        </Container>
    );
}

export default AboutUs;