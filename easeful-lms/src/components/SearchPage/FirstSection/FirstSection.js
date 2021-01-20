import { makeStyles } from '@material-ui/core';
import React from 'react';
import ForSearch from './ForSearch'
const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#EFEFF6',
        width: '100%'
    },
    subMain: {
        width: '60%',
        margin: 'auto',
        display: 'flex',
        justifyContent:'space-between',
        padding:'50px 0'
    },
    head:{
        margin:'auto 0'
    }
}))
const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <h2 className={classes.head}>
                    Courses
                </h2>
                <ForSearch />

            </div>
        </div>
    );
};

export default FirstSection;