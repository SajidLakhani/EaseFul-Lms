import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import SearchField from "./SearchField";

const useStyles = makeStyles((theme) => ({
  Main: {
    width: "50%",
    marginBottom: "80px",
    marginTop: "80px",
  },
  headBox: {
    width: "70%",
  },
  head: {
    fontSize: "50px",
    fontWeight: "bold",

    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#302d3a",
  },
  paraBox: {
    width: "80%",
  },
  para: {
    fontSize: "15px",
    width: "80%",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#5f5982",
  },
}));
const LeftSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Box className={classes.headBox}>
        <h2 className={classes.head}>
          Turn your ambition into a success story
        </h2>
      </Box>
      <Box className={classes.paraBox}>
        <p className={classes.para}>
          Choose from over 100,000 online video courses with new additions
          published every mont.
        </p>
      </Box>
      <SearchField />
    </div>
  );
};

export default LeftSide;
