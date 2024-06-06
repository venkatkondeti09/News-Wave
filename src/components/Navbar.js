import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import EntertainmentIcon from '@mui/icons-material/Movie';
import GeneralIcon from '@mui/icons-material/Public';
import HealthIcon from '@mui/icons-material/LocalHospital';
import SportsIcon from '@mui/icons-material/Sports';
import TechnologyIcon from '@mui/icons-material/Memory';
import ScienceIcon from '@mui/icons-material/Science';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          News App
        </Typography>
        <IconButton color='inherit' component={Link} to='/'>
          <HomeIcon />
        </IconButton>
        <IconButton color='inherit' component={Link} to='/business'>
          <BusinessIcon />
        </IconButton>
        <IconButton color='inherit' component={Link} to='/entertainment'>
          <EntertainmentIcon />
        </IconButton>
        <IconButton color='inherit' component={Link} to='/general'>
          <GeneralIcon />
        </IconButton>
        <IconButton color='inherit' component={Link} to='/health'>
          <HealthIcon />
        </IconButton>
        <IconButton color='inherit' component={Link} to='/sports'>
          <SportsIcon />
        </IconButton>
        <IconButton color='inherit' component={Link} to='/technology'>
          <TechnologyIcon />
        </IconButton>
        <IconButton color='inherit' component={Link} to='/science'>
          <ScienceIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
