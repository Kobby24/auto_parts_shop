import React from "react";
import { Box, Container, Typography, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/X";

const Footer = () => {
     const thisYear = new Date().getFullYear()
     return(
    <Box
        component="footer"
        sx={{
            bgcolor: "primary.dark",
            color: "common.white",
            py: 3,
            mt: 4,
        }}
    >
        <Container maxWidth="md">
            <Typography variant="body2" align="center" gutterBottom>
                © {thisYear} 24Auto Parts. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <Typography variant="body2">Follow us on</Typography>
                <Link
                    href="https://facebook.com"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FacebookIcon />
                </Link>
                <Link
                    href="https://x.com/KobbyGilbert1"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <TwitterIcon />
                </Link>
            </Stack>
        </Container>
    </Box>
)};

export default Footer;