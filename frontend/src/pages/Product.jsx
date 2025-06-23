import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Paper,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import OrderNow from "../pages/OrdeNow";
import SectionCard from "../components/Section"; // Make sure this import is correct
import CartSidebar from "../components/cart";

const sections = [
    {
        id: 1,
        label: "Toyota",
        productName: "2020 1 corolla headlight",
        image: "/brands/toyota-headlight.jpg",
        viewLink: "/product/toyota/headlights",
        purchaseLink: `/purchase/`,
        price: 30,
        pairAvalible: true,
        leftAvalible: true,
        rightAvaible: true,
        description: "High-quality headlight for 2020 Toyota Corolla, suitable for left, right, or pair replacement."
    },
    {
        id: 2,
        label: "Honda",
        productName: "2020 vivi headlight",
        image: "/brands/honda-headlight.jpg",
        viewLink: "/product/honda/headlights",
        purchaseLink: `/purchase/`,
        price: 34,
        pairAvalible: true,
        leftAvalible: true,
        rightAvaible: false,
        description: "Durable headlight for 2020 Honda Vivi, available for left side or as a pair."
    },
    {
        id: 3,
        label: "Benz",
        productName: "2020 Benz headlight",
        image: "/brands/benz-headlight.jpg",
        viewLink: "/product/benz/headlights",
        purchaseLink: `/purchase/`,
        price: 70,
        pairAvalible: false,
        leftAvalible: true,
        rightAvaible: true,
        description: "Premium headlight for 2020 Benz models, fits both left and right sides."
    },
    {
        id: 4,
        label: "Hyundai",
        productName: "2020 Hyundai headlight",
        image: "/brands/hyundai-headlight.jpg",
        viewLink: "/product/hyundai/headlights",
        purchaseLink: `/purchase/`,
        price: 31,
        pairAvalible: true,
        leftAvalible: false,
        rightAvaible: true,
        description: "Reliable headlight for 2020 Hyundai, available as a pair or right side only."
    },
    {
        id: 5,
        label: "Ford",
        productName: "2020 Ford headlight",
        image: "/brands/ford-taillight.jpg",
        viewLink: "/product/ford/taillights",
        purchaseLink: `/purchase/`,
        price: 25,
        pairAvalible: false,
        leftAvalible: true,
        rightAvaible: false,
        description: "Affordable headlight for 2020 Ford, left side replacement only."
    },
    {
        id: 6,
        label: "BMW",
        productName: "2020 Ford headlight",
        image: "/brands/bmw-taillight.jpg",
        viewLink: "/product/bmw/taillights",
        purchaseLink: `/purchase/`,
        price: 38,
        pairAvalible: true,
        leftAvalible: true,
        rightAvaible: true,
        description: "Versatile headlight for BMW, fits both sides or as a pair."
    },
    {
        id: 7,
        label: "Honda",
        productName: "2020 Honda headlight",
        image: "/brands/honda-taillight.jpg",
        viewLink: "/product/honda/taillights",
        purchaseLink: `/purchase/`,
        price: 33,
        pairAvalible: false,
        leftAvalible: false,
        rightAvaible: true,
        description: "Right side headlight for 2020 Honda, high durability and performance."
    },
    {
        id: 8,
        label: "KAI",
        productName: "2020 KAI headlight",
        image: "/brands/kai-taillight.jpg",
        viewLink: "/product/toyota/taillights",
        purchaseLink: `/purchase/`,
        price: 38,
        pairAvalible: true,
        leftAvalible: true,
        rightAvaible: false,
        description: "Headlight for 2020 KAI, available as a pair or left side."
    },
    {
        id: 9,
        label: "Toyota",
        productName: "2020 Toyota headlight",
        image: "/brands/toyota-foglight.jpg",
        viewLink: "/product/toyota/foglights",
        purchaseLink: `/purchase/`,
        price: 12,
        pairAvalible: false,
        leftAvalible: true,
        rightAvaible: true,
        description: "Foglight for 2020 Toyota, fits left or right side."
    },
    {
        id: 10,
        label: "Nissan",
        productName: "2020 Nissan headlight",
        image: "/brands/nissan-foglight.jpg",
        viewLink: "/product/toyota/foglights",
        purchaseLink: `/purchase/`,
        price: 15,
        pairAvalible: true,
        leftAvalible: false,
        rightAvaible: true,
        description: "Foglight for 2020 Nissan, available as a pair or right side."
    },
    {
        id: 11,
        label: "Toyota",
        productName: "2020 Toyota headlight",
        image: "/logos/toyota.png",
        viewLink: "/product/toyota/headlights",
        purchaseLink: `/purchase/`,
        price: 30,
        pairAvalible: true,
        leftAvalible: true,
        rightAvaible: true,
        description: "Standard headlight for 2020 Toyota, fits both sides or as a pair."
    },
    {
        id: 12,
        label: "Honda",
        productName: "2020 Honda headlight",
        image: "/logos/honda.png",
        viewLink: "/product/toyota/headlights",
        purchaseLink: `/purchase/`,
        price: 30,
        pairAvalible: true,
        leftAvalible: true,
        rightAvaible: true,
        description: "Standard headlight for 2020 Honda, suitable for left, right, or pair replacement."
    },
];


