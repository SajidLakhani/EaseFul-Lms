import { makeStyles } from '@material-ui/core';
import React from 'react';
import BottomPart from './BottomPart';

const useStyles = makeStyles((theme) => ({
    Main: {
        width: '60%',
        margin: 'auto'
    },
    head: {
        textAlign: 'center'
    }
}))

const ThirdSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <h1 className={classes.head}>Our most frequently asked questions</h1>
            <BottomPart />
        </div>
    );
};

export default ThirdSection;