import { makeStyles } from '@material-ui/core';
import React from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
const useStyles = makeStyles((theme) => ({
Main:{
    display:'flex',
    width: '100%',
    justifyContent:'center',
 
  backgroundColor: '#ffffff',
}
}))
const FifthSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <LeftCard/>
            <RightCard/>
        </div>
    );
};

export default FifthSection;