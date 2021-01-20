import { Avatar, Box, Button, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Android } from '../../../Assets/Imgs/android.svg';
import { ReactComponent as IOS } from '../../../Assets/Imgs/ios.svg';

const useStyles = makeStyles({
    root: {

        width: '65%',
        backgroundColor: '#5f5982',
        margin: 'auto',
        marginBottom: '50px',
        marginTop: '-60px',
    },

    DivBox: {
        display: 'flex'
    },
    subMain: {
        display: 'flex',
        padding: '20px'
    },
    androidDiv: {
        backgroundColor: 'white',
        display: 'flex'
    },
    head: {
        color: 'white',
        margin: 'auto 0'
    },
    button: {
        minWidth: "unset",
        width: "fit-content",
        padding: '6px 16px',
        color: '#5f5982',
        borderRadius: '5px',
        fontSize: "15px",
        fontFamily: 'myFirstFont',
        textTransform: "unset",
        backgroundColor: "#ffffff",

    },

    buttonIos:{
        minWidth: "unset",
        width: "fit-content",
        padding: '6px 16px',
        color: '#ffffff',
        borderRadius: '5px',
        fontSize: "15px",
        fontFamily: 'myFirstFont',
        textTransform: "unset",
        backgroundColor: "#f56962",
        marginLeft:'20px'
    }

})

const FloatingCard = () => {
    const classes = useStyles();
    return (

        <div>

            <Card className={classes.root}>
                <div className={classes.subMain}>
                    <h2 className={classes.head}>App is available for free</h2>
                    <Box className={classes.DivBox}>

                        <Button
                            className={classes.button}
                            startIcon={<Android />}
                        >
                            Android app
      </Button>
      <Button
                                className={classes.buttonIos}
                                startIcon={<IOS />}
                            >
                                IOS app
      </Button>


                    </Box>
                </div>
            </Card>
        </div>

    );
};

export default FloatingCard;