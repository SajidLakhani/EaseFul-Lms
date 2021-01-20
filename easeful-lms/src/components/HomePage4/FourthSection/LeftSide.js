import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";



const useStyles = makeStyles((theme) => ({
    Main: {

        margin: 'auto 0'
    },
    headBox: {
        width: "70%",
    },
    head: {
        fontSize: "30px",
        fontWeight: "bold",

        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.2",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#5f5982",
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
        padding: "5px 8px",
        minWidth: "unset",
        textTransform: 'none',
        height: "35px",
        color: "white",
        fontFamily: 'myFirstFont',
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
                    Learn from leading
                    universities and companies
        </h2>
            </Box>
            <Box className={classes.paraBox}>
                <p className={classes.para}>
                    Start streaming on-demand video lectures
                    today from top instructors in subjects like
                    business, computer science, data science,
                    language learning, & more.
        </p>
        <Button className = {classes.button}>Start Learning Now</Button>
            </Box>


        </div>
    );
};

export default LeftSide;
