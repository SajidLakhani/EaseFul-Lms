import { makeStyles } from "@material-ui/core";
import React from "react";
import Demo from "../../../Assets/Imgs/demon.jpg";

const useStyles = makeStyles((theme) => ({
  Imgdiv: {
    width: "500px",
    height: "450px",
    marginTop: "70px",
 
  },
  Img:{
    height: '100%',
    width: '100%',
  }
}));

const RightSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.Imgdiv}>
      <img src={Demo} className={classes.Img} />
    </div>
  );
};

export default RightSection;
