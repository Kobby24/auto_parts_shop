import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Enter Username", "Enter Password"];

function Login() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      // Submit logic here
      // For now, just log the form data
      console.log(form);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box
      className="form-container"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Sign in
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box
          component="form"
          className="sign-in-form"
          noValidate
          autoComplete="off"
          onSubmit={handleNext}
        >
          {activeStep === 0 && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={form.username}
              onChange={handleChange}
            />
          )}
          {activeStep === 1 && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
          )}
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ py: 1.5 }}
              disabled={
                (activeStep === 0 && !form.username) ||
                (activeStep === 1 && !form.password)
              }
            >
              {activeStep === steps.length - 1 ? "Sign in" : "Next"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
