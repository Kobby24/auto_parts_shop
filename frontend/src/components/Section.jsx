import React from "react";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/material";

const SectionCard = ({ section }) => (
    <Card
        alignItems={"center"}
        display="flex"
        flexDirection="column"
        sx={{
            minHeight: 200,
            width: { xs: '100%', sm: 500 }, // Full width on mobile, fixed on desktop
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            mx: { xs: 0, sm: "auto" }, // Remove horizontal margin on mobile, center on desktop
        }}
    >
        <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                {section.title}
            </Typography>
            <Masonry columns={2} spacing={2}>
                {section.items ? section.items.map((item) => (
                    <Button
                        key={item.label}
                        href={item.link}
                        sx={{
                            textTransform: "none",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            p: 0,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.label}
                            sx={{
                                width: "100%",
                                height: { xs: 90, sm: 130 }, // Smaller image on mobile
                                objectFit: "cover",
                                borderRadius: 3,
                                mb: 1,
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="text.primary"
                            fontWeight="bold"
                        >
                            {item.label}
                        </Typography>
                    </Button>
                ))  : ( section.map((item) => (
                    <Button
                        key={item.label}
                        href={item.link}
                        sx={{
                            textTransform: "none",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            p: 0,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.label}
                            sx={{
                                width: "100%",
                                height: { xs: 90, sm: 130 }, // Smaller image on mobile
                                objectFit: "cover",
                                borderRadius: 3,
                                mb: 1,
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="text.primary"
                            fontWeight="bold"
                        >
                            {item.label}
                        </Typography>
                    </Button>)))}
            </Masonry>
        </CardContent>
    </Card>
);

export default SectionCard;
