import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Fade,
  Typography,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Stack,
  MenuList
} from '@mui/material'
import React, { useRef, useState } from 'react'
import Logo from '../images/LogoHorizontal.png'
import { Turn as Hamburger } from 'hamburger-react'
// import LogoSymbol from '../images/LogoSymbol.png'

import '../styles/style.css'

const Header = ({
  scrollModelOne,
  scrollModelTwo,
  scrollModelThree,
  scrollRefProcess
}) => {

  // From: https://mui.com/material-ui/react-menu/#menulist-composition (popper)
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen(!open)
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);




  // Menu hover
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleMenuCloseModOne = () => {
    scrollModelOne()
    setAnchorEl(null)
  }
  const handleMenuCloseModTwo = () => {
    scrollModelTwo()
    setAnchorEl(null)
  }


  return (
    <div className='headerBar'>
      <Grid container className='headerContainer'>
        <Grid item className='headerLogoJar' xs={2}>
          <a href='./'>
            <Box
              component='img'
              sx={{
                maxHeight: '80px',
                maxWidth: '100%',
              }}
              title='Modulara'
              alt='Modulara'
              src={Logo}
            />
          </a>
        </Grid>

        <Grid id='headerDesktop' container xs spacing={1} sx={{ justifyContent: 'flex-end' }}>
          <Grid item sx={{ paddingX: '20px', cursor: 'pointer' }}>
            <Typography sx={{
              fontWeight: '300',
              alignSelf: 'center',
              fontSize: '20px',
              color: 'black',
            }}>
              About
            </Typography>
          </Grid>
          <Grid item 
            onMouseLeave={handleMenuClose}
            sx={{ paddingX: '20px', cursor: 'pointer' }}
          >
            <Typography
              onMouseOver={handleMenuClick}
              sx={{
                fontWeight: '300',
                alignSelf: 'center',
                fontSize: '20px',
                color: 'black',
              }}
            >
              Models
            </Typography>
            
            
            <Popper
              open={anchorEl}
              anchorEl={anchorEl}
              role={undefined}
              onMouseLeave={handleMenuClose}
              // https://mui.com/material-ui/react-popper/#positioned-popper
              placement="top"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: 'top',
                  }}
                >
                  <Paper sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.86)',
                  }}>
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu-desktop"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                        anchorEl={anchorEl}
                        sx={{ paddingY: 0 }}
                      >
                        <MenuItem onClick={handleMenuCloseModOne} sx={{ paddingY: '9px' }}>Modulara 1</MenuItem>
                        <MenuItem onClick={handleMenuCloseModTwo} sx={{ paddingY: '9px' }}>Modulara 2</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>


          </Grid>
          <Grid item onClick={scrollRefProcess} sx={{ paddingX: '20px', cursor: 'pointer' }}>
            <Typography sx={{
              fontWeight: '300',
              alignSelf: 'center',
              fontSize: '20px',
              color: 'black',
            }}>
              How We Work
            </Typography>
          </Grid>
          <Grid item onClick={scrollModelThree} sx={{ paddingLeft: '20px', paddingRight: '25px', cursor: 'pointer' }}>
            <Typography sx={{
              fontWeight: '300',
              alignSelf: 'center',
              fontSize: '20px',
              color: 'black',
            }}>
              Contact Us
            </Typography>
          </Grid>
        </Grid>         

      {/* TODO: make this a different component*/}
      <IconButton
        size='large'
        ref={anchorRef}
        id="headerMobile"
        aria-controls={open ? 'composition-menu-mobile' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        disableRipple={true}
        sx={{
          minHeight: '80px',
          minWidth: '72px',
          alignSelf: 'center',
          position: 'absolute',
          right: 0,
          borderRadius: "0px",
          justifyContent: 'left',
          textTransform: 'none',
          "& .MuiTouchRipple-root .MuiTouchRipple-child": {
            borderRadius: "0px"
          },
        }}
      >
        <Hamburger size='30' toggled={open} />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="top"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'top right',
            }}
          >
            <Paper sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.86)',
            }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu-mobile"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{ paddingY: 0 }}
                >
                  <MenuItem onClick={(e) => handleClose(e)} sx={{ paddingY: '9px' }}>About Us</MenuItem>
                  <MenuItem onClick={(e) => {
                    scrollModelOne()
                    handleClose(e)
                  }} sx={{ paddingY: '9px' }}>Modulara 1</MenuItem>
                  <MenuItem onClick={(e) => {
                    scrollModelTwo()
                    handleClose(e)
                  }} sx={{ paddingY: '9px' }}>Modulara 2</MenuItem>
                  <MenuItem onClick={(e) => {
                    scrollRefProcess()
                    handleClose(e)
                  }} sx={{ paddingY: '9px' }}>How We Work</MenuItem>
                  <MenuItem onClick={(e) => {
                    scrollModelThree()
                    handleClose(e)
                  }} sx={{ paddingY: '9px' }}>Contact Us</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      </Grid>
    </div>
  )
}

export default Header