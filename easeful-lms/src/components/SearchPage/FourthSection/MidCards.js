import { Card, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    Main: {
        width: '60%',
        margin: 'auto'
    },

    root: {
        width: '30%',
        
    },
    InnerColor: {

    },
    head: {
        margin: 0
        
    },

    para: {
        margin: 0,
        fontSize:'13px'
    },

    textDiv:{
        padding:'0 10px'
    },

    card:{
        width:'100%'
    }

}))
const MidCards = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.root}>
            
            <Card className={classes.card}>
            <div className={classes.InnerColor}>
                </div>
                <div className = {classes.textDiv}>
                    <h4 className={classes.head}>Yamilet Booker</h4>
                    <p className={classes.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                </div>
            </Card>
            </div>
        </div>
    );
};

export default MidCards;