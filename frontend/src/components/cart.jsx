import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
  Divider,
  IconButton,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function CartSidebar({ items = [], open = false, onClose, onDeleteItem }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (onClose) onClose();
    navigate("/payment");
  };

  // Delete item from localStorage and call onDeleteItem if provided
  const handleDelete = (id) => {
    const updated = items
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    if (onDeleteItem) onDeleteItem(updated); // Pass updated cart
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 350,
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "linear-gradient(180deg,rgba(20, 113, 206, 0.86) 0%, #fff 100%)", // Added gradient background
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <ShoppingCartIcon sx={{ mr: 1, color: "white" }} />
          <Typography variant="h6" fontWeight="bold" flex={1}>
            Your Cart
          </Typography>
          <Button
            onClick={onClose}
            size="small"
            sx={{ minWidth: 0, color: "white" }}
          >
            Close
          </Button>
        </Box>
        <Divider />
        <List sx={{ flex: 1, overflowY: "auto", mt: 1 }}>
          {items.length === 0 ? (
            <ListItem>
              <ListItemText primary="Cart is empty" />
            </ListItem>
          ) : (
            items.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    color="error"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  mb: 1,
                  borderRadius: 2,
                  background: "#f7fafd",
                  boxShadow: "0 1px 4px rgba(20,113,206,0.07)",
                  alignItems: "flex-start",
                }}
              >
                {item.image && (
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    variant="rounded"
                    sx={{ width: 48, height: 48, mr: 2, mt: 0.5 }}
                  />
                )}
                <ListItemText
                  primary={
                    <Typography fontWeight="bold" fontSize={16}>
                      {item.name}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Qty: {item.qty} &nbsp;|&nbsp; GHS {item.price * item.qty}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))
          )}
        </List>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Total:
          </Typography>
          <Typography variant="h6" color="primary" fontWeight="bold">
            GHS {total}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCheckout}
          disabled={items.length === 0}
          sx={{ py: 1.2, fontWeight: "bold", fontSize: 16, borderRadius: 2 }}
        >
          Proceed to Payment
        </Button>
      </Box>
    </Drawer>
  );
}

export default CartSidebar;