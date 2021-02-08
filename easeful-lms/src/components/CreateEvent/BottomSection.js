import { Button, makeStyles, TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    Main:{
        margin:'30px 0'
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
        width: "100%",
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
            color: '#5F5982',
            fontSize: "12px",
            fontFamily: 'MyFirstFont',
            textAlign: "left",
            "&::placeholder": {
                color: "#7A7A7A",
                margin: 'auto 0',
                fontSize: "12px",
                opacity: 1,
            },
        },
    },

    forallpara: {
        margin: '0',
        color: '#302D3A'
    },

    subMain: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0'
    },
    textarea: {
        width: '100%',
        borderRadius: '4px',
        padding: '10px',
        fontFamily: 'MyFirstFont',
        fontSize: '12px',
        height: 'fit-content',
        margin:'10px 0',
        color:'#5F5982'
    },
    button: {
        width: 'fit-content',
        padding: '10px 75px',
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
}))

function BottomSection() {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <div style={{ width: '50%' }}>
                    <p className={classes.forallpara}>Event name</p>
                    <TextField InputLabelProps={{ shrink: false }} className={classes.field} placeholder="Event Name" id="outlined-basic" variant="outlined" />
                </div>
                <div style={{ width: '20%' }}>
                    <p className={classes.forallpara}>Start Date/Time</p>
                    <TextField InputLabelProps={{ shrink: false }} className={classes.field} placeholder="Start Date and Time" id="outlined-basic" variant="outlined" />
                </div>
                <div style={{ width: '20%' }}>
                    <p className={classes.forallpara}>End Date/Time</p>
                    <TextField InputLabelProps={{ shrink: false }} className={classes.field} placeholder="End Date and Time" id="outlined-basic" variant="outlined" />
                </div>
            </div>
            <div className={classes.subMain}>
                <div style={{ width: '50%' }}>
                    <p className={classes.forallpara}>Location</p>
                    <TextField InputLabelProps={{ shrink: false }} className={classes.field} placeholder="Location"id="outlined-basic" variant="outlined" />
                </div>
                <div style={{ width: '20%' }}>
                    <p className={classes.forallpara}>Notifications</p>
                    <Autocomplete
                        id="combo-box-demo"
                        options={Notifications}
                        getOptionLabel={(option) => option.title}
                        className={classes.field}
                        renderInput={(params) => <TextField placeholder="Notifications" InputLabelProps={{ shrink: false }} {...params} variant="outlined" />}
                    />
                </div>
                <div style={{ width: '20%' }}>
                    <p className={classes.forallpara}>Email</p>
                    <TextField InputLabelProps={{ shrink: false }} placeholder="example@example.com" className={classes.field} id="outlined-basic" variant="outlined" />
                </div>
            </div>
            <div style={{
                width: '100%'
            }} >
                <p className={classes.forallpara}>Event description</p>
                <TextareaAutosize
                    rowsMax={4}
                    InputLabelProps={{ shrink: false }}
                    className={classes.textarea}
                    placeholder='Work has changed dramatically since the Industrial Revolution, and teams have changed with it. Join Atlassian’s Work Futurist Dominic Price to learn how to keep up and make your team more effective, starting today.Atlassian has developed the Team Playbook — a no-bullshit guide to unleashing your team’s potential. In this 35-minute class, Dominic shares the best of the method — an essential guide to the 8 essential attributes of successful teams. Packed with research, case studies, and easy evaluation steps that require nothing more than pen and paper,'
                    id="outlined-basic"
                    variant="outlined"
                />
            </div>
            <div style ={{
                textAlign:'-webkit-right'
            }}>
            <Button className={classes.button}>Save now</Button>
            </div>
           
        </div>
    )
}
const Notifications = [
    { title: '30 Mins' },
    { title: '40 Mins' },
    { title: '50 Mins' },

];

export default BottomSection
