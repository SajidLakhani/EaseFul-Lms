import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import BottomPart from './BottomPart'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import SideBar from './SideBar';
import CourseQuiz from '../../CourseQuiz/CourseQuiz';
import QuizBottom from '../../CourseQuiz/QuizBottom';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'MyFirstFont'
    },
    headDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '95%',
        margin: 'auto'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    paraDiv: {
        fontSize: '11px',
        margin: 'auto 7px',
        borderRadius: '5px',
        width: 'fit-content',
        height: 'fit-content',
        backgroundColor: '#FEEFEE'
    },
    para: {
        margin: 'auto',
        padding: '5px 10px',
        fontWeight: 'bold',
        color: '#F56962'
    },

    forToolbar: {
        display: 'grid',
        padding: 'unset'
    },
    innerDiv: {
        display: 'flex'
    },
    appBar: {

        backgroundColor: 'white',
        color: 'black',
        boxShadow:'unset',

        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: '15px 0px'
    },
    heading: {
        color: '#5F5982'
    },
    button: {
        padding: '6px 20px',
        margin: 'auto 0',
        color: "white",
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },
}));

function ResponsiveDrawer({Quiz}) {
    // const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <SideBar />
        </div>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            {Quiz ? <AppBar position="fixed" className={classes.appBar} style ={{backgroundColor:'#EFEFF6'}}>
                <Toolbar className={classes.forToolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.headDiv}>
                        <div className={classes.innerDiv}>
                            <h1 className={classes.heading}>Introduction about xd</h1>
                            <div className={classes.paraDiv}>
                                <p className={classes.para}>30 Mint</p >
                            </div>


                        </div>

                        <Button className={classes.button}>Next Lesson</Button>

                    </div>

                </Toolbar>
            </AppBar> : <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.forToolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.headDiv}>
                        <div className={classes.innerDiv}>
                            <h1 className={classes.heading}>Introduction about xd</h1>
                            <div className={classes.paraDiv}>
                                <p className={classes.para}>30 Mint</p >
                            </div>


                        </div>

                        <Button className={classes.button}>Next Lesson</Button>

                    </div>

                </Toolbar>
            </AppBar> }
            
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {Quiz ? <QuizBottom /> : <BottomPart />}
            </main>
        </div>
    );
}

// ResponsiveDrawer.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default ResponsiveDrawer;