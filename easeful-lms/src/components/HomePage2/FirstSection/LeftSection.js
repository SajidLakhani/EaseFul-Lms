import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import SearchField from "../../HomePage/FirstSection/SearchField";

const useStyles = makeStyles((theme) => ({
  Main: {
    width: "30%",
    marginBottom: "120px",
    marginTop: "80px",
    alignSelf:'center',
    
  },
  headBox: {
    width: "100%",
  },
  head: {
    fontSize: "45px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
  },
  paraBox: {
    width: "100%",
  },
  para: {
    fontSize: "15px",
    width: "100%",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
  },
}));
const LeftSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <div className={classes.subMain}>
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
    </div>
  );
};

export default LeftSection;
