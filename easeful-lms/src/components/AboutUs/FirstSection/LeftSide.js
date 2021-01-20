import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({

    button: {
        padding: '8px 20px',
        color: "white",
        margin: 'auto',
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },

    para: {
        fontSize: '15px',
        color: '#5F5982'
    }

}))

const LeftSide = () => {
    const classes = useStyles();
    return (
        <div>
            <p className={classes.para} style={{
                margin: 'auto'
            }}>About us</p>
            <h1>Skillfy powers Course
            1,000,000 businesses
worldwide</h1>
            <p className={classes.para}>By connecting students all over the world to the best instructors, Skillfy is helping individuals reach their goals and pursue their dreams.
</p>
            <Button className={classes.button}>Read more</Button>
        </div>
    );
};

export default LeftSide;