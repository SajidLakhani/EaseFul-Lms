import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../../ReusableComponents/Header';
import BottomCards from './BottomCards';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
const useStyles = makeStyles((theme) => ({
Main:{
    width: '100%',
    
},
subMain:{
    width:'70%',
    margin:'40px auto',
    display:'flex',
    justifyContent:'center'
}
}))

const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
             
            <div className = {classes.subMain}>
                <LeftSide/>
                <RightSide/>

            </div>
            <BottomCards/>

        </div>
    );
};

export default FirstSection;