const Sections = ({ cartItems, setCartItems }) => {
    const { brandName, modelName,prod_id} = useParams();
  const [filteredSections, setFilteredSections] = useState([]);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [orderNowOpen, setOrderNowOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const handleCartSidebarClose = () => setCartSidebarOpen(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const filtered = sections.filter(section => {
      const matchesBrand = section.label.toLowerCase() === brandName.toLowerCase();
      const matchesModel = modelName ? section.productName.toLowerCase().includes(modelName.toLowerCase()) : true;
      const notProdId = section.id !== Number(prod_id);
      return matchesBrand && matchesModel && notProdId;
    });
    const mainItem = sections.find(section => section.id === Number(prod_id));
    setFilteredSections({ mainItem: mainItem, filteredSections: filtered });
  }, [brandName, modelName, prod_id]);
  console.log("Filtered Sections:", filteredSections);
  if (!filteredSections.mainItem) return null;
  const mainItem = filteredSections.mainItem;

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

  // Image zoom handlers
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;
    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));
    setZoomPosition({ x, y });
  };


  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,rgb(20, 113, 206) 0%, #fff 100%)",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mt: 4,
          px: { xs: 2, md: 8 }
        }}
      >
        {/* Main Image with Zoom and Pop-up */}
        <Box sx={{ flex: 1, minWidth: 320, position: "relative", ml: { xs: 0, md: 4 } }}>
          {/* Added ml for extra left margin on desktop */}
          <Paper
            elevation={3}
            sx={{
              overflow: "hidden",
              borderRadius: 3,
              cursor: "zoom-in",
              width: "100%",
              aspectRatio: "auto",
              position: "relative",
            }}
            onMouseEnter={() => setZoomed(true)}
            onMouseLeave={() => setZoomed(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setShowImageDialog(true)}
          >
            <Box
              component="img"
              src={mainItem.image}
              alt={mainItem.productName}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "transform 0.2s, transform-origin 0.2s",
                transform: zoomed ? "scale(2)" : "scale(1)",
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "rgba(255,255,255,0.7)",
                zIndex: 2,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setShowImageDialog(true);
              }}
            >
              <ZoomInIcon />
            </IconButton>
          </Paper>
          {/* Image Pop-up Dialog */}
          <Dialog open={showImageDialog} onClose={() => setShowImageDialog(false)} maxWidth="md">
            <DialogContent sx={{ p: 0, bgcolor: "#000" }}>
              <Box
                component="img"
                src={mainItem.image}
                alt={mainItem.productName}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  display: "block",
                  mx: "auto",
                  objectFit: "contain",
                  background: "#000",
                }}
              />
            </DialogContent>
          </Dialog>
        </Box>

        {/* Description and Actions */}
        <Box sx={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" fontWeight="bold">
            {mainItem.productName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {mainItem.label}
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            {mainItem.description}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            GHS {mainItem.price}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              ml: { xs: 0, sm: 15 }, // Remove left margin on mobile, keep on desktop
              justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              sx={{ fontWeight: "bold", px: 3 }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              color="rgba(1, 34, 67, 0.94)"
              onClick={() => setOrderNowOpen(true)}
              sx={{ fontWeight: "bold", px: 3 }}
            >
              Order Now
            </Button>
          </Box>
        </Box>

        {/* Order Now Dialog */}
        <OrderNow
          open={orderNowOpen}
          onClose={() => setOrderNowOpen(false)}
          item={{
            ...mainItem,
            name: mainItem.productName,
            amount: mainItem.price,
          }}
        />
      </Box>

      {/* Related Products Section */}
      {filteredSections.filteredSections && filteredSections.filteredSections.length > 0 && (
        <Box sx={{ mt: 8, px: { xs: 2, md: 8 } }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
            Related Products
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {filteredSections.filteredSections.map((item) => (
              <SectionCard key={item.id} section={item} />
            ))}
          </Box>
        </Box>
      )}
      <CartSidebar
                items={cartItems}
                open={cartSidebarOpen}
                onClose={handleCartSidebarClose}
              />
    </Box>
  );
};

export default Sections;