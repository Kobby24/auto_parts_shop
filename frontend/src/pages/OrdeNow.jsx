import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

function OrderNow({ open = false, onClose, item }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [orderType, setOrderType] = useState("pair");

  // Default to first available option
  React.useEffect(() => {
    if (item) {
        console.log(item);
      if (item.pairAvalible) setOrderType("pair");
      else if (item.leftAvalible) setOrderType("left");
      else if (item.rightAvaible) setOrderType("right");
    }
    
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the order to your backend
  };

  const getOptionDisabled = (type) => {
    if (!item) return true;
    if (type === "pair") return !item.pairAvalible;
    if (type === "left") return !item.leftAvalible;
    if (type === "right") return !item.rightAvaible;
    return true;
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Order Now</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Item: {item?.name}
        </Typography>
        <Typography variant="subtitle2" mb={2}>
          Amount: <b>GHS {item?.amount}</b>
        </Typography>
        <Typography variant="body2" mb={1}>
          Select what you want to order:
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={orderType}
          exclusive
          onChange={(e, val) => val && setOrderType(val)}
          sx={{ mb: 2, width: "100%" }}
        >
          <ToggleButton
            value="pair"
            disabled={getOptionDisabled("pair")}
            sx={{ flex: 1 }}
          >
            Pair
          </ToggleButton>
          <ToggleButton
            value="left"
            disabled={getOptionDisabled("left")}
            sx={{ flex: 1 }}
          >
            Left
          </ToggleButton>
          <ToggleButton
            value="right"
            disabled={getOptionDisabled("right")}
            sx={{ flex: 1 }}
          >
            Right
          </ToggleButton>
        </ToggleButtonGroup>
        {getOptionDisabled(orderType) && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            Sorry, this option is not available for this item.
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
          <TextField
            label="Your Phone Number"
            type="tel"
            fullWidth
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            sx={{ mb: 2 }}
            disabled={getOptionDisabled(orderType)}
          />
            <TextField
                label="Your Name"
                type="text" 
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
                disabled={getOptionDisabled(orderType)}
            />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={submitted || getOptionDisabled(orderType)}
          >
            Submit Order
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Payment on delivery for people in Greater Accra. Delivery is{" "}
          <b>not free</b>.
        </Typography>
        {submitted && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Order received! A dispatch rider will call soon to confirm your
            location and deliver your item.
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default OrderNow;
