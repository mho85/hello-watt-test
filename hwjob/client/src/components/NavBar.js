// MODULES
import React from 'react';

// STYLESHEETS
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: "white",
        color: "#1fa5d7",
        borderBottom: "1px solid #1fa5d7"
    }
}));

/**
 * NavBar Component displays a traditional navigation bar with a hamburger icon.
 */
const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link to="/" style={{ display: "flex" }}>
                                <HomeIcon style={{ color: "#1fa5d7" }} />
                                <span style={{
                                    paddingLeft: "5px",
                                    fontFamily: "Noto Sans",
                                    color: "#163e5c"
                                }}>
                                    Client Portal
                            </span>
                            </Link>
                        </MenuItem>
                    </Menu>
                    <img src={process.env.PUBLIC_URL + '/hellowatt-logo1.svg'} alt="hello watt logo" />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;