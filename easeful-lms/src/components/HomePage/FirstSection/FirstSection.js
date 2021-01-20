import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../../ReusableComponents/Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
const useStyles = makeStyles((theme) => ({
Main:{
    width: '100%',
    backgroundColor: 'rgba(245, 105, 98, 0.1)',
},
subMain:{
    width:'80%',
    margin:'auto',
    display:'flex',
    justifyContent:'center'
}
}))

const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <Header/> 
            <div className = {classes.subMain}>
                <LeftSide/>
                <RightSide/>
            </div>

        </div>
    );
};

export default FirstSection;