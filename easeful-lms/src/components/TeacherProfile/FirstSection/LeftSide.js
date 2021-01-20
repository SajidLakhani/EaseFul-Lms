import { Avatar, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import Farrah from '../../../Assets/Imgs/farrah.jpg'

const useStyles = makeStyles({
    avatar: {
        width: '90%',
        height: '230px',
        margin: 'auto',
        padding: '10px',
        borderRadius: 'unset'
    }

});

const LeftSide = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Avatar className={classes.avatar} src={Farrah} />
        </Card>
    );
};

export default LeftSide;