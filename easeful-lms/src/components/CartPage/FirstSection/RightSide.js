import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CouponField from './CouponField';
const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#FEF0EF',
        height: 'fit-content',
        width: 'fit-content',
    },

    subMain: {
        padding: '15px 20px ',

    },

    para: {
        margin: 'auto 0',
        fontSize: '12px',
        color: '#CAC6D4'
    },

    head: {
        margin: 0
    },
    bottom: {
        display: 'flex',
        justifyContent:'space-between'
    },

    link: {
        textDecoration: 'none'
    },

    innerDiv: {

    },
    button: {
        padding: '6px 20px',
        color: "white",
        width: '100%',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },
}))
const RightSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <h4 className={classes.head}> Cart Totals</h4>

                <div className={classes.bottom}>
                    <h4>$49.65</h4>
                    <p className={classes.para}>$99.99 <span> 50% Off</span></p>
                </div>
                <Link className={classes.link} to="/checkout">
                    <Button className={classes.button}>Check Out</Button>
                    </Link>
                <CouponField />
            </div>

        </div>
    );
};

export default RightSide;