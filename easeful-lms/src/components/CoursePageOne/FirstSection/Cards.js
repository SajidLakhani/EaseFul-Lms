import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

import BottomCards from './BottomCards';

const useStyles = makeStyles((theme) => ({
    Main: {
        width: '62%',
        margin: 'auto',
        marginTop: '60px'
    },
    button: {
        minWidth: "unset",
        padding: '6px 25px',
        fontFamily: 'myFirstFont',
        margin: 'auto 0',
        color: "#f56962",
        border: '2px solid #f56962',
        fontSize: "12px",
        textTransform: "unset",
    },

    headDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    heading: {
        color: '#302d3a',
        fontSize: '2rem'
    }
}))

const Cards = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.headDiv}>
                <h2 className={classes.heading}>Welcome back, ready for your next lesson?</h2>
                <Button className={classes.button}>View History</Button>
            </div>
            <BottomCards />
        </div>
    );
};

export default Cards;