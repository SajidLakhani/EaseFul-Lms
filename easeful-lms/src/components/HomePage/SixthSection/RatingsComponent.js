import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    Main:{
        marginTop: '15px',
    },
    subMain:{
        '& .MuiRating-root' :{
            color:'#f68c20'
        },
    }
}))

export default function RatingsComponent() {
    const classes = useStyles();
  return (
    <div className = {classes.Main}>
      <Box className = {classes.subMain}component="fieldset" mb={2} borderColor="transparent">
        <Rating
          name="customized-empty"
          defaultValue={2}
          precision={1}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
    
    </div>
  );
}