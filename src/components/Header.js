import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo2 from "../imagenes/logo2.png";
import { getAuth,signOut } from "firebase/auth";
import app from "./bdd";
import LogoutIcon from '@mui/icons-material/Logout';
import PageviewIcon from '@mui/icons-material/Pageview';

const Header = ({visualizacion}) => {
    const auth = getAuth(app)
  const cerrarSesion = () => {
    // console.log(usuario);
    signOut(auth)
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar className="navbarguay" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Avatar
          src={logo2} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            alt="Peliculas Hub" onClick={()=> {

              visualizacion((elemento) => {
              return {
              Indice: !elemento.Add,
              Watchlist:false,
              Watched:false,
              Populares:false,
              Add:false
              };
              });
              }}>
          </Avatar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Add: true,
                    Watchlist:false,
                    Watched:false,
                    Populares:false,
                    Indice:false
                    };
                    });
                    }} className="link_header" textAlign="center">BUSCADOR</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Populares: true,
                    Watchlist:false,
                    Add:false,
                    Watched:false,
                    Indice:false
                    };
                    });
                    }} className="link_header" textAlign="center">POPULARES</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Watched: true,
                    Watchlist:false,
                    Add:false,
                    Populares:false,
                    Indice:false
                    };
                    });
                    }} className="link_header" textAlign="center">VISTAS</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Watchlist: true,
                    Watched:false,
                    Add:false,
                    Populares:false,
                    Indice:false
                    };
                    });
                    }} className="link_header" textAlign="center">PARA VER</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          <Avatar
          src={logo2}sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            alt="Peliculas Hub" onClick={()=> {

              visualizacion((elemento) => {
              return {
              Indice: true,
              Watchlist:false,
              Watched:false,
              Populares:false,
              Add:false
              };
              });
              }}>
          </Avatar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button className="link_header"
                onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Add: true,
                    Watchlist:false,
                    Watched:false,
                    Populares:false,
                    Indice:false
                    };
                    });
                    }}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <PageviewIcon className="lupa" ></PageviewIcon>
              </Button>
              <Button className="link_header"
                onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Populares: true,
                    Watchlist:false,
                    Watched:false,
                    Add:false,
                    Indice:false
                    };
                    });
                    }}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                POPULARES
              </Button>
              <Button className="link_header"
                onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Watchlist: true,
                    Watched:false,
                    Add:false,
                    Populares:false,
                    Indice:false
                    };
                    });
                    }}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                PARA VER
              </Button>
              <Button className="link_header"
                onClick={()=> {

                    visualizacion((elemento) => {
                    return {
                    Watched: true,
                    Watchlist:false,
                    Add:false,
                    Populares:false,
                    Indice:false
                    };
                    });
                    }}
                sx={{ my: 2, display: 'block' }}>
                VISTAS
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={cerrarSesion} sx={{ p: 0,color:'orange' }}>
                <LogoutIcon onClick={cerrarSesion} alt="logout" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"

              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >

                <MenuItem >
                  <Typography onClick={cerrarSesion} textAlign="center"></Typography>
                </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
