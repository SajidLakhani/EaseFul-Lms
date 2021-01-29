import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0px'
    },
    button: {
        width: 'fit-content',
        padding: '8px 25px',
        fontFamily: 'myFirstFont',
        margin: '10px 0',
        color: "#ffffff",
        backgroundColor: '#f56962',
        fontSize: "12px",
        textTransform: "unset",
        "&:hover": {
            backgroundColor: '#f56962',
        },
    },
    skip: {
        margin: 'auto 0',
        cursor:'pointer'
    },
    field: {
        
        '& :before': {
            borderBottom: 'none'
        },
        '& :after': {
            borderBottom: 'none'
        },
        background: "#ffffff",
        margin: "auto 0",
        marginTop: '10px',
        width: "47%",
        borderRadius: "5px",
        padding: '0',
        "& .MuiAutocomplete-inputRoot": {
            padding: '0'
        },

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
            color: '#7A7A7A',
            fontSize: "12px",
            fontFamily: 'inherit',
            textAlign: "left",
            "&::placeholder": {
                color: "#7A7A7A",
                margin: 'auto 0',
                fontSize: "12px",
                opacity: 1,
            },
        },
    },
}));

export default function BottomFields({handleClose}) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <div className={classes.root}>
                <TextField className={classes.field} id="outlined-basic" label="Name" variant="outlined" />
                <TextField className={classes.field} id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div className={classes.root}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        style={{ border: '1px solid #CAC6D4' }}
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        className={classes.field}
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        style={{ border: '1px solid #CAC6D4' }}
                        margin="normal"
                        id="time-picker"
                        className={classes.field}
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className={classes.root}>
                <Autocomplete
                    id="combo-box-demo"
                    options={Teacher}
                    getOptionLabel={(option) => option.title}
                    className={classes.field}
                    renderInput={(params) => <TextField {...params} label="Teacher" variant="outlined" />}
                />
                <Autocomplete
                    id="combo-box-demo"
                    options={Subject}
                    getOptionLabel={(option) => option.title}
                    className={classes.field}
                    renderInput={(params) => <TextField {...params} label="Subject" variant="outlined" />}
                />
            </div>
            <div className={classes.root}>
                <p className={classes.skip} onClick = {handleClose}>Skip</p>
                <Button className={classes.button}>Submit now</Button>
            </div>
        </div>

    );
}

const Teacher = [
    { title: 'Sajid' },
    { title: 'Rovid' },
    { title: 'Faizan' },

];

const Subject = [
    { title: 'English' },
    { title: 'Urdu' },
    { title: 'Physics' },

];
