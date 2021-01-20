import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  Main: {
    height: "300px",
    backgroundColor: "#fef0ef",
  },

  head: {
    fontSize: "25px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "0.6",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#302d3a",
  },
  para: {
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",

    color: "#5f5982",
  },


  subMain:{
    paddingTop: '90px',
    textAlign:'center'
  },

  button: {
    minWidth: "unset",
    width: "140px",
    height: "43px",
    marginTop: "5px",
    color: "white",

    fontSize: "12px",
    textTransform: "unset",
    backgroundColor: "#f56962",
  },
}));

const FourthSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Box className = {classes.subMain}>
        <h2 className={classes.head}>
          Online Coaching Lessons For Remote Learning.
        </h2>
        <p className={classes.para}>
          100% online learning from the world’s best universities and companies
        </p>
        <Button className={classes.button}>Join Today</Button>
      </Box>
    </div>
  );
};

export default FourthSection;
