import { Avatar, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import Bus from '../../../Assets/Imgs/bus.jpg'
import Glasses from '../../../Assets/Imgs/glasses.jpg'
import Close from '../../../Assets/Imgs/close.svg'

const useStyles = makeStyles((theme) => ({
    Main: {
        width: 'fit-content',
        height: 'fit-content',
        marginBottom:'15px'
    },
    subMain: {
        display: 'flex',
        padding: '15px',
        margin: 'auto'
    },

    forBottom: {
        display: 'flex',
        margin: 'auto',
        marginTop: '15px'
    },
    lastDiv: {
        display: 'flex',
        margin: 'auto 0'
    },

    head: {
        margin: 0,
        color: '#302D3A'
    },

    para: {
        margin: 'auto 0',
        fontSize: '12px'
    },
    avatarOne: {
        width: '18%',
        height: '100px',
        borderRadius: '5px'
    },
    avatarTwo: {
        borderRadius: '5px',
        width: '25px',
        height: '25px'
    },

    img: {
        width: '18%',
        margin: 'auto'
    }

}))
const LeftSide = () => {
    const classes = useStyles();
    return (
        <div>
            {[1, 2, 3].map((el) => (
                <Card className={classes.Main}>
                    <div className={classes.subMain}>
                        <Avatar className={classes.avatarOne} src={Bus} />
                        <div style={{
                            width: '55%',
                            margin: 'auto'
                        }}>
                            <h4 className={classes.head}>Statistics Data Science and Business Analysis</h4>
                            <div className={classes.forBottom}>
                                <Avatar className={classes.avatarTwo} src={Glasses} />
                                <p className={classes.para} style={{
                                    marginLeft: '10px'
                                }}>Nicole Brown</p>
                            </div>
                        </div>
                        <div className={classes.lastDiv}>
                            <div>
                                <h4 className={classes.head}>$49.65</h4>
                                <p style={{
                                    marginTop: '5px',
                                    color: '#CAC6D4'
                                }} className={classes.para}>$99.99 <span> 50% Off</span></p>
                            </div>
                            <img className={classes.img} src={Close} />
                        </div>
                    </div>
                </Card>
            ))}

        </div>
    );
};

export default LeftSide;