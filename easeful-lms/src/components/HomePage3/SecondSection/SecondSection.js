import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MidCards from './MidCards';



const useStyles = makeStyles((theme) => ({
    Main: {
        width: '100%',
        marginTop:'30px',
        backgroundColor: '#efeff6',
    },

    subMain: {

    },

    head: {
        margin: '0',
        marginRight: '109px'
    },

    topBox: {
        width: '90%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '40px'
    },

    button: {

        minWidth: "unset",
        width: '150px',
        height: "38px",
        marginTop: '5px',
        color: "white",

        fontSize: "12px",
        textTransform: 'unset',
        backgroundColor: "#f56962",
    },

    forDesign: {
        display: 'flex',
        marginTop: '-4px',
    },


}))

const SeconSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Box className={classes.subMain}>
                <Box className={classes.topBox}>
                    <h1 className={classes.head}>
                         Top Categories
                </h1>

                    <Button className={classes.button}>See all Categories</Button>
                </Box>
            </Box>

        <MidCards/>
        </div>
    );
};

export default SeconSection;