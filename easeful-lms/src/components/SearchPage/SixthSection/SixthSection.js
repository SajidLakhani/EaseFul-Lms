import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import MiddleCards from './MiddleCards';


const useStyles = makeStyles((theme) => ({
    Main:{
        backgroundColor:'#EFEFF6'
    },

    button: {
        minWidth: "unset",
        padding: '6px 20px',
        color: "white",
        width: 'fit-content',
        fontSize: "12px",
        textTransform: "unset",
        backgroundColor: "#f56962",
    },

    subMain: {
        width: '60%',
        display: 'flex',
        padding: '40px 0',
        justifyContent: 'space-between',
        margin: 'auto'
    },

    head: {
        margin: 'auto 0'
    }
}))

const SixthSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <h2 className={classes.head}>Classes Taught By Real Creators</h2>
                <Button className={classes.button}>View All</Button>
            </div>
            <MiddleCards/>
        </div>
    );
};

export default SixthSection;