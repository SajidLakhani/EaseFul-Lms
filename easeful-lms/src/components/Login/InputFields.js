import { Avatar, Button, Card, Divider, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Google from '../../Assets/Imgs/colorgoogle.svg'
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

    Main: {
        width: '60%',

    },
    subMain: {
        marginTop: '20px'
    },
    field: {
        background: "#ffffff",
        margin: "auto",
        marginTop: '10px',
        width: "100%",
        borderRadius: "5px",
        "& .MuiInputLabel-root": {
            fontSize: "12px",
            textAlign: "center",
            fontFamily: 'inherit',
            lineHeight: '0'

        },
        "& input": {
            height: "fit-content",
            padding: '10px 0',
            margin: 'auto 10px',
            fontSize: "12px",
            fontFamily: 'inherit',
            textAlign: "left",
            "&::placeholder": {
                color: "black",
                margin: 'auto 0',
                fontSize: "12px",
                opacity: 1,
            },
        },
    },

    para: {
        margin: '0'
    },
    button: {
        padding: '12px 0px',
        color: "white",
        width: '100%',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        marginTop: '20px',
        backgroundColor: "#f56962",
    },

    forDivider: {
        display: 'flex',
        justifyContent: 'center'
    },

    google: {
        width: '6%',
        borderRadius: 'unset',
        margin: 'auto 0',
        height: 'fit-content'
    },

    buttonGoogle: {

        border: '1px solid #CAC6D4',
        color: "black",
        borderRadius: '5px',
        width: '100%',
        boxShadow: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        fontSize: "12px",

        textTransform: "unset",
        marginTop: '5px',
        backgroundColor: "#ffffff",
    },
    Signpara: {
        color: '#5F5982',
        marginLeft: '10px'
    },

    lastPara: {
        color: '#5F5982',
        margin: 'auto 0',
        marginTop: '15px',
        fontSize: '12px'
    },

    Link: {
        textDecoration: 'none',
        color: '#F56962',
        margin: 'auto 0'
    }


}))
const InputFields = ({ Register }) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className={classes.Main}>

            <div className={classes.subMain}>
                {Register ? <>
                    <p className={classes.para}>Full name</p>
                    <TextField style={{
                        marginBottom: '10px'
                    }} className={classes.field} id="outlined-basic" label="Your name" variant="outlined" />
                </> : <></>}
                <p className={classes.para}>Email Address</p>
                <TextField className={classes.field} id="outlined-basic" label="Example@gmail.com" variant="outlined" />
            </div>
            <div>
                <p className={classes.para} style={{
                    marginTop: '10px'
                }}>Password</p>
                <TextField className={classes.field} id="outlined-basic" label="Password" variant="outlined" />


            </div>
            <Button className={classes.button}>Start Now !</Button>
            <div className={classes.forDivider}>
                <Divider />
                <p>OR</p>
                <Divider />
            </div>
            <Card
                className={classes.buttonGoogle}>
                <Avatar className={classes.google} src={Google} />
                <p className={classes.Signpara}>Sign with Google !</p>
            </Card>
            {Register ? <p className={classes.lastPara}>Already have an account? <Link to='/' className={classes.Link}>Sign in</Link></p>
                : <p className={classes.lastPara}>Don't have an account? <Link to='/register' className={classes.Link}>Sign up</Link></p>}

        </div>
    );
};

export default InputFields;