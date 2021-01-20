import { Box, Card, makeStyles } from "@material-ui/core";
import React from "react";
import Books from "../../../Assets/Imgs/books.svg";
import Computer from "../../../Assets/Imgs/computer.svg";
import Wifi from "../../../Assets/Imgs/wifi.svg";
import Bag from "../../../Assets/Imgs/bag.svg";
const useStyles = makeStyles((theme) => ({
  Main: {
    display: "flex",
    justifyContent: "center",
    marginTop: "26px",
    
  },

  root: {
    width: "200px",

    margin: "0 25px 16px 0",
    padding: "20px 11px 16.5px 11.5px",
    borderRadius: "2.5px",
    backgroundColor: "#efeff6",
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

const FirstRowCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Card className={classes.root}>
        <Box>
          <img src={Books} />
        </Box>
        <Box className={classes.headDiv}>
          <h2 className={classes.head}>Design</h2>
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
          backgroundColor: "#f68c20",
        }}
      >
        <Box>
          <img src={Computer} />
        </Box>
        <Box
          className={classes.headDiv}
          style={{
            color: "white",
          }}
        >
          <h2 className={classes.head}>Business</h2>
        </Box>
        <Box
          className={classes.paraDiv}
          style={{
            color: "white",
          }}
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
          backgroundColor: "rgba(187, 240, 255, 0.5)",
        }}
      >
        <Box>
          <img src={Wifi} />
        </Box>
        <Box className={classes.headDiv}>
          <h2 className={classes.head}>Development</h2>
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
          backgroundColor: "rgba(206, 246, 214, 0.5)",
        }}
      >
        <Box>
          <img src={Bag} />
        </Box>
        <Box className={classes.headDiv}>
          <h2 className={classes.head}>IT & Software</h2>
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

export default FirstRowCards;
