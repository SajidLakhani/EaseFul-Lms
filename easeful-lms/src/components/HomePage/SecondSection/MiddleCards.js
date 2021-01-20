import React from "react";
import { Avatar, Box, Card, Divider, makeStyles } from "@material-ui/core";
import Demo from "../../../Assets/Imgs/Demo.png";
import Star from "../../../Assets/Imgs/Star.svg";
import Eye from "../../../Assets/Imgs/eye.svg";
import Play from "../../../Assets/Imgs/play.svg";

import Sajid from "../../../Assets/Imgs/sajid.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    marginRight: '25px',
    borderRadius: "2.5px",
    backgroundColor: "#ffffff",
    boxShadow:'unset'
  },
  Main: {
    justifyContent:'center',
    marginTop: "26px",
    display:'flex'
  },
  image: {
    
    height: '150px',
    borderRadius: '5px',

    objectFit: "contain",
  },

  SecondBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    margin: "auto",
    marginTop: "5px",
  },

  childBox1: {
    display: "flex",
  },
  childImg: {
    width: "20px",
    height: "15px",
    marginLeft: "-8px",

    objectFit: "contain",
  },

  childPara: {
    margin: 0,
    fontSize: "10px",
    fontWeight: "'normal'",
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#5f5982",
  },

  thirdBox: {
    width: "90%",
    margin: "auto",
    textAlign: "left",
  },
  thirdPara: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "10px",
    lineHeight: "1.33",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#302d3a",
  },
  divider: {
    border: "solid 0.5px #efeff6",
    marginTop: "10px",
  },
  avatarBox: {
    display: "flex",
    width: '90%',
    margin: 'auto',
    marginBottom: '25px',
    justifyContent: 'space-between',
    marginTop: '15px',
  },

  subBox:{
      display:'flex'
  },
  avatarDiv:{
    width: '30px',
    height: '30px',
    
    objectFit: "contain",
    borderRadius: '4px',
  },
  name : {
    fontSize: '12px',
    margin: 'auto',
    marginLeft: '5px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#7a7a7a',
  },
  amountDiv:{
    marginTop: '5px',
    display: 'flex',
  },
  amountOne:{
    margin: 0,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: '0.16px',
    textAlign: 'left',
    color: '#cac6d4',
    textDecorationLine: 'line-through',
  },
  amountTwo:{
    margin: 0,
    fontSize: '12px',
    marginLeft: '10px',
    marginRight: '6px',
    fontWeight: 'bold',
    fontStretch:' normal',
    fontStyle:' normal',
   
    letterSpacing: '0.18px',
    textAlign: 'left',
    color: '#f68c20',
  },
  imageDiv:{
    margin: 'auto',
    width: '95%',
    marginLeft: '9px',
    marginTop: '10px',
    
  }
}));

const MiddleCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
         {[1 ,2 ,3 ].map((el) => (
            <Card className={classes.root}>
            <Box className = {classes.imageDiv}>
              <img className={classes.image} src={Demo} />
            </Box>
            <Box className={classes.SecondBox}>
              <Box className={classes.childBox1}>
                <img className={classes.childImg} src={Star} />
                <p className={classes.childPara}>
                  4.5<span>(120)</span>
                </p>
              </Box>
              <Box className={classes.childBox1}>
                <img className={classes.childImg} src={Eye} />
                <p className={classes.childPara}>28,500</p>
              </Box>
              <Box className={classes.childBox1}>
                <img className={classes.childImg} src={Play} />
                <p className={classes.childPara}>
                  36<span>Lesion</span>
                </p>
              </Box>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.thirdBox}>
              <p className={classes.thirdPara}>
                Everything You Need to Know About Business
              </p>
            </Box>
            <Box className={classes.avatarBox}>
              <Box className = {classes.subBox}>
                <Avatar className ={classes.avatarDiv} alt="Remy Sharp" src={Sajid} />
                <p className = {classes.name}>Nicole Brown</p>
              </Box>
              <Box className = {classes.amountDiv}>
                <p className = {classes.amountOne}>$99.99</p>
                <p className = {classes.amountTwo}>$49.65</p>
              </Box>
            </Box>
          </Card>
      ))}

    
    </div>
  );
};

export default MiddleCards;
