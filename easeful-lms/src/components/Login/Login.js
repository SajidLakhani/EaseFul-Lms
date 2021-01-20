import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const useStyles = makeStyles((theme) => ({
    PinkBack: {
        backgroundColor: '#FD9697',
        height: '100%',

    },


}))

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.Gridcontainer}>
                <Grid item xs={6} className={classes.PinkBack}>
                    <LeftSide />
                </Grid>
                <Grid item xs={6}>
                    <RightSide />
                </Grid>
            </Grid>

        </div>
    );
};

export default Login;