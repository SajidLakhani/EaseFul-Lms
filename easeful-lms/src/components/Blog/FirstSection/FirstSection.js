import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
const useStyles = makeStyles((theme) => ({
    forBack: {
        backgroundColor: '#FEF0EF'
    },
    subMain: {
        margin:'0',
        '& > .MuiGrid-item': {
            padding: 0,
            },
    }
}))

const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.forBack}>
                <Grid className={classes.subMain} container>
                    <Grid item xs={7}>
                        <LeftSide />
                    </Grid>
                    <Grid item xs={5}>
                        <RightSide />
                    </Grid>

                </Grid>
            </div>



        </div>
    );
};

export default FirstSection;