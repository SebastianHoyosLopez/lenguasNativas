// import React from 'react';
import Link from 'next/link';

// const Header = () => {
//   return (
//     <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
//       <Link href="/AboutSchool">
//         <button>Las escuelas taller</button>
//       </Link>
//       <Link href="/Lenguas">
//         <button>About Us</button>
//       </Link>
//       <Link href="/">
//         <button>Blog Post</button>
//       </Link>
//     </ul>
//   );
// };

// export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';

const drawerWidth = 240;
const navItems = ['Institucional', 'Escuela taller de Boyaca', 'Comunidad nueva escuela', 'Cabildo capiul', 'Proceso taller escuela'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={`/${item}`}>
            <ListItem key={item}>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ background: 'linear-gradient(90deg, rgba(238,240,160,1) 0%, rgba(219,210,125,0.9668242296918768) 32%);' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <AlignHorizontalLeftIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'black' } }}>
            Escuela Taller
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                <Link href={`/${item}`}>{item}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
