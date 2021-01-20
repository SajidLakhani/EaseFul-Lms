import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Screen from './Screen'

const useStyles = makeStyles({

    Main: {
        backgroundColor: '#FEF0EF',
       
    },

    subMain: {
        paddingTop:'30px',
        paddingBottom:'120px',
        width: '60%',
        margin: 'auto'
    },

    para: {
        fontSize: '12px',
        color: '#5F5982'
    },
    span: {
        color: '#F68C20'
    },
    button: {
        padding: '8px 20px',
        color: "white",
        margin: 'auto',
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },

    forButton:{
        margin:'auto',
        textAlign:'right'
    }
})

const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
        <div className={classes.Main}>

            <Grid className={classes.subMain} container spacing={3}>

                <Grid item xs={8}>
                    <p className={classes.para}>By Themadbrains in <span className={classes.span}>inspiration</span></p>
                    <h1>Why Swift UI Should Be on
                    the Radar of Every Mobile
Developer</h1>
                    <p className={classes.para}>Choose from over 40,000 online video courses with new additions published every month.
</p>
                </Grid>
                <Grid item xs={4} className = {classes.forButton}>
                    <Button className={classes.button}>Start learning now</Button>
                </Grid>
            </Grid>
            
        </div>
        <Screen/>
        </div>
    );
};

export default FirstSection;