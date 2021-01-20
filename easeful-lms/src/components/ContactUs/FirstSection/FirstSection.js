import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '60vh'
    },

    ForBack: {
        backgroundColor: '#FEF0EF',
        height: '50vh'
    },

    Main: {
        width: '60%',
        margin: 'auto'
    },

    gridItem:{
        '&  > .MuiGrid-item': {
            padding: '0',
        }
        
    }

}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.ForBack}>

                <Grid className={classes.Main} container spacing={5}>

                    <Grid className = {classes.gridItem} item xs={6}>
                        <LeftSide />
                    </Grid>
                    <Grid className = {classes.gridItem} item xs={6}>
                        <RightSide />
                    </Grid>

                </Grid>


            </div>

        </div>
    );
}