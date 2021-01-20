import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import BottomCards from './BottomCards'

const useStyles = makeStyles((theme) => ({
    forBack:{
        backgroundColor:'#FEF0EF'
    },

    Main: {
        width: '60%',
        margin:'auto',
        padding: '80px 0'
    },

    subMain: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        padding: '8px 20px',
        color: "white",
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },

    head: {
        margin: 'auto 0'
    }

}))

const PopularBlog = () => {
    const classes = useStyles();
    return (
        <div className = {classes.forBack}>
             <div className={classes.Main}>
            <div className={classes.subMain}>
                <h2 className={classes.head}>Popular Blog</h2>
                <Button className={classes.button}>View all</Button>

            </div>
            <BottomCards />
        </div>
        </div>
       
    );
};

export default PopularBlog;