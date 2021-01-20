import { Box, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import Facebook from "../../Assets/Imgs/facebook.svg";
import Twitter from "../../Assets/Imgs/twitter.svg";
import Google from "../../Assets/Imgs/greygoogle.svg";
import LinkedIn from "../../Assets/Imgs/linked.svg";
import Pattern from '../../Assets/Imgs/Pattern.svg'
const useStyles = makeStyles((theme) => ({
  Main: {
    width: "100%",
    backgroundColor: "#282834",
    
  },

  subMain: {
    width: "80%",
    margin:'auto',
    marginTop: '-290px',
    height: "265px",
    justifyContent: "center",
    color: "white",
    display: "flex",
    paddingTop: "36px",
  },

  head: {
    margin: "0",
    fontSize: "22px",
  },

  paraBox: {
    marginTop: "30px",
    color: "#91929a",
    fontSize: "15px",
    lineHeight: "15px",
  },

  forMargin: {
    marginLeft: "118px",
  },

  lastBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "15px",
  },

  bottomPara: {
    margin: "0",
    color: "#777777",
    fontSize: "15px",
    marginLeft: "-39px",
    marginRight: "330px",
    fontSize: "13px",
  },

  iconBox: {
    marginLeft: "22px",
  },

  fbIcon: {
    width: "15px",
  },
  allIcon: {
    width: "15px",
    marginLeft: "19px",
  },

  sideImg :{
    margin: '0',
    width: '80px',
    height: '200px',
  },
  endImg:{
    width: '80px',
    height: '200px',
  },

  forEndImg:{
    margin: 'auto',
    display: "flex",
    marginTop: '-100px',
    marginBottom:'18px',
    justifyContent: "flex-end",
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
        <Box>
            <img className = {classes.sideImg} src = {Pattern}/>
        </Box>
        <Box className = {classes.forEndImg}>
            <img className = {classes.endImg} src = {Pattern}/>
        </Box>

      <Box className={classes.subMain}>
        <Box>
          <h2 className={classes.head}>Company</h2>
          <Box className={classes.paraBox}>
            <p>About</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Blog</p>
            <p>Affiliates</p>
          </Box>
        </Box>
        <Box className={classes.forMargin}>
          <h2 className={classes.head}>Community</h2>
          <Box className={classes.paraBox}>
            <p>Go Premium</p>
            <p>Team Plans</p>
            <p>Refer a Friend</p>
            <p>Gift Cards</p>
            <p>Scholorships</p>
            <p>Free Classes</p>
          </Box>
        </Box>
        <Box className={classes.forMargin}>
          <h2 className={classes.head}>Teaching</h2>
          <Box className={classes.paraBox}>
            <p>Become a Teacher</p>
            <p>Teaching Academy</p>
            <p>Teacher Handbook</p>
            <p>Partnerships</p>
          </Box>
        </Box>
        <Box className={classes.forMargin}>
          <h2 className={classes.head}>Support</h2>
          <Box className={classes.paraBox}>
            <p>Support</p>
            <p>Contact Us</p>
            <p>System Requirements</p>
            <p>Register Activation Key</p>
            <p>Site Feedback</p>
          </Box>
        </Box>
      </Box>
      <Box className={classes.lastBox}>
        <p className={classes.bottomPara}>
          © 2015-2020 Skillfy Education Private Limited. All rights reserved
        </p>
        <Box className={classes.iconBox}>
          <img className={classes.fbIcon} src={Facebook} />

          <img className={classes.allIcon} src={Twitter} />

          <img className={classes.allIcon} src={Google} />

          <img className={classes.allIcon} src={LinkedIn} />
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
