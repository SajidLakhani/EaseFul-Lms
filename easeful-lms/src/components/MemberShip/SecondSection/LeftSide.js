import { Card, makeStyles, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        backgroundColor: '#EFEFF6'
    },

    subMain: {
        padding: '50px'
    },

    button: {
        padding: '8px 20px',
        color: "white",

        width: 'fit-content',
        fontSize: "15px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },

    contentDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto 0'
    },

    para: {
        fontSize: '15px',
        color: '#5F5982'
    },

    controlLabel: {
        "& .MuiSvgIcon-root": {
          fill: "#F56962",
        },
      },

}))

const LeftSide = () => {
    const classes = useStyles();
    const data = [
        {
            text: 'Unlimited access to 22,000+ classes'
        },
        {
            text: 'user management'
        },
        {
            text: 'Admin functionality'
        },
        {
            text: 'Mobile, casting,'
        },
        {
            text: 'Offline capabilities'
        },
        {
            text: 'Workshops'
        },
        {
            text: 'Group System'
        },
    ]
    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.subMain}>
                    <div className={classes.buttonDiv}>
                        <Button className={classes.button} style={{
                            backgroundColor: 'white',
                            color: '#5F5982'
                        }}>Monthly Plan</Button>
                        <Button className={classes.button}>Yearly Plan</Button>
                    </div>
                    {data.map((item) => (
                        <div className={classes.contentDiv}>
                            <p className={classes.para}>{item.text}</p>
                            <FormControlLabel
                                className={classes.controlLabel}
                                value="end"
                                control={<Checkbox color="primary" />}
                            />
                        </div>
                    ))}

                </div>
            </Card>
        </div>
    );
};

export default LeftSide;