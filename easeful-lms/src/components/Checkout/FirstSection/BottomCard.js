import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  field: {
    background: "#ffffff",
    margin: "auto",
    marginTop: '10px',
    width: "100%",
    borderRadius: "5px",
    "& .MuiInputLabel-root": {
      fontSize: "12px",
      textAlign: "center",
      fontFamily: 'inherit',
      lineHeight:'0'

    },
    "& input": {
      height: "fit-content",
      padding: '10px 0',
      margin: 'auto 10px',
      fontSize: "12px",
      fontFamily: 'inherit',
      textAlign: "left",
      "&::placeholder": {
        color: "black",
        margin: 'auto 0',
        fontSize: "12px",
        opacity: 1,
      },
    },
  },

  forHead: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  },

  head: {
    margin: 'auto 0'
  },
  button: {
    padding: '10px 0px',
    color: "white",
    marginTop:'10px',
    width: '100%',
    fontSize: "12px",
    fontFamily: 'inherit',
    textTransform: "unset",
    backgroundColor: "#f56962",
  },

}));

export default function BottomCard() {
  const classes = useStyles();

  const labels = [
    {
      label: 'Name on Card'
    },
    {
      label: 'Card Number'
    },
    {
      label: 'Expiration Date'
    },
    {
      label: 'Security Code'
    },
  ]

  return (
    <div className={classes.root}>
      {labels.map((item) => (
        <TextField className={classes.field} id="outlined-basic" label={item.label} variant="outlined" />
      ))}

      <div className={classes.forHead}>
        <h3 className={classes.head}>Total</h3>
        <h3 className={classes.head}>$49.65</h3>
      </div>
      <Button className={classes.button}>Pay Now</Button>

    </div>


  );
}