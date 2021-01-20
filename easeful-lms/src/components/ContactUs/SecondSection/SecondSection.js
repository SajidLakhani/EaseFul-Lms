import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Cards from './Cards'

const useStyles = makeStyles((theme) => ({
    Main: {
        width: '60%',
        margin: '50px auto'
    },
    button: {
        width: 'fit-content',
        padding: '8px 15px',
        fontFamily: 'myFirstFont',
        margin: 'auto 0',
        color: "#ffffff",
        backgroundColor: '#F56962',
        fontSize: "12px",
        textTransform: "unset",
    },
    subMain: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    head:{
        margin:'auto 0'
    }
}))

const SecondSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <h1 className={classes.head}>Expanding learning opportunities</h1>
                <Button className={classes.button}>Join Now</Button>
            </div>
            <Cards/>
        </div>
    );
};

export default SecondSection;