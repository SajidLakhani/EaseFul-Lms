import React from 'react';
import Header from '../../../ReusableComponents/Header';
import { makeStyles, Box, Button } from '@material-ui/core';
import Background from '../../../Assets/Imgs/forBack.jpg'
import BottomCard from './BottomCard';

const useStyles = makeStyles((theme) => ({
    Main:{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        height: '350px',
       marginBottom:'70px',
        padding: "17px 184.5px 92px 187.5px",
        opacity: '0.9',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    subMain:{
        textAlign: 'center',
    marginTop: '70px',
    color:'white'
    },

    button: {
        padding: "10px",
        minWidth: "unset",
        height: "43px",
        marginTop: '5px',
        color: "white",
        fontSize: '12px',
        fontWeight:'500',
        fontFamily: 'myFirstFont',
        backgroundColor: "#f56962",
        textTransform:'unset'
      },
      heading:{
        fontSize: '40px',
        fontWeight: 'bold',
      },
      para:{
        fontSize: '15px',
        fontWeight: 'normal',
      }
}))

const FIrstSection = () => {
    const classes = useStyles();
    return (
        
        <div className = {classes.Main}>
            <Header/>
            <Box className = {classes.subMain}>
                <h2 className = {classes.heading}>
                Distant learning for further expansion
                </h2>
                <p className = {classes.para}>Choose from over 100,000 online video courses with new additions published every mont.</p>
                <Button className={classes.button}>Get Started Now For Free</Button>
                <BottomCard/>
            </Box>
        </div>
    );
};

export default FIrstSection;