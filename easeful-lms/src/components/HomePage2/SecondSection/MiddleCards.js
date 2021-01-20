import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Design from '../../../Assets/Imgs/design.svg'
import Lcd from '../../../Assets/Imgs/lcd.svg'
import Monitor from '../../../Assets/Imgs/monitor.svg'
import Case from '../../../Assets/Imgs/case.svg'
import Volume from '../../../Assets/Imgs/speaker.svg'
import Photography from '../../../Assets/Imgs/photography.svg'
const useStyles = makeStyles((theme) => ({
    Main:{
        display:'flex',
        justifyContent:'center',
        marginTop:'40px',
        
    },
    Allpara:{
        margin: 0,
        fontSize: '15px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.45',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#302d3a',
    },
    Allbox:{
        border: "1px solid transparent",
    background: '#ddf7ff',
    width: '120px',
    marginLeft: '35px',
    textAlignLast: 'center',
    height: '130.5px',
    },

    imgDiv:{
        width: '62.5px',
    height: '48.5px',
    marginTop: '27px',
    },

}))

const MiddleCards = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <Box className = {classes.Allbox} style ={{
                backgroundColor: '#efeff6'
            }}>
                <img src = {Design} className = {classes.imgDiv}/>
                <p className = {classes.Allpara}>Design</p>
            </Box>
            <Box className = {classes.Allbox} style ={{
                backgroundColor: '#fef3e8'
            }}>
                <img src = {Lcd} className = {classes.imgDiv}/>
                <p className = {classes.Allpara}>Development</p>
            </Box>
            <Box className = {classes.Allbox} style ={{
                backgroundColor: '#ddf7ff'
            }}>
                <img src = {Monitor} className = {classes.imgDiv}/>
                <p className = {classes.Allpara}>IT & Software</p>
            </Box>
            <Box className = {classes.Allbox} style ={{
                backgroundColor: '#e6faea'
            }}>
                <img src = {Case} className = {classes.imgDiv}/>
                <p className = {classes.Allpara}>Business</p>
            </Box>
            <Box className = {classes.Allbox} style ={{
                backgroundColor: '#efeff6'
            }}>
                <img src = {Volume} className = {classes.imgDiv}/>
                <p className = {classes.Allpara}>Marketing</p>
            </Box>
            <Box className = {classes.Allbox}>
                <img src = {Photography} className = {classes.imgDiv}/>
                <p className = {classes.Allpara}>Photography</p>
            </Box>
        </div>
    );
};

export default MiddleCards;