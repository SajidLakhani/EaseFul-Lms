import { Button, Card, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: "#EFEFF6",
        marginBottom: '40px',
        boxShadow:'none'
    },

    subMain: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px'
    },
    head: {
        margin: 'auto 0',
        color: '#5F5982'
    },
    para: {
        margin: 'auto 0',
        fontSize: '14px',
        color: '#5F5982'
    },

    innerDiv: {
        margin: 'auto 0'
    },

    roundDiv: {
        width: '70px',
        height: '70px',
        background: 'white',
        borderRadius: '50%',
        border: "1px solid white",
    },
    roundpara: {
        color: '#F56962',

        fontSize: "19px",
        margin: "18px 12px",
    },
    button: {
        padding: '4px 30px',
        color: "white",

        width: 'fit-content',
        fontSize: "15px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },
}))

const RightSide = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.subMain}>
                    <div className={classes.innerDiv}>
                        <h4 className={classes.head}>Starter</h4>
                        <p className={classes.para}>Bring your ideas to life</p>
                    </div>
                    <div className={classes.roundDiv}>
                        <p className={classes.roundpara}>Free</p>
                    </div>
                </div>
            </Card>
            <Card className={classes.root} style={{
                backgroundColor: '#FEEFEE'
            }}>
                <div className={classes.subMain}>
                    <div className={classes.innerDiv}>
                        <h4 className={classes.head}>Pro</h4>
                        <p className={classes.para}>Bring your ideas to life</p>
                    </div>
                    <div className={classes.roundDiv}>
                        <p className={classes.roundpara}>$69</p>
                    </div>
                </div>
            </Card>
            <Card className={classes.root}>
                <div className={classes.subMain}>
                    <div className={classes.innerDiv}>
                        <h4 className={classes.head}>Team</h4>
                        <p className={classes.para}>Bring your ideas to life</p>
                    </div>
                    <div className={classes.roundDiv}>
                        <p className={classes.roundpara}>$99</p>
                    </div>
                </div>
            </Card>
            <Card className={classes.root} style={{
                backgroundColor: 'white',
                border: '1px solid #CAC6D4'
            }}>
                <div className={classes.subMain} style={{
                    padding: '28px 15px'
                }}>
                    <div className={classes.innerDiv}>
                        <h4 className={classes.head}>$69</h4>
                        <p className={classes.para}>Billed Yearly</p>
                    </div>
                    <Button className={classes.button}>Select Now</Button>
                </div>
            </Card>
        </div>
    );
};

export default RightSide;