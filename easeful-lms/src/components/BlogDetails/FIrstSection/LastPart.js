import { Avatar, Button, Chip, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Claps from '../../../Assets/Imgs/clap.svg'
import Response from '../../../Assets/Imgs/response.svg'
import Sajid from '../../../Assets/Imgs/sajid.jpg'

const useStyles = makeStyles((theme) => ({
    Main: {
        margin: '50px 0'
    },
    chip: {
        borderRadius: 'unset',
        backgroundColor: "#EFEFF6",
        fontFamily: 'inherit',
        height: 'fitContent',
        width: 'fitContent',
        padding: '18px',
        color: '#5F5982',
    },

    subMain: {
        display: 'flex',
        margin: '30px 0',
        justifyContent: 'space-between'
    },

    GridDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    innerDiv: {
        display: 'flex'
    },
    para: {
        margin: 'auto 5px',
        fontSize: '13px',
        color: '#5F5982'
    },
    Img: {
        width: '20%'
    },
    head: {
        margin: 'auto 0'
    },
    button: {
        padding: '5px 20px',
        margin: 'auto 0',
        color: "#F56962",
        border: '1px solid #F56962',
        width: 'fit-content',
        fontSize: "13px",
        fontWeight: 'bold',
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "transparent",
    },
    avatar: {
        borderRadius: 'unset',
        width: '50px',
        height: '50px'
    }
}));

const LastPart = () => {
    const Labels = [
        {
            label: 'affordable'
        },
        {
            label: 'Stunning'
        },
        {
            label: 'Making'
        },
        {
            label: 'Product Design'
        },
        {
            label: 'Madbrains'
        },
        {
            label: 'Development'
        },
    ]
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                {Labels.map((item) => (
                    <Chip className={classes.chip} label={item.label} component="a" href="#chip" clickable />
                ))}

            </div>
            <Grid container spacing={10}>
                <Grid item xs={5} className={classes.GridDiv}>
                    <div className={classes.innerDiv}>
                        <img className={classes.Img} src={Claps} />
                        <p className={classes.para}>4.96K claps</p>
                    </div>
                    <div className={classes.innerDiv}>
                        <img className={classes.Img} src={Response} />
                        <p className={classes.para}>18 Responses</p>
                    </div>
                </Grid>
                <Grid item xs={7} className={classes.GridDiv}>
                    <div className={classes.innerDiv}>
                        <Avatar className={classes.avatar} src={Sajid} />
                        <div style={{
                            margin: 'auto 10px'
                        }}>
                            <p className={classes.para}>Written by</p>
                            <h4 className={classes.head}>Nicole Brown</h4>
                        </div>
                    </div>
                    <Button className={classes.button}>Follow</Button>
                </Grid>
            </Grid>

        </div>
    );
};

export default LastPart;