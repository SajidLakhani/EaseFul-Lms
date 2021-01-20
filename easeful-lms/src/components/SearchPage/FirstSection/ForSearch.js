import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Search from '../../../Assets/Imgs/search_btn.svg'

const useStyles = makeStyles((theme) => ({
    Main:{
      
    },
  root: {
    display: 'flex',
    
    alignItems: 'center',
    width: '650px',
    // boxShadow: '0px 0px 0px -1px #f5b5b0, 0px 0px 0px 0px #f5b5b0, 0px 7px 12px 0px #f5b5b0',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    '& .MuiInputBase-input':{
        fontSize: '12px',
        color:'#302D3A'
    }
  },
  iconButton: {
    padding: 'unset',
  },
  divider: {
    height: 28,
    margin: 4,
  },

  img:{
      width:'60px'
  }
}));

export default function SearchField() {
  const classes = useStyles();

  return (
      <div className = {classes.Main}>
           <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
       
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Your favourite Course"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <img className = {classes.img} src = {Search}/>
      </IconButton>
      
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        
      </IconButton>
    </Paper>
      </div>
   
  );
}