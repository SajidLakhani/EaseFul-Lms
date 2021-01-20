import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import InputFields from './InputFields';
const useStyles = makeStyles((theme) => ({
    Main: {
        width: '70%',
        margin: 'auto',

    },
    button: {
        padding: '10px 20px',
        color: "white",
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },

    contentDiv: {
        display: 'flex',

        justifyContent: 'flex-end',
        marginTop: '40px'

    },

    para: {
        margin: 'auto 20px',
        color: '#5F5982'
    },
    bottomContent: {
        marginTop: '50px',
        width: '60%'

    },

    head: {
        fontSize: '28px',
        fontWeight:'500'
    }


}))

const RightSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.contentDiv}>
                <p className={classes.para}>Already have an account?</p>
                <Button className={classes.button}>Register</Button>
            </div>
            <div className={classes.bottomContent}>
                <h2 className={classes.head}>Hello ! Welcome back.</h2>
                <p style={{
                    color: '#5F5982'
                }}>Log in with your data that you entered
during Your registration</p>

            </div>
            <InputFields />

        </div>
    );
};

export default RightSide;