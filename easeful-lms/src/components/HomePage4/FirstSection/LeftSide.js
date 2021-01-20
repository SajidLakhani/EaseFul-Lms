import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    Main: {
        width: "50%",
        margin: 'auto 0'
    },
    headBox: {
        width: "70%",
    },
    head: {
        fontSize: "50px",
        fontWeight: "bold",

        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.2",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#5f5982",
    },
    link: {
        fontSize: "50px",
        fontWeight: "bold",

        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.2",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#f56962",
        textDecoration: 'none'
    },
    paraBox: {
        width: "80%",
    },
    para: {
        fontSize: "15px",
        width: "80%",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.67",
        letterSpacing: "normal",
        
        textAlign: "left",
        color: "#5f5982",
    },
    button: {
        padding: "0",
        minWidth: "unset",
        width: "100px",
        height: "45px",
        color: "white",
        fontFamily:'myFirstFont',
        fontSize: "12px",
        backgroundColor: "#f56962",
      },
}));
const LeftSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Box className={classes.headBox}>
                <h2 className={classes.head}>
                    <Link className={classes.link} to='/'>Skillfy</Link> is the one
                    stop for all students
        </h2>
            </Box>
            <Box className={classes.paraBox}>
                <p className={classes.para}>
                    Get here study material for all classes, entrance
                    exams, and competitive exams and latest
                    education news.
        </p>
        <Button className={classes.button}>Enroll Now</Button>
            </Box>

        </div>
    );
};

export default LeftSide;
