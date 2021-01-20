import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, FormControl, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  controlLabel: {
    "& .MuiFormControlLabel-label": {
      fontSize: "15px",
      fontWeight: "500",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.67",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#5f5982",
      fontFamily: "unset",
    },
    "& .MuiSvgIcon-root": {
      fill: "#43c8b1",
    },
  },
  button: {
    minWidth: "unset",
    padding:'12px',
    height: "35px",
    marginTop: "5px",
    color: "white",
    width:'fit-content',
    fontSize: "12px",
    textTransform: "unset",
    backgroundColor: "#f56962",
  },
}));

export default function CheckBoxComponent() {
  const classes = useStyles();

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          className={classes.controlLabel}
          value="end"
          control={<Checkbox color="primary" />}
          label="Free E-book, Video & Consolation"
          labelPlacement="end"
        />
        <FormControlLabel
          className={classes.controlLabel}
          value="end"
          control={<Checkbox color="primary" />}
          label="Top instructors from around world"
          labelPlacement="end"
        />
        <FormControlLabel
          className={classes.controlLabel}
          value="end"
          control={<Checkbox color="primary" />}
          label="Top courses for your team."
          labelPlacement="end"
        />

        <Button className={classes.button}>Start learning now</Button>
      </FormGroup>
    </FormControl>
  );
}
