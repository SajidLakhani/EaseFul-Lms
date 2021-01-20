import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


const useStyles = makeStyles((theme) => ({
    subMain: {
        width: '60%',
        margin: 'auto'
    },

    Main:{
        height:'120vh'
    },

    forBack:{
        backgroundColor:'#FEF0EF',
        height:'40vh'
    }
}))

const CourseDetails = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.forBack}>

            <Grid container spacing={3} className = {classes.subMain}>

                <Grid item xs={12} sm={8}>
                    <LeftSide/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <RightSide/>
                </Grid>
            </Grid>
            </div>

        </div>
    );
};

export default CourseDetails;