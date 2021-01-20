import { makeStyles } from '@material-ui/core';
import React from 'react';

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import ForScreen from '../../../Assets/Imgs/screen.jpg'

import Overview from '../../CourseDetails/FirstSection/Overview';


const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        height: '400px'
    },
    media: {
        height: '100%',
    },
});

export default function Screen() {
    const classes = useStyles();

    return (
        <div>

            <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={ForScreen}
                    title="Image"
                />

            </Card>

            <Overview />
        </div>

    );
}