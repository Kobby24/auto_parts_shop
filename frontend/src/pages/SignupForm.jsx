import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Paper,
  Link,
  Divider,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

const regions = [
  { region: "Greater Accra" },
  { region: "Ashanti" },
  { region: "Central" },
  // Add more regions as needed
];

const citiesByRegion = {
  "Greater Accra": ["Accra", "Tema"],
  Ashanti: ["Kumasi", "Obuasi"],
  Central: ["Cape Coast", "Winneba"],
  // Add more mappings as needed
};

const steps = ["Personal Info", "Contact Info", "Location", "Account"];

const SignupForm = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    address: "",
    phone: "",
    region: "",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [cities, setCities] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "region") {
      setCities(citiesByRegion[value] || []);
      setForm((prev) => ({ ...prev, city: "" }));
    }
  };

  const validateStep = () => {
    let newErrors = {};
    if (activeStep === 0) {
      if (!form.fname) newErrors.fname = "Required";
      if (!form.lname) newErrors.lname = "Required";
    }
    if (activeStep === 1) {
      if (!form.email) newErrors.email = "Required";
      if (!form.phone) newErrors.phone = "Required";
      if (!form.address) newErrors.address = "Required";
    }
    if (activeStep === 2) {
      if (!form.region) newErrors.region = "Required";
      if (!form.city) newErrors.city = "Required";
    }
    if (activeStep === 3) {
      if (!form.username) newErrors.username = "Required";
      if (!form.password) newErrors.password = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Submit logic here
      
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,rgb(20, 113, 206) 0%, #fff 100%)",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", py: 5 }}>
          <img
            src="./logos/logo.png"
            alt=""
            width="222"
            height="57"
            style={{ display: "block", margin: "0 auto 24px" }}
            borderRadius="5"
            
          />
          <Typography variant="h4" component="h2" gutterBottom>
            Sign-up Form
          </Typography>
        </Box>
        <Paper
          sx={{
            p: 4,
            mb: 4,
            background: "rgba(255,255,255,0.25)", // Slightly transparent white
            boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={activeStep === steps.length - 1 ? handleSubmit : handleNext} noValidate>
            <Grid container spacing={3}>
              {activeStep === 0 && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First name"
                      name="fname"
                      fullWidth
                      required
                      value={form.fname}
                      onChange={handleChange}
                      error={!!errors.fname}
                      helperText={errors.fname}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last name"
                      name="lname"
                      fullWidth
                      required
                      value={form.lname}
                      onChange={handleChange}
                      error={!!errors.lname}
                      helperText={errors.lname}
                    />
                  </Grid>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      fullWidth
                      required
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      fullWidth
                      required
                      value={form.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      placeholder="+233 XXX XXX XXX"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      name="address"
                      fullWidth
                      required
                      value={form.address}
                      onChange={handleChange}
                      error={!!errors.address}
                      helperText={errors.address}
                    />
                  </Grid>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <Grid item xs={12} sm={6}>
                    <FormControl  required error={!!errors.region}>
                      <InputLabel>Region</InputLabel>
                      <Select
                        name="region"
                        value={form.region}
                        label="Region"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>Select a region</em>
                        </MenuItem>
                        {regions.map((region) => (
                          <MenuItem key={region.region} value={region.region}>
                            {region.region}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>{errors.region}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required error={!!errors.city}>
                      <InputLabel>City</InputLabel>
                      <Select
                        name="city"
                        value={form.city}
                        label="City"
                        onChange={handleChange}
                        disabled={!form.region}
                      >
                        <MenuItem value="">
                          <em>Select a city</em>
                        </MenuItem>
                        {cities.map((city) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>{errors.city}</FormHelperText>
                    </FormControl>
                  </Grid>
                </>
              )}
              {activeStep === 3 && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Username"
                      name="username"
                      fullWidth
                      required
                      value={form.username}
                      onChange={handleChange}
                      error={!!errors.username}
                      helperText={errors.username}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      required
                      value={form.password}
                      onChange={handleChange}
                      error={!!errors.password}
                      helperText={errors.password}
                    />
                  </Grid>
                </>
              )}
            </Grid>
            <Divider sx={{ my: 4 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                {activeStep === steps.length - 1 ? "Sign-up" : "Next"}
              </Button>
            </Box>
          </form>
        </Paper>
        <Box component="footer" sx={{ py: 3, borderTop: 1, borderColor: "divider" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="subtitle1" fontWeight="bold">
                Contact Us
              </Typography>
              <Box>
                <Link
                  href="https://www.instagram.com/kobbygil24/"
                  color="#ac2bac"
                  sx={{ mr: 2 }}
                  target="_blank"
                  rel="noopener"
                >
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link
                  href="https://x.com/KobbyGilbert1"
                  color="inherit"
                  sx={{ mr: 2 }}
                  target="_blank"
                  rel="noopener"
                >
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link
                  href="https://github.com/Kobby24/"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHubIcon fontSize="large" />
                </Link>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                Copyright © {new Date().getFullYear()} 24 Auto Parts, Inc
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SignupForm;