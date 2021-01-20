import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    Main: {
        marginTop: '60px'
    },
    subMain: {
        display: 'flex',
        justifyContent: 'left'
    },
    button: {
        width: 'fit-content',
        padding: '8px 15px',
        fontFamily: 'myFirstFont',
        margin: 'auto 0',
        color: "#ffffff",
        backgroundColor: '#F68C20',
        fontSize: "12px",
        textTransform: "unset",
    },
    button2: {
        marginLeft: '20px',
        width: 'fit-content',
        padding: '8px 15px',
        fontFamily: 'myFirstFont',
        margin: 'auto 0',
        color: "#ffffff",
        backgroundColor: '#F68C20',
        fontSize: "12px",
        textTransform: "unset",
    },
}))

const Selectors = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <Button className={classes.button}>Overview</Button>
                <Button className={classes.button2}>Curriculum</Button>
                <Button className={classes.button2}>Instructor</Button>
                <Button className={classes.button2}>Reviews</Button>
            </div>
        </div>
    );
};

export default Selectors;