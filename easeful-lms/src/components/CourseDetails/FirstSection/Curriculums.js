import React from 'react';
import { Avatar, Button, makeStyles } from '@material-ui/core';
import Selectors from './Selectors';
import OrangeClock from '../../../Assets/Imgs/orangeClock.svg'
import CurriCulum from '../../../Assets/Imgs/curriculum.jpg'

const useStyles = makeStyles((theme) => ({
    subMain: {
        backgroundColor: '#FEF9E5',
        marginTop: '15px'
    },
    subMain2: {
        backgroundColor: 'rgba(67,200,177,0.1)',

        marginTop: '15px'
    },
    button: {
        width: 'fit-content',
        padding: '5px 10px',
        fontFamily: 'myFirstFont',
        margin: 'auto 0',
        color: "#ffffff",
        backgroundColor: '#F68C20',
        fontSize: "12px",
        textTransform: "unset",
    },

    container: {
        display: 'flex',
        padding: '15px',
        justifyContent: 'space-between'
    },
    avatar: {
        width: '15%',
        height: '80px',
        borderRadius: 'unset'
    },
    img: {
        width: '20px'
    },
    heading: {
        margin: 0
    },
    para: {
        margin: 0,
        fontSize: '15px',
        marginLeft: '10px'
    }
}))

const Curriculums = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Selectors active = "curriculum" />
            {[1, 2].map((item) => (
                <div className={classes.subMain}>
                    <div className={classes.container}>
                        <Avatar src={CurriCulum} className={classes.avatar} />
                        <div style={{
                            margin: 'auto'
                        }}>
                            <h4 className={classes.heading}>Everything You Need To Know Business</h4>
                            <div style={{
                                display: 'flex',
                                marginTop: '10px'
                            }}>
                                <img className={classes.img} src={OrangeClock} />
                                <p className={classes.para}>Duration 10 week</p>
                            </div>
                        </div>
                        <Button className={classes.button}>Try with Pro</Button>
                    </div>

                </div>
            ))}
            {[1, 2].map((item) => (
                <div className={classes.subMain2}>
                    <div className={classes.container}>
                        <Avatar src={CurriCulum} className={classes.avatar} />
                        <div style={{
                            margin: 'auto'
                        }}>
                            <h4 className={classes.heading}>Everything You Need To Know Business</h4>
                            <div style={{
                                display: 'flex',
                                marginTop: '10px'
                            }}>
                                <img className={classes.img} src={OrangeClock} />
                                <p className={classes.para}>Duration 10 week</p>
                            </div>
                        </div>
                        <Button className={classes.button}>Try with Pro</Button>
                    </div>

                </div>
            ))}


        </div>
    );
};

export default Curriculums;