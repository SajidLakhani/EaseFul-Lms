import { makeStyles , Button} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    Main:{
        padding:'30px 0',
        width:'38%',
        margin:'auto'
    },

    para: {
        fontSize: '12px',
        color: '#5F5982'
    },
    span: {
        color: '#F68C20'
    },
    button: {
        padding: '8px 20px',
        color: "white",
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },

}))

const LeftSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <p className={classes.para}>By Themadbrains in <span className={classes.span}>inspiration</span></p>
            <h1>Why Swift UI Should Be on
            the Radar of Every Mobile
Developer</h1>
            <p className={classes.para}>Choose from over 40,000 online video courses with new additions published every month.
</p>
            <Button className={classes.button}>Start learning now</Button>
        </div>
    );
};

export default LeftSide;