import { makeStyles } from "@material-ui/core";
import React from "react";
import LeftCard from "../../HomePage/FifthSection/LeftCard";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const useStyles = makeStyles((theme) => ({
  Main: {
    width: "100%",
    marginTop: "15px",
    marginBottom: "50px",
  },

  subMain: {
    width: "75%",
    margin: "auto",
    height: "500px",
    borderRadius: "25px",
    border: "solid 0.5px #707070",
    backgroundColor: "#33333d",
    display: "flex",
    justifyContent:'space-evenly'
  },
}));

const FirstSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <div className={classes.subMain}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default FirstSection;
