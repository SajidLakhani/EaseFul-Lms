import { makeStyles } from '@material-ui/core';
import React from 'react';
import MiddleCards from './MiddleCards';

const useStyles = makeStyles((theme) => ({
Main:{
    width: '100%',
  backgroundColor: '#fef0ef',
},

}))

const EightSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <MiddleCards/>
        </div>
    );
};

export default EightSection;