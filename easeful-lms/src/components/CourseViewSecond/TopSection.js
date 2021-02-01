import { IconButton, InputBase, makeStyles, Paper, Button } from '@material-ui/core';
import React from 'react'
import Back from '../../Assets/Imgs/PurpleBack.svg'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    Main: {
        display: 'flex',
        width: '70%',
        padding: '40px 0px',
    },
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    rootSearch: {
        padding: '2px 4px',
        height: '40px',
        margin: 'auto 40px',
        boxShadow: 'unset',
        display: 'flex',
        alignItems: 'center',
        width: 350,
    },
    input: {
        margin: 'auto 8px',
        fontFamily: 'MyFirstFont',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    image: {
        margin: 'auto 0px',
        width: '4%',
        cursor:'pointer'
    },
    contentDiv: {
        margin: 'auto 20px',
    },
    content: {
        margin: 'auto 0',
        color: '#5F5982',
    },
    button: {
        "&:hover" : {
            backgroundColor:"#f56962"
        },
        padding: '8px 22px',
        color: "white",
        margin:'auto 0',
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'MyFirstFont',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },
}))

function TopSection() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.Main}>
                <img className={classes.image} src={Back} />
                <div className={classes.contentDiv}>
                    <h3 className={classes.content}>UIUX Design Conference Meeting</h3>
                    <p style={{ fontSize: '16px' }} className={classes.content}>9 lesson <span>6h 30 min</span></p>
                </div>
                <Paper component="form" className={classes.rootSearch}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Search here"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
            </div>
            <Button className={classes.button}>Next Lesson</Button>
        </div>

    )
}

export default TopSection
