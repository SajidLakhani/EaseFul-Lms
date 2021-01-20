import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import CheckBoxComponent from "./CheckBoxComponent";
const useStyles = makeStyles((theme) => ({
    Main:{
        width: '50%',
        marginBottom: '80px',
        marginTop: '80px',
    },
  headBox: {
    width: "70%",
  },
  head: {
    fontSize: "25px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#302d3a",
  },
  paraBox: {
    width: "70%",
  },
  para: {
    fontSize: "15px",

    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#5f5982",
  },
}));
const LeftCard = () => {
  const classes = useStyles();
  return (
    <div className = {classes.Main}>
      <Box className={classes.headBox}>
        <h2 className={classes.head}>Know about learning learning platform</h2>
      </Box>
      <Box className={classes.paraBox}>
        <p className={classes.para}>
          With our growing catalog of over 30 Nanodegree programs from beginner
          to advanced, you’re sure to find one that fits your career goals
        </p>
      </Box>
      <CheckBoxComponent />
    </div>
  );
};

export default LeftCard;
