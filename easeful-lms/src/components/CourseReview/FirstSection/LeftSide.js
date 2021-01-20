import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    content:{
        
        margin:'auto 0'
    },
    para:{
        margin:0,
        color:'#5F5982'
    }
}))

const LeftSide = () => {
    const classes = useStyles();
    return (
        <div>
            <div className = {classes.content}>
            <p className = {classes.para}>
                Learn graphic design today with Photoshop, Illustrator,
                Adobe XD, In Design & more in this Adobe CC Masterclass!
            </p>
            </div>
            
        </div>
    );
};

export default LeftSide;