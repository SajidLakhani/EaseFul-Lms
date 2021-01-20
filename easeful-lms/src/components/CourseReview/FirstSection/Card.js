import { Avatar, Button, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import Photoshop from '../../../Assets/Imgs/photoshop.jpg'
import OrangeClock from '../../../Assets/Imgs/orangeClock.svg'
import BottomPart from '../../CourseDetails/FirstSection/BottomPart';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    Main: {
        
    },
    outerCard: {
        width: '100%',
        margin: 'auto'
    },
    innerDiv: {
        padding: '15px'
    },
    avatar: {
        width: '100%',
        height: '220px',
        borderRadius: 'unset'
    },
    priceDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    },
    h1: {
        margin: 'auto 0'
    },
    h3: {
        margin: 'auto 2px',
        fontWeight: 'unset',
        color: '#CAC6D4'
    },

    orange: {
        display: 'flex',
        justifyContent: 'center'
    },
    orangepara: {
        margin: 'auto 10px',
        color: '#F68C20',
        fontSize: "12px",
        fontWeight: 'bold',
    },
    orangeImg: {
        margin: "auto 0",
        width: '20px',
    },

    button: {
        width:'100%',
        padding: '10px 25px',
        fontFamily: 'myFirstFont',
        margin: '10px 0',
        color: "#ffffff",
        backgroundColor: '#f56962',
        fontSize: "12px",
        textTransform: "unset",
    },

    link: {
        textDecoration: 'none'
    },

}))

const RightSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Card className={classes.outerCard}>
                <div className={classes.innerDiv}>
                    <div className={classes.priceDiv}>
                        <h1 className={classes.h1}>
                            $49.65
                        </h1>
                        <h3 className={classes.h3}>
                            $99.99
                        </h3>
                        <h3 className={classes.h3}>
                            50% Off
                        </h3>
                    </div>
                    <div className={classes.orange}>
                        <img src={OrangeClock} className={classes.orangeImg} />
                        <p className={classes.orangepara}>11 Hour left at this price</p>
                    </div>
                    <Link className={classes.link} to="/cart">
                    <Button className={classes.button}>Buy Now</Button>
                    </Link>
                    <BottomPart/>

                </div>
            </Card>
        </div>
    );
};

export default RightSide;