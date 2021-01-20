import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Search from '../../../Assets/Imgs/search_btn.svg'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Main: {
        marginTop: '15px'
    },
    root: {
        display: 'flex',
        boxShadow: 'unset',
        border: '1px solid #F56962',
        alignItems: 'center',
        width: '100%',
        // boxShadow: '0px 0px 0px -1px #f5b5b0, 0px 0px 0px 0px #f5b5b0, 0px 7px 12px 0px #f5b5b0',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        '& .MuiInputBase-input': {
            fontSize: '12px',
            color: '#302D3A'
        }
    },
    iconButton: {
        padding: 'unset',
    },
    divider: {
        height: 28,
        margin: 4,
    },

    img: {
        width: '60px'
    },
    button: {
        padding: '6px 20px',
        color: "white",
        width: '100%',
        fontSize: "12px",
        fontWeight: 'bold',
        borderRadius: 'unset',
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },
}));

export default function CouponField() {
    const classes = useStyles();

    return (
        <div className={classes.Main}>
            <Paper component="form" className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu">

                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Enter Coupon"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <Button className={classes.button}>Apply</Button>
                </IconButton>

                <IconButton color="primary" className={classes.iconButton} aria-label="directions">

                </IconButton>
            </Paper>
        </div>

    );
}