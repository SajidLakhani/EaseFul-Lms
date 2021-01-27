import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '../../../Assets/Imgs/coursesearch.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#EFEFF6',
        boxShadow: 'unset'
    },
    input: {
        margin: 'auto 8px',
        fontSize: '11px',
        color:'#91929A',
        flex: 1,
    },
    image: {
        width: '8%',
        margin: '10px 0px',
        marginLeft: '20px'
    }
}));

export default function SearchField() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>

            < img src={SearchIcon} className={classes.image} />

            <InputBase
                className={classes.input}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />

        </Paper>
    );
}

