import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#FEF0EF'
    },
    container: {
        width: '60%',
        margin: 'auto',
        padding:'50px 0'
    }

}));

export default function FirstSection() {
    const classes = useStyles();

    return (
        <div className={classes.Main}>
            <Grid container spacing={4} className={classes.container}>

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