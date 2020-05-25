import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
   typographyStyles: {
       flex: 1
   },
   iconStyles: {
       color: '#fff',
       padding: '0 40px',
       textDecoration: 'none',
       '&:hover': {
        transform: 'scale(1.2)',
        fontSize: '18px',
        transition: 'all 0.3s'
      }
   }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                   <Link to="/bookEvent/" className={classes.iconStyles}>Home</Link>
                </Typography>
                <Link to="/bookEvent/bucket" className={classes.iconStyles}><EventNoteIcon /></Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;