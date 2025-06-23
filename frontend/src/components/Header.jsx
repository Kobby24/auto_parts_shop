import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import CartSidebar from "./cart"; // Adjust path if needed

const drawerWidth = 240;
const navItems = ['Home'];

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "BMW",
  "Mercedes",
  "Nissan",
  "Chevrolet",
  "Hyundai",
  "Kia",
  "Volkswagen",
];

// Example car models for autosuggest
const carModels = [
  { brand: "Toyota", model: "Corolla" },
  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Civic" },
  { brand: "Honda", model: "Accord" },
  { brand: "Ford", model: "Focus" },
  { brand: "Ford", model: "Mustang" },
  { brand: "BMW", model: "3 Series" },
  { brand: "BMW", model: "X5" },
  { brand: "Mercedes", model: "C-Class" },
  { brand: "Mercedes", model: "E-Class" },
  // Add more as needed
];

function DrawerAppBar(props) {
  // Remove local cart state, use props instead
  const { cartItems, setCartItems, window_ } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // For Brands dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleBrandsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleBrandsClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // For search/autosuggest
  const [searchValue, setSearchValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleSearchSelect = (event, value) => {
    setSearchValue(value);
    if (value && value.model) {
      window.location.href = `/brands/${value.brand.toLowerCase()}/${value.model.toLowerCase().replace(/\s+/g, '-')}`;
    }
  };

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Example: check login status from localStorage (customize as needed)
  React.useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    // Example: set login state (replace with real logic)
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  // Calculate total quantity in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        background: "linear-gradient(180deg,rgba(20, 113, 206, 0.86) 0%, #fff 100%)", // Add gradient background
        height: "100%", // Ensure background covers full drawer
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        24 Auto Parts
      </Typography>
      {/* Mobile Search Field */}
      <Box sx={{ display: { xs: 'block', sm: 'none' }, px: 2, mb: 2 }}>
        <Autocomplete
          options={carModels}
          getOptionLabel={(option) => option ? `${option.brand} ${option.model}` : ''}
          value={searchValue}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={handleSearchSelect}
          renderInput={(params) => (
            <TextField {...params} label="Search car model" variant="outlined" size="small" />
          )}
          isOptionEqualToValue={(option, value) =>
            option.brand === value.brand && option.model === value.model
          }
          clearOnBlur
          autoHighlight
          sx={{ backgroundColor: 'white', borderRadius: 10000 }}
        />
      </Box>
      {/* Mobile Cart Icon */}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', mb: 2 }}>
        <IconButton color="inherit" onClick={(e) => { e.stopPropagation(); handleCartOpen(); }}>
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.toLowerCase()==="home" ? "/" :`/${item.toLowerCase()}`}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Brands" />
          </ListItemButton>
        </ListItem>
        {carBrands.map((brand) => (
          <ListItem key={brand} disablePadding sx={{ pl: 4 }}>
            <ListItemButton component="a" href={`/brands/${brand.toLowerCase()}`}>
              <ListItemText primary={brand} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        {!isLoggedIn ? (
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={handleLogin}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} component="a" href="/signup">
                <ListItemText primary="Signup" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container = window_ !== undefined ? () => window_().document.body : undefined;

  // State for cart sidebar open/close
  const [cartOpen, setCartOpen] = React.useState(false);

  // Function to open the cart sidebar
  const handleCartOpen = () => setCartOpen(true);

  // Function to close the cart sidebar
  const handleCartClose = () => setCartOpen(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '5vh' }}>
      <CssBaseline />
      <AppBar component="nav" position="static" elevation={1}>
        <Toolbar>
          {/* Hamburger icon at far left on mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          {/* Mobile Search Field (centered between hamburger and cart) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, mx: 1 }}>
            <Autocomplete
              options={carModels}
              getOptionLabel={(option) => option ? `${option.brand} ${option.model}` : ''}
              value={searchValue}
              inputValue={inputValue}
              onInputChange={handleInputChange}
              onChange={handleSearchSelect}
              renderInput={(params) => (
                <TextField {...params} label="Search" variant="outlined" size="small" />
              )}
              isOptionEqualToValue={(option, value) =>
                option.brand === value.brand && option.model === value.model
              }
              clearOnBlur
              autoHighlight
              sx={{
                backgroundColor: 'white',
                borderRadius: 10000,
                width: '100%',
                minWidth: 0,
              }}
            />
          </Box>
          {/* Cart Icon for mobile (far right) */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, ml: 1 }}>
            <IconButton color="inherit" onClick={handleCartOpen}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          {/* Logo and desktop content */}
          <Button href='/' sx={{ minWidth: 0, p: 0, display: { xs: 'none', sm: 'block' } }}>
          <Box
            component="img"
            src="/logos/logo.png"
            alt="Auto Lights"
            sx={{
              width: 180,
              height: "100%",
              borderRadius: 100,
              mt: 0,
              mb: 0,
            }}
          /></Button>
          {/* Desktop Search Field */}
          <Box sx={{ flexGrow: 1, mx: 2, maxWidth: 300, display: { xs: 'none', sm: 'block' } }}>
            <Autocomplete
              options={carModels}
              getOptionLabel={(option) => option ? `${option.brand} ${option.model}` : ''}
              value={searchValue}
              inputValue={inputValue}
              onInputChange={handleInputChange}
              onChange={handleSearchSelect}
              renderInput={(params) => (
                <TextField {...params} label="Search car model" variant="outlined" size="small" />
              )}
              isOptionEqualToValue={(option, value) =>
                option.brand === value.brand && option.model === value.model
              }
              clearOnBlur
              autoHighlight
              sx={{ backgroundColor: 'white', borderRadius: 10000 }}
            />
          </Box>
          {/* Desktop Nav and Cart */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </Button>
            ))}
            <Button
              sx={{ color: '#fff' }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleBrandsClick}
            >
              Brands
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleBrandsClose}
              MenuListProps={{
                'aria-labelledby': 'brands-button',
              }}
            >
              {carBrands.map((brand) => (
                <MenuItem
                  key={brand}
                  onClick={handleBrandsClose}
                  component="a"
                  href={`/brands/${brand.toLowerCase()}`}
                >
                  {brand}
                </MenuItem>
              ))}
            </Menu>
            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <>
                <Button sx={{ color: '#fff', ml: 2 }} href='/login'>
                  Login
                </Button>
                <Button sx={{ color: '#fff', ml: 1 }} href="/signup">
                  Signup
                </Button>
              </>
            ) : (
              <Button sx={{ color: '#fff', ml: 2 }} onClick={handleLogout}>
                Logout
              </Button>
            )}
            {/* Cart Icon */}
            <IconButton color="inherit" onClick={handleCartOpen}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Remove extra Toolbar here to avoid extra space */}
      <Box component="main" sx={{ flex: 1 }}>
        {/* Content goes here */}
      </Box>
      <CartSidebar
        items={cartItems}
        open={cartOpen}
        onClose={handleCartClose}
        onDeleteItem={setCartItems} // <-- Add this line
      />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window_: PropTypes.func,
};

export default DrawerAppBar;
