import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
const useStyles = makeStyles((theme) => ({
    Main: {
        width: '60%',
        margin: '50px auto',

    },

    head:{
        textAlign:'center'
    }

}))

const SecondSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <h1 className = {classes.head}>Plans for teams and businesses of every stage,
shape, and size</h1>
            </div>
            <Grid container spacing={3} style ={{
                marginTop:'20px'
            }}>
                <Grid item xs={6}>
                    <LeftSide />
                </Grid>
                <Grid item xs={6}>
                    <RightSide />
                </Grid>
            </Grid>
        </div>
    );
};

export default SecondSection;