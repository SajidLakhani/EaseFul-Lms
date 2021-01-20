import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
const useStyles = makeStyles((theme) => ({
    Main:{
        marginBottom:'100px'
    },
    forBack: {
        backgroundColor: '#FEF0EF',
        height:'35vh'
    },
    subMain: {
        display: 'flex',
        width: '60%',
        margin: 'auto',
        paddingTop:'50px'
    }
}))

const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.forBack}>
                <Grid className={classes.subMain} container spacing = {3}>

                    <Grid item xs={3}>
                        <LeftSide />
                    </Grid>
                    <Grid item xs={9}>
                        <RightSide />
                    </Grid>

                </Grid>

            </div>
        </div>
    );
};

export default FirstSection;