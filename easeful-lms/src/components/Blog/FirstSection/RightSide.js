import { makeStyles, Card, CardMedia } from '@material-ui/core';
import React from 'react';
import Swift from '../../../Assets/Imgs/swift.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        height:'100%',
        borderRadius:'unset'
    },
    media: {
        height: '100%',
    },
}))
const RightSide = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={Swift}
                title="Image"
            />
        </Card>
    );
};

export default RightSide;