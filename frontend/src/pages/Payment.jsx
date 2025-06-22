import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Chip,
  Avatar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const PAYMENT_METHODS = [
  { label: "MTN MoMo", value: "mtn" },
  { label: "Telecel Cash", value: "telecel" },
];

const SIDE_OPTIONS = [
  { label: "Pair", value: "pair" },
  { label: "Right", value: "right" },
  { label: "Left", value: "left" },
];

function PaymentPage() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("mtn");
  const [sideSelections, setSideSelections] = useState({});
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    setCartItems(stored ? JSON.parse(stored) : []);
  }, []);

  useEffect(() => {
    if (cartItems.length > 3) {
      setOrderMessage(
        "If you order more than three items, payment is required before delivery."
      );
    } else {
      setOrderMessage("");
    }
  }, [cartItems]);

  const handleDelete = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleSideChange = (id, value) => {
    setSideSelections((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => {
    // Implement payment logic here
    alert(
      `Payment method: ${paymentMethod}\nTotal: GHS ${total}\nOrder placed!`
    );
    // Optionally clear cart
    // localStorage.removeItem("cartItems");
    // setCartItems([]);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Make a Payment
      </Typography>
      {orderMessage && (
        <Alert severity="info" sx={{ mb: 2 }}>
          {orderMessage}
        </Alert>
      )}
      <Typography variant="h6" gutterBottom>
        Your Order
      </Typography>
      <List>
        {cartItems.length === 0 ? (
          <ListItem>
            <ListItemText primary="Your cart is empty." />
          </ListItem>
        ) : (
          cartItems.map((item) => {
            // Dynamically build available sides based on item properties
            const availableSides = [];
            if (item.pairAvalible) availableSides.push("pair");
            if (item.leftAvalible) availableSides.push("left");
            if (item.rightAvaible) availableSides.push("right");

            return (
              <React.Fragment key={item.id}>
                <ListItem
                  alignItems="flex-start"
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
                        <Box sx={{ mt: 1 }}>
                          <FormControl component="fieldset" size="small">
                            <FormLabel component="legend" sx={{ fontSize: 13 }}>
                              Side Option
                            </FormLabel>
                            <RadioGroup
                              row
                              value={sideSelections[item.id] || ""}
                              onChange={(e) =>
                                handleSideChange(item.id, e.target.value)
                              }
                            >
                              {availableSides.map((side) => (
                                <FormControlLabel
                                  key={side}
                                  value={side}
                                  control={<Radio size="small" />}
                                  label={
                                    <Chip
                                      label={
                                        side.charAt(0).toUpperCase() +
                                        side.slice(1)
                                      }
                                      size="small"
                                      color={
                                        sideSelections[item.id] === side
                                          ? "primary"
                                          : "default"
                                      }
                                    />
                                  }
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Box>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })
        )}
      </List>
      <Box
        sx={{
          my: 2,
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
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Payment Method</FormLabel>
        <RadioGroup
          row
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          {PAYMENT_METHODS.map((method) => (
            <FormControlLabel
              key={method.value}
              value={method.value}
              control={<Radio />}
              label={method.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        disabled={cartItems.length === 0}
        onClick={handlePayment}
      >
        Place Order
      </Button>
    </Box>
  );
}

export default PaymentPage;