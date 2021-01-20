import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    Main:{
        backgroundColor:'#FEEFEE'
    },
    subMain:{
        width:'60%',
        padding:'50px 0',
        margin:'auto',
        display:'flex',
        justifyContent:'space-between'
    },

    para:{
        fontSize:'13px',
        margin:'auto 0'
    },
    Span:{
        color:'#5F5982'
    }
}))



const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <div className = {classes.subMain}>
                <h1>Instructors</h1>
                <p className = {classes.para}>Home / <span className = {classes.Span}>instructors</span></p>
            </div>
        </div>
    );
};

export default FirstSection;