import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Screen from './Screen'
import Card from './Card'

const useStyles = makeStyles((theme) => ({
    subMain: {
        width: '60%',
        margin: 'auto',
        
    },

    Main:{
        height:'150vh'
    },

    forBack:{
        backgroundColor:'#FEF0EF',
        height:'40vh'
    },

    mainHead:{
        margin: 'auto 0 ',
    paddingTop: '60px',
    color: '#5F5982',
    fontSize: '2rem',
    },

    gridItem:{
        '&  > .MuiGrid-item': {
            padding: '0 !important',
        }
        
    }
}))

const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.forBack}>

            <Grid container spacing={3} className = {classes.subMain}>
                    <h1 className = {classes.mainHead}>Adobe Masterclass Photoshop, Illustrator, XD & InDesign</h1>
                <Grid className = {classes.gridItem} item sm={6}>
                    <LeftSide/>
                </Grid>
                <Grid className = {classes.gridItem} item sm={6}>
                    <RightSide/>
                </Grid>
            </Grid>
            <Grid container spacing={3} className = {classes.subMain}>
                    
                <Grid className = {classes.gridItem} item sm={8}>
                    <Screen/>
                </Grid>
                <Grid className = {classes.gridItem} item sm={4}>
                    <Card/>
                </Grid>
            </Grid>
            </div>

        </div>
    );
};

export default FirstSection;