import { Avatar, Box, makeStyles } from "@material-ui/core";
import React from "react";
import Sajid from "../../../Assets/Imgs/sajid.jpg";
const useStyles = makeStyles((theme) => ({
  head: {
    fontSize: "20px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "0.6",
    letterSpacing: "normal",
    
    color: "#302d3a",
  },
  avatar: {
    width: "100px",
    height: "50px",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    fontSize: "1.25rem",
    alignItems: "center",
    flexShrink: "0",
    borderRadius: 'unset',
    marginRight: '30px',
    lineHeight: "1",
    userSelect: "none",

    justifyContent: "center",

    '& .MuiAvatar-img':{
        objectFit:'fill'
    }
  }, 
  Main:{
    display: 'block',
    paddingTop: '40px',
    width: '100%',
    textAlign: 'center',
  },

  avatarBox:{
    marginBottom: '50px',
    marginTop: '35px',
    display:'flex',
    justifyContent:'center'
  }
}));

const AvatarCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.Main}>
      <Box>
        <h2 className={classes.head}>Trusted by our awesome partners</h2>
      </Box>
      <Box className = {classes.avatarBox}>
      {[1 ,2 ,3 , 4 , 5 , 6 , 7].map((el) => (
 <Avatar className={classes.avatar} alt="Sajid" src={Sajid} />
      ))}
       
      </Box>
    </div>
  );
};

export default AvatarCards;
