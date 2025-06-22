import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(180deg,rgb(20, 113, 206) 0%, #fff 100%)",
                textAlign: "center",
                p: 3,
            }}
        >
            <Typography variant="h1" color="primary" fontWeight="bold" gutterBottom>
                Lost in the Garage?
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
                Uh oh! Looks like you took a wrong turn.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                We couldn't find the page you're looking for. Maybe it's under the hood or rolled away!
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
                sx={{ fontWeight: "bold", px: 4, py: 1.5 }}
            >
                Take Me Back Home
            </Button>
        </Box>
    );
};

export default Error404;
