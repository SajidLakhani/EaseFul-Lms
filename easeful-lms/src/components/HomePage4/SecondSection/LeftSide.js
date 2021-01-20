import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import CheckBoxComponent from "../../HomePage/FifthSection/CheckBoxComponent";


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
        textTransform:'none',
        height: "45px",
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
                    Learner outcomes
                    on Skillfy
        </h2>
            </Box>
            <Box className={classes.paraBox}>
                <p className={classes.para}>
                    87% of people learning for professional
                    development report career benefits like
                    getting a promotion, a raise, or
                    starting a new career
        </p>
                
            </Box>
            <CheckBoxComponent/>

        </div>
    );
};

export default LeftSide;
