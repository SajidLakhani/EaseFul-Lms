import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import DropIcon from "../Assets/Imgs/dropdown.svg";
import SearchIcon from "../Assets/Imgs/search.svg";
import CartIcon from "../Assets/Imgs/cart.svg";
import Logo from '../Assets/Imgs/Logo.svg'

// import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const useStyles = makeStyles((theme) => ({
  Main: {
    width: "100%",
    margin: "auto",
  },

  subMain: {
    paddingTop: "25px",
    width: "100%",
    justifyContent: "center",
    margin: "auto",
    display: "flex",
  },

  heading: {
    margin: "0",
  },

  forHome: {
    marginLeft: "32px",
    marginTop: "8px",
    display: "flex",
  },
  forHome2: {
    marginLeft: "35px",
    marginTop: "8px",
    display: "flex",
  },
  para: {
    marginTop: "0",
  },

  optionsBox: {
    fontSize: "17px",
    color: "#544e7a",
    display: "flex",
  },

  image: {
    marginTop: "-16px",
    width: "17px",
    objectFit: "contain",
  },

  image2: {
    marginTop: "-12px",
    width: "17px",
    objectFit: "contain",
  },

  button: {
    padding: "0",
    minWidth: "unset",
    width: "100px",
    height: "45px",
    color: "white",
    marginLeft: "34px",
    fontSize: "12px",
    backgroundColor: "#f56962",
  },

  logoImg:{
      marginTop: '-9px',
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Box className={classes.subMain}>
        <img className = {classes.logoImg} src = {Logo}/>

        <Box className={classes.optionsBox}>
          <Box className={classes.forHome}>
            <p className={classes.para}>Home</p>
            <img className={classes.image} src={DropIcon} />
          </Box>
          <Box className={classes.forHome}>
            <p className={classes.para}>Pages</p>
            <img className={classes.image} src={DropIcon} />
          </Box>
          <Box className={classes.forHome}>
            <p className={classes.para}>Courses</p>
            <img className={classes.image} src={DropIcon} />
          </Box>
          <Box className={classes.forHome}>
            <p className={classes.para}>Features</p>
            <img className={classes.image} src={DropIcon} />
          </Box>
          <Box className={classes.forHome}>
            <p className={classes.para}>Blog</p>
            <img className={classes.image} src={DropIcon} />
          </Box>
          <Box className={classes.forHome}>
            <p className={classes.para}>Shop</p>
            <img className={classes.image} src={DropIcon} />
          </Box>
          <Box className={classes.forHome2}>
            <img className={classes.image2} src={SearchIcon} />
          </Box>
          <Box className={classes.forHome}>
            <img className={classes.image2} src={CartIcon} />
          </Box>

          <Button className={classes.button}>Register</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
