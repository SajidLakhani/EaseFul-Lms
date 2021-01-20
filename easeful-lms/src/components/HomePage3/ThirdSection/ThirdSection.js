import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DropIcon from '../../../Assets/Imgs/dropdown.svg'
import MiddleCards from '../../HomePage/SecondSection/MiddleCards';

const useStyles = makeStyles((theme) => ({
    Main:{
        width: '100%',
    height: '500px',
    backgroundColor: '#cccccc',
    },

    subMain : {
       
    },

    head : {
        margin: '0',
        marginRight:'340px'
    },

    topBox:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        paddingTop:'40px'
    },

    button: {
        padding: "0",
        minWidth: "unset",
        width: "100px",
        height: "43px",
        marginTop: '5px',
        color: "white",
        marginLeft: "34px",
        fontSize: "12px",
        backgroundColor: "#f56962",
      },

      forDesign:{
          display:'flex',
          marginTop: '-4px',
      },

     
}))

const ThirdSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <Box className = {classes.subMain}>
                <Box className = {classes.topBox}>
                    <h1 className = {classes.head}>
                Get Choice of Your Course
                </h1>
                <Box className = {classes.forDesign}>
                <p className={classes.para}>Design</p>
            <img className={classes.image} src={DropIcon} />
            </Box>
            <Button className={classes.button}>View all</Button>
                </Box> 
            </Box>
           <MiddleCards/>
        </div>
    );
};

export default ThirdSection;