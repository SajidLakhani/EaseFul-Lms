import { makeStyles } from '@material-ui/core';
import React from 'react';
import InsideCards from './InsideCards';

const useStyles = makeStyles((theme) => ({
Main:{
    width:'100%',
    backgroundColor: '#efeff6',
},

}))

const SixSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <InsideCards/>
        </div>
    );
};

export default SixSection;