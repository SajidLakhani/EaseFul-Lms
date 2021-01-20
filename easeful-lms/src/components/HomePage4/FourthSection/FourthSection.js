import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width:'100%',
        backgroundColor:'#ffffff',
        paddingTop:'55px',
        paddingBottom:'70px'
    },

    cont:{
        width:'65%',
        margin:'auto'
    }
    
}));

export default function FourthSection() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className = {classes.cont} spacing={3}>
                <Grid item xs={6}>
                    <LeftSide/>
                </Grid>
                <Grid item xs={6}>
                    <RightSide/>
                </Grid>

            </Grid>
        </div>
    );
}