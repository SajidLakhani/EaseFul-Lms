import React from 'react';
import { makeStyles } from '@material-ui/core';
import Cards from './Cards';
import FloatingCard from './FloatingCard';

const useStyles = makeStyles((theme) => ({
    subDiv:{
        backgroundColor: '#efeff6',
        width:'100%',
    }
}))

const SeventhSection = () => {
    const classes = useStyles();

    return (
        <div className = {classes.mainDiv}>
            <div className = {classes.subDiv}>
                <Cards/>
            </div>
            <FloatingCard/>
        </div>
    );
};

export default SeventhSection;