import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#EFEFF6',
        height: '200px'

    },
    forHeight:{
        height:'80vh'
    },

    head: {
        margin: '0'
    },

    subMain: {
        width: '60%',
        margin: 'auto',
        paddingTop: '50px'
    },
    subMainTwo: {
        width: '60%',
        margin: 'auto',
        paddingTop:'40px'
    },


}))

const FirstSection = () => {
    const classes = useStyles();

    return (
        <div className={classes.forHeight}>


            <div className={classes.Main}>
                <div className={classes.subMain}>
                    <h2 className={classes.head}>Shopping Cart</h2>
                </div>
                <Grid container spacing={3} className={classes.subMainTwo}>

                    <Grid item xs={12} sm={8}>
                        <LeftSide />
                    </Grid>
                    <Grid className={classes.pad} item xs={12} sm={4}>
                        <RightSide />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default FirstSection;