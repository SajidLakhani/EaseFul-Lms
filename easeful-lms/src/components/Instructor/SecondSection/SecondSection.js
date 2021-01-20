
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Cards from './Cards'

const useStyles = makeStyles((theme) => ({
    Main:{
        width:'60%',
        margin:'50px auto',
        
    },
    head:{
        color:'#302D3A'
    }
}))

const SecondSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <h1 className = {classes.head}>
                Popular Instructors
            </h1>
            <Cards/>
        </div>
    );
};

export default SecondSection;