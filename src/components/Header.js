import Link from 'next/link';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../public/image/logoMenu.png';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

const pages = [
  { name: 'Institucional', url: 'Institucional' },
  { name: 'Escuela taller de Boyaca', url: 'Escuela_taller_de_Boyaca' },
  { name: 'Comunidad nueva esmeralda', url: 'Comunidad_nueva_esmeralda' },
  { name: 'Cabildo capiul', url: 'Cabildo_capiul' },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar component="nav" sx={{ background: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <Image src={logo} alt="logo menu" height={60} width={60} />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={`/${page.url}`}>
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'flex' }}>
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Menu>
          </Box>
          <Button
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
            }}
          >
            <Image src={logo} alt="logo menu" height={60} width={60} />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            {pages.map((page) => (
              <Link key={page.name} href={`/${page.url}`}>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
