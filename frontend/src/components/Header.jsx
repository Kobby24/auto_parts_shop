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
  const { window_ } = props;
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        24 Auto Parts
      </Typography>
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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '5vh' }}>
      <CssBaseline />
      <AppBar component="nav" position="static" elevation={1}>
        <Toolbar>
          {/* Logo at the far left */}
          <Button href='/'>
          <Box
            component="img"
            src="/logos/logo.png"
            alt="Auto Lights"
            sx={{
              display: { xs: "none", md: "block", display: 'flex', gridArea: 'logo' },
              width: 180,
              height:"100%",
              ml: 0,
              mr: 50,
              borderRadius: 100,
              mt:0,
              mb:0
            }}
          /></Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Search Field with Autosuggest */}
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
