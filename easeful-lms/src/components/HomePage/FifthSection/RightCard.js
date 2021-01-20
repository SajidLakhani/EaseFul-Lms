import { Box, makeStyles } from "@material-ui/core";
import { ClassSharp } from "@material-ui/icons";
import React from "react";
import Check from "../../../Assets/Imgs/Demo.png";
const useStyles = makeStyles((theme) => ({
    Main:{
        marginBottom: '80px',
        marginTop: '40px',
    },

    Img:{
        height: '435px',
    width: '390px',
    objectFit:'fill',
    marginLeft: '-45px',
    borderTopRightRadius: 'inherit',
    marginTop: '35px',
    },

  ImgBox: {
    border: "3px solid #f56962",
    width: "380px",
    borderTopRightRadius: "100px",
    height: "420.5px",
  },
}));
const RightCard = () => {
  const classes = useStyles();

  return (
    <div className = {classes.Main}>
    
          
        <Box className={classes.ImgBox}>
        <img className={classes.Img} src={Check} />
        </Box>
        
      
    </div>
  );
};

export default RightCard;
