import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({

    Main: {
        padding: '50px 0'
    },
    para: {
        color: '#5F5982'
    },
    button: {
        width: 'fit-content',
        padding: '5px 15px',
        fontFamily: 'myFirstFont',
        margin: 'auto 0',
        color: "#ffffff",
        backgroundColor: '#F56962',
        fontSize: "12px",
        textTransform: "unset",
    },
}))

const LeftSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <p style={{
                    margin: 'auto 0'
                }} className={classes.para}>CONTACT</p>
                <h1>Got a question about
using Skillfy?</h1>
                <p style={{
                    fontSize: '14px'
                }} className={classes.para}>This is the place to start. Find the answers you need from the Skillfy Community or our award-winning support team.
</p>
                <Button className={classes.button}>Help Center</Button>
            </div>
        </div>
    );
};

export default LeftSide;