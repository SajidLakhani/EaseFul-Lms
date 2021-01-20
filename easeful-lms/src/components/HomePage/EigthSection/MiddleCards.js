import { Avatar, Box, Card, makeStyles, Button } from "@material-ui/core";
import React from "react";
import Sajid from "../../../Assets/Imgs/sajid.jpg";

const useStyles = makeStyles((theme) => ({
  Main: {
    textAlign: "-webkit-center",
    paddingTop: "40px",
  },
  root: {
    width: "370px",
    backgroundColor: "#ffffff",

    marginRight: "15px",
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
    width: "80%",
    margin: "auto",
    marginLeft: "15px",
    textAlign: "left",
    marginTop: "12px",
    marginBottom: "30px",
  },
  para2: {
    margin: 0,
    width:'95%',
    marginTop: "10px",
    textAlign: "left",
    fontSize: "11px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",

    color: "#5f5982",
  },
  mapBox: {
    display: "flex",
    marginTop: "25px",
    justifyContent: "center",
  },

  avatar: {
    width: "55px",
    height: "55px",
    marginTop: "20px",
  },
  button: {
    minWidth: "unset",
    
    height: "35px",
    marginTop: "10px",
    color: "white",

    fontSize: "12px",
    textTransform: "unset",
    backgroundColor: "#f56962",
  },
}));

const MiddleCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Box className={classes.mapBox}>
        <Box className={classes.Content}>
          <Card className={classes.root}>
            <Box className={classes.subMain}>
              <Box className={classes.avatarBox}>
                <Avatar className={classes.avatar} alt="Sajid" src={Sajid} />
                <Box className={classes.forText}>
                  <h5 className={classes.head}>Become a Teacher</h5>

                  <p className={classes.para2}>
                    Teach what you love. Coursector gives you the tools to
                    create a course.
                  </p>
                  <Button className={classes.button}>Apply as Teacher</Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box className={classes.Content}>
          <Card className={classes.root}>
            <Box className={classes.subMain}>
              <Box className={classes.avatarBox}>
                <Avatar className={classes.avatar} alt="Sajid" src={Sajid} />
                <Box className={classes.forText}>
                  <h5 className={classes.head}>Coursector for Business</h5>

                  <p className={classes.para2}>
                    Get unlimited access to 3,000+ of Coursector’s top courses
                    for your team
                  </p>
                  <Button className={classes.button}>
                    Get skillfy for business{" "}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default MiddleCards;
