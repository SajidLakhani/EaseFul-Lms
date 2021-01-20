import { Avatar, Box, Card, makeStyles } from "@material-ui/core";
import React from "react";
import Sajid from "../../../Assets/Imgs/sajid.jpg";
import RatingsComponent from "./RatingsComponent";
const useStyles = makeStyles((theme) => ({
  Main: {
    textAlign: "-webkit-center",
    paddingTop: "40px",
  },
  root: {
    width: "400px",
    backgroundColor: "#ffffff",
    borderLeft: "5px solid #f68c20",
    marginRight: '15px',
    borderTopRightRadius: '20px',
  },

  subMain: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatarBox: {
    display: "flex",
    marginTop: "15px",
    marginLeft: "10px",
  },

  head: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#5f5982",
  },
  para: {
    margin: 0,
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#91929a",
  },

  Content: {
    paddingBottom: "80px",
    
  },

  forText: {
    marginLeft: "10px",
  },
  para2: {
    margin: 0,
    marginBottom: "15px",
    width: "90%",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",

    color: "#5f5982",
  },
  mapBox:{
    display:'flex',
    marginTop: '25px',
    justifyContent:'center'
  }
}));

const InsideCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Box>
        <h2>What our students have to say</h2>
      </Box>
      <Box className = {classes.mapBox}>
      {[1 ,2 ].map((el) => (
  <Box className={classes.Content}>
  <Card className={classes.root}>
    <Box className={classes.subMain}>
      <Box className={classes.avatarBox}>
        <Avatar alt="Sajid" src={Sajid} />
        <Box className={classes.forText}>
          <h5 className={classes.head}>Themadbrains</h5>
          <p className={classes.para}>Student</p>
        </Box>
      </Box>
      <RatingsComponent />
    </Box>
    <p className={classes.para2}>
      Skillfy is a life saver. I don’t have the time/money for a college
      education. My goal is to become a freelance web developer, and
      thanks to Skillfy.
    </p>
  </Card>
</Box>
      ))}
      </Box>
    
    </div>
  );
};

export default InsideCards;
