import { Box, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import Light from '../../../Assets/Imgs/light.png'
import Certificate from '../../../Assets/Imgs/certificate.svg'
import Career from '../../../Assets/Imgs/career.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "22%",
   
    margin: "0 25px 16px 0",
    padding: "20px 11px 16.5px 11.5px",
    borderRadius: "2.5px",
    backgroundColor: "#ffffff",
  },

  headDiv: {
    fontSize: "15px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#302d3a",
    width: "95%",
    margin: "auto",
  },
  head: {
    margin: 0,
    marginTop: "6px",
  },

  paraDiv: {
    fontSize: "12px",
    width: "95%",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.88",
    letterSpacing: "0.16px",
    textAlign: "left",
    color: "#5f5982",
    margin: "auto",
    marginTop: "9px",
    marginBottom: "10px",
    textAlign: "left",
  },

  para: {
    margin: 0,
  },

  cardsDiv:{
    width: '75%',
    margin: '50px auto',
    display: 'flex',
    justifyContent: 'center',
   
  },
  hTwo:{
    textAlign:'center'

  },
  image:{
    width:'25%'
  }
}))

const BottomCards = () => {

  const data = [
    {
      name: 'Learn the latest skills',
      para: 'Start streaming on-demand video lectures today from top instructors in subjects',
      img: `${Light}`
    },
    {
      name: 'Get ready for a career',
      para: 'Start streaming on-demand video lectures today from top instructors in subjects',
      img: `${Career}`
    },
    {
      name: 'Earn a certificate or degree',
      para: 'Start streaming on-demand video lectures today from top instructors in subjects',
      img: `${Certificate}`
    },
  ]
  const classes = useStyles();
  return (
    <div>
      <h2 className = {classes.hTwo}>Achieve your goals with Skillfy</h2>
      <div className = {classes.cardsDiv}>
      {data.map(item => (
        <Card className={classes.root}>
          <Box>
            <img className = {classes.image} src={item.img} />
          </Box>
          <Box className={classes.headDiv}>
      <h2 className={classes.head}>{item.name}</h2>
          </Box>
          <Box className={classes.paraDiv}>
            <p className={classes.para}>
                {item.para}
            </p>
          </Box>
        </Card>
      ))}
      </div>

    </div>
  );
};

export default BottomCards;