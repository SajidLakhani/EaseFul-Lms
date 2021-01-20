import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import InputFields from '../Login/InputFields';
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
        fontSize: '30px',
        fontWeight: '500'
    }


}))

const RightSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.contentDiv}>
                <p className={classes.para}>Don't have an account?</p>
                <Button className={classes.button}>Login</Button>
            </div>
            <div className={classes.bottomContent}>
                <h2 className={classes.head}>Create Your Free Account</h2>
                <p style={{
                    color: '#5F5982'
                }}>See how the world’s best user experiences
                are created</p>

            </div>
            <InputFields Register = {true} />

        </div>
    );
};

export default RightSide;