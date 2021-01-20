import { Box, Card, makeStyles } from "@material-ui/core";
import React from "react";
import Volume from "../../../Assets/Imgs/volume.svg";
import Photo from "../../../Assets/Imgs/photo.svg";
import Heart from "../../../Assets/Imgs/heart.svg";
import Mirror from "../../../Assets/Imgs/mirror.svg";
const useStyles = makeStyles((theme) => ({
  Main: {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
    marginBottom: '40px',
    
  },

  root: {
    width: "200px",

    margin: "0 25px 16px 0",
    padding: "20px 11px 16.5px 11.5px",
    borderRadius: "2.5px",
    backgroundColor: '#e6faea',
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
}));

const SecondRawCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Card className={classes.root}>
        <Box>
          <img src={Volume} />
        </Box>
        <Box className={classes.headDiv}>
          <h2 className={classes.head}>Marketing</h2>
        </Box>
        <Box className={classes.paraDiv}>
          <p className={classes.para}>
            Learn Adobe Illustrator CC graphic design, logo design, and more
            with this in-depth, practical, easy-to-follow course!
          </p>
        </Box>
      </Card>
      <Card
        className={classes.root}
        style={{
            backgroundColor: 'rgba(187, 240, 255, 0.5)',
        }}
      >
        <Box>
          <img src={Photo} />
        </Box>
        <Box
          className={classes.headDiv}
          
        >
          <h2 className={classes.head}>Photography</h2>
        </Box>
        <Box
          className={classes.paraDiv}
         
        >
          <p className={classes.para}>
            Learn Adobe Illustrator CC graphic design, logo design, and more
            with this in-depth, practical, easy-to-follow course!
          </p>
        </Box>
      </Card>
      <Card
        className={classes.root}
        style={{
            backgroundColor: 'rgba(246, 140, 32, 0.1)',
        }}
      >
        <Box>
          <img src={Heart} />
        </Box>
        <Box className={classes.headDiv}>
          <h2 className={classes.head}>Health & Care</h2>
        </Box>
        <Box className={classes.paraDiv}>
          <p className={classes.para}>
            Learn Adobe Illustrator CC graphic design, logo design, and more
            with this in-depth, practical, easy-to-follow course!
          </p>
        </Box>
      </Card>
      <Card
        className={classes.root}
        style={{
            backgroundColor: '#efeff6',
        }}
      >
        <Box>
          <img src={Mirror} />
        </Box>
        <Box className={classes.headDiv}>
          <h2 className={classes.head}>Technology</h2>
        </Box>
        <Box className={classes.paraDiv}>
          <p className={classes.para}>
            Learn Adobe Illustrator CC graphic design, logo design, and more
            with this in-depth, practical, easy-to-follow course!
          </p>
        </Box>
      </Card>
    </div>
  );
};

export default SecondRawCards;
