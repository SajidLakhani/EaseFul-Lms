import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Book from '../../../Assets/Imgs/bluebook.png'
import Clock from '../../../Assets/Imgs/blueclock.png'
import People from '../../../Assets/Imgs/redppl.png'
import { Box, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
      margin:'auto',
      marginTop:'80px',
      width:'55%',
      backgroundColor: '#ffffff'

    
  },

  para:{
    fontSize:'12px',
    margin:'auto'  
  },

  subBox:{
      display:'flex'
  },

  Main : {
    display:'flex',
    justifyContent:'space-between',
    padding:'20px'
  },
  AvDiv:{
      margin:'auto 10px'
  }
 
});

export default function BottomCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Box className = {classes.Main}>
        <Box className = {classes.subBox}>
        <Avatar className = {classes.AvDiv} alt="Book" src={Book} />
            <p className = {classes.para}>100k Online Courses</p>
        </Box>
        <Box className = {classes.subBox}>
        <Avatar className = {classes.AvDiv} alt="Book" src={People} />
            <p className = {classes.para}>Expert Instructions</p>
        </Box>
        <Box className = {classes.subBox}>
        <Avatar className = {classes.AvDiv} alt="Book" src={Clock} />
            <p className = {classes.para}>LifeTime Access</p>
        </Box>
        </Box>
    </Card>
  );
}