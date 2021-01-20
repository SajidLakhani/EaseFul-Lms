import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    outerBox:{
        display: 'flex',
    justifyContent: 'center',
    },
    number:{
        color: '#33333d',
        fontSize:'20px'
    },
    innerBox:{
        marginLeft: '20px',
    },
    heading:{
        color: '#302d3a',
        fontSize:'20px'
    },
    para:{
        color: '#5f5982',
        fontSize:'13px',
        width:'72%',
        textAlign:'justify'
    },
    Main:{
        width:'60%',
        margin:'auto'
    }

}))

const Text = () => {
    const classes = useStyles();
    const data = [
        {
            number: '01.',
            heading: 'Unlimited Course & Students',
            text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it'
        },
        {
            number: '02.',
            heading: 'Learn from industry experts',
            text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it'
        },
        {
            number: '03.',
            heading: 'Earn A Certificate Or Degree',
            text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it'
        },
    ]
    return (
        <div className = {classes.Main}>
             {data.map((item) => (
                  <Box className = {classes.outerBox}>
                  <h2 className = {classes.number}>{item.number}</h2>
                  <Box className = {classes.innerBox}>
                      <h2 className = {classes.heading}>{item.heading}</h2>
                      <p className = {classes.para}>{item.text}</p>
                  </Box>
              </Box>
             ))}
           
        </div>
    );
};

export default Text;


