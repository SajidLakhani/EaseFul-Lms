import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';
import DropIcon from '../../../Assets/Imgs/dropdown.svg'
import Cards from './Cards';
import Text from './Text'


const useStyles = makeStyles((theme) => ({
    Main: {
        width: '100%',

        backgroundColor: '#ffffff',
    },

    subMain: {

    },

    head: {
        margin: '0',
        marginRight: '230px'
    },

    topBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '40px'
    },

    button: {
        padding: "0",
        minWidth: "unset",
        width: "100px",
        height: "43px",
        marginTop: '5px',
        color: "white",

        fontSize: "12px",
        backgroundColor: "#f56962",
    },

    forDesign: {
        display: 'flex',
        marginTop: '-4px',
    },


    gridDiv:{
        margin:'40px auto'
    }


}))

const FifthSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Box className={classes.subMain}>
                <Box className={classes.topBox}>
                    <h1 className={classes.head}>
                        Know about best online learning platform
                </h1>
                    <Button className={classes.button}>Start Now</Button>
                </Box>
            </Box>
            <div className = {classes.gridDiv}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Text />
                    </Grid>
                    <Grid item xs={6}>
                        <Cards />
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};

export default FifthSection